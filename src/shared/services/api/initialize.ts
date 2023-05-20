import axios from 'axios';
import QS from 'qs';
import { BASE_URL } from 'shared/constants/env';

const MAX_REQUEST_PER_SECOND = 10;

let isAPILock = false;
let requestPerSecondCount = 0;
let previousAPICallTime = Date.now();

const $axios = axios.create({
  timeout: 40_000,
  withCredentials: false,
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-Web-Optimize-Response': 1,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

function onError(error: any) {
  if (!axios.isCancel(error)) {
    // SHOW ERROR MESSAGE
  }
  return Promise.reject(error);
}

const handleInterceptorsLockAPI = () => {
  throw new axios.Cancel();
};

$axios.interceptors.request.use((config) => {
  if (isAPILock) {
    handleInterceptorsLockAPI();
  }

  const currentTime = Date.now();
  const diffTime = currentTime - previousAPICallTime;
  const isInPreviousSecond = diffTime < 1000;

  if (isInPreviousSecond) {
    requestPerSecondCount++;
  } else {
    requestPerSecondCount = 0;
    previousAPICallTime = currentTime;
  }

  if (requestPerSecondCount > MAX_REQUEST_PER_SECOND) {
    isAPILock = true;
    handleInterceptorsLockAPI();
  }

  const newConfig = { ...config };
  newConfig.paramsSerializer = (parameters) => {
    return QS.stringify(parameters, {
      arrayFormat: 'indices',
      encode: true
    });
  };
  return newConfig;
}, onError);

const serviceGet = $axios.get;
const servicePost = $axios.post;

export { servicePost, serviceGet };
