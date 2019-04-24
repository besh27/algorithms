import isMonotonic from '../../algorithms/arrays/is_monotonic';

describe('isMonotonic Checker', () => {
  it('should render true in the output because the array is monotonically accending', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
    expect(isMonotonic(numbers)).toBeTruthy();
  });

  it('should render true in the output because the array is monotonically accending', () => {
    const numbers = [1, 3, 5, 10, 15, 21, 23, 27, 33, 40, 46];
    expect(isMonotonic(numbers)).toBeTruthy();
  });

  it('should render true in the output because the array is monotonically descending', () => {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(isMonotonic(numbers)).toBeTruthy();
  });

  it('should render false in the output because the array is not monotonic', () => {
    const numbers = [1, 10, 12, 3, 4, 5, 2, 7, 3, 14, 2];
    expect(isMonotonic(numbers)).toBeFalsy();
  });
});
