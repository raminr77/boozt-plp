import { REQUEST_TYPES } from 'shared/constants/request-types';
import { CancelToken, get, post } from 'shared/services/api';

interface Props {
  url: string;
  type: GRequestMethod;
  transformer: (data: any) => any;
  inputTransformer?: (data: any) => any;
}

export function apiRequestObject({
  url,
  transformer,
  inputTransformer,
  type = REQUEST_TYPES.GET
}: Props) {
  const source = CancelToken.source();

  const apiCall = (data: any, options = {}) => {
    // start Request
    const moderatedOptions = { ...options };
    const transformedData = inputTransformer ? inputTransformer(data) : data;
    const dataIsFormData = transformedData instanceof FormData;
    const modifiedData = dataIsFormData ? data : transformedData;

    return new Promise((resolve, reject) => {
      try {
        // RESPONSE
        const handleResponse = (response: any) => {
          if (transformer) {
            resolve(transformer({ data: response }));
          }
          resolve(response);
        };
        // GET
        if (type === REQUEST_TYPES.GET) {
          get({
            url,
            config: {
              params: modifiedData,
              cancelToken: source.token,
              ...moderatedOptions
            }
          }).then(handleResponse);
        }
        // POST
        if (type === REQUEST_TYPES.POST) {
          post({
            url,
            data: modifiedData,
            config: {
              cancelToken: source.token,
              ...moderatedOptions
            }
          }).then(handleResponse);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  apiCall.cancel = () => {
    source.cancel('Request was cancelled');
  };
  apiCall.url = url;
  return apiCall;
}
