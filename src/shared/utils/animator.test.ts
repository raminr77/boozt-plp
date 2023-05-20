/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { animator } from './animator';

describe('animator', () => {
  test('should return empty string if name is not provided', () => {
    const props = { name: '' };
    const result = animator(props);
    expect(result).toBe('');
  });

  test('should return correct animation classes when all props are provided', () => {
    const props = {
      name: 'fadeIn',
      speed: 'slow',
      repeat: 3,
      delay: '2s'
    };
    const result = animator(props);
    const expected =
      'animate__animated animate__fadeIn animate__slow animate__repeat-3 animate__delay-2s';
    expect(result).toBe(expected);
  });

  test('should return correct animation classes when only name is provided', () => {
    const props = { name: 'zoomIn' };
    const result = animator(props);
    const expected = 'animate__animated animate__zoomIn';
    expect(result).toBe(expected);
  });

  test('should return correct animation classes when some props are missing', () => {
    const props = { name: 'slideInRight', speed: 'fast' };
    const result = animator(props);
    const expected = 'animate__animated animate__slideInRight animate__fast';
    expect(result).toBe(expected);
  });

  test('should return trimmed animation classes if there are extra spaces', () => {
    const props = { name: 'flipOutX  ', repeat: 'infinite  ' };
    const result = animator(props);
    const expected = 'animate__animated animate__flipOutX animate__repeat-infinite';
    expect(result).toBe(expected);
  });
});
