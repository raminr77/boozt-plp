import { REQUEST_TYPES } from 'shared/constants/request-types';

const LOG_STACK = [];

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
