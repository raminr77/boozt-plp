import { calculatePageItemsCount } from './pagination';

test('should calculate page items count correctly for the first page', () => {
  const page = 1;
  const expected = '[ 1 to 24 ]';
  const result = calculatePageItemsCount(page);
  expect(result).toBe(expected);
});

test('should calculate page items count correctly for a middle page', () => {
  const page = 3;
  const expected = '[ 49 to 72 ]';
  const result = calculatePageItemsCount(page);
  expect(result).toBe(expected);
});

test('should calculate page items count correctly for the last page', () => {
  const page = 5;
  const expected = '[ 97 to 120 ]';
  const result = calculatePageItemsCount(page);
  expect(result).toBe(expected);
});
