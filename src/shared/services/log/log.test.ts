import { REQUEST_TYPES } from 'shared/constants/request-types';

import { LOG_STACK, sendLog } from './index';

const url = 'https://boozt-plp.ir';

describe('sendLog', () => {
  beforeEach(() => {
    LOG_STACK.length = 0;
  });

  test('should push log message with default method and URL to the log stack', () => {
    const props = { message: 'Error message' };
    sendLog(props);
    expect(LOG_STACK).toHaveLength(1);
    expect(LOG_STACK[0]).toBe(
      `Error message \n [${REQUEST_TYPES.GET}] [ PAGE ] ${location.href}`
    );
  });

  test('should push log message with specified method and URL to the log stack', () => {
    const props = {
      message: 'Error message',
      method: REQUEST_TYPES.POST,
      url
    };
    sendLog(props);
    expect(LOG_STACK).toHaveLength(1);
    expect(LOG_STACK[0]).toBe(
      `Error message \n [${REQUEST_TYPES.POST}] https://boozt-plp.ir`
    );
  });

  test('should push log message with default URL when URL is not provided', () => {
    const props = {
      message: 'Error message',
      method: REQUEST_TYPES.GET
    };
    sendLog(props);
    expect(LOG_STACK).toHaveLength(1);
    expect(LOG_STACK[0]).toBe(
      `Error message \n [${REQUEST_TYPES.GET}] [ PAGE ] ${location.href}`
    );
  });

  test('should push log message with default method when method is not provided', () => {
    const props = {
      message: 'Error message',
      url
    };
    sendLog(props);
    expect(LOG_STACK).toHaveLength(1);
    expect(LOG_STACK[0]).toBe(
      `Error message \n [${REQUEST_TYPES.GET}] https://boozt-plp.ir`
    );
  });

  test('should push log message with default method and URL when both method and URL are not provided', () => {
    const props = {
      message: 'Error message'
    };
    sendLog(props);
    expect(LOG_STACK).toHaveLength(1);
    expect(LOG_STACK[0]).toBe(
      `Error message \n [${REQUEST_TYPES.GET}] [ PAGE ] ${location.href}`
    );
  });
});
