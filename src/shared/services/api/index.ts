import axios, { AxiosRequestConfig } from 'axios';
import { REQUEST_TYPES } from 'shared/constants/request-types';
import { serviceGet, servicePost } from 'shared/services/api/initialize';
import { sendLog } from 'shared/services/log';

interface Props {
  response: any;
  reject: (result: any) => void;
  resolve: (result: any) => void;
}
interface RequestProps {
  data?: any;
  url: string;
  config?: AxiosRequestConfig;
}

function handleResponse({ response, reject, resolve }: Props) {
  const status = response?.status || response.data?.status || 500;
  const message = response.data?.message || '';

  switch (status) {
    case 200: {
      resolve(response?.data);
      break;
    }
    case 301: {
      // REDIRECT TO INDEX
      reject(response);
      break;
    }
    case 401: {
      // REDIRECT TO LOGIN
      reject(response);
      break;
    }
    case 404: {
      // REDIRECT TO 404
      reject(response);
      break;
    }
    default: {
      reject(response);
    }
  }

  if (status >= 300 && message) {
    // SHOW ERROR MESSAGE
    reject(response);
  }
}

function get({ url, config }: RequestProps) {
  return new Promise((resolve, reject) => {
    serviceGet(url, config)
      .then((response: any) => {
        handleResponse({ response, reject, resolve });
      })
      .catch((error: any) => {
        sendLog({ url, method: REQUEST_TYPES.GET, message: 'GET Request Failed.' });
        reject(error);
      });
  });
}

function post({ url, data, config }: RequestProps) {
  return new Promise((resolve, reject) => {
    servicePost(url, data, config)
      .then((response) => {
        handleResponse({ response, reject, resolve });
      })
      .catch((error) => {
        sendLog({ url, method: REQUEST_TYPES.POST, message: 'POST Request Failed.' });
        reject(error);
      });
  });
}

const { CancelToken } = axios;
export { get, post, CancelToken };
