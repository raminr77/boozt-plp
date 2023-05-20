import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should debounce function call', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should debounce function call', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    jest.advanceTimersByTime(800);
    debouncedFn();
    jest.advanceTimersByTime(1200);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
