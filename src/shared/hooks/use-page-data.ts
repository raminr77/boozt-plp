/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { sendLog } from 'shared/services/log';

interface Properties {
  apiData?: any;
  apiMethod: any;
  disabled?: boolean;
  expireTime?: number;
  dataCached?: boolean;
  onFinally?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (response: any) => void;
}

export const usePageData = ({
  onError,
  onSuccess,
  onFinally,
  apiMethod,
  apiData = null,
  disabled = false
}: Properties) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);

  const fetchData = (params = apiData) => {
    if (!apiMethod || disabled) {
      return;
    }
    setPending(true);
    try {
      apiMethod(params)
        .then((response: any) => {
          setData(response);
        })
        .catch((error: any) => {
          onError?.(error);
        })
        .finally(() => {
          onFinally?.();
          setPending(false);
        });
    } catch {
      setPending(false);
      sendLog({ url: apiMethod.url, message: 'Error: UsePageData' });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data || pending) {
      return;
    }
    onSuccess?.(data);
  }, [data, pending]);

  return {
    data,
    pending,
    reload: fetchData
  };
};
