import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('should return false for an array with an empty object', () => {
    expect(isEmpty([{}])).toBe(false);
  });

  test('should return false for a mixed types array', () => {
    expect(isEmpty(['apple', 1, 'banana', 2])).toBe(false);
  });
});
