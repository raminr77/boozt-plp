import { REQUEST_TYPES } from 'shared/constants/request-types';

export const LOG_STACK: string[] = [];

interface Props {
  method?: GRequestMethod;
  message: string;
  url?: string;
}

export const sendLog = ({
  message = 'Network Error',
  method = REQUEST_TYPES.GET,
  url = `[ PAGE ] ${location.href}`
}: Props): void => {
  // save or send your log
  LOG_STACK.push(`${message} \n [${method}] ${url}`);
};
