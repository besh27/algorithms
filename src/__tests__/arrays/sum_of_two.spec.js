import twoSum from '../../algorithms/arrays/sum_of_two';

describe('Monotone SubArray Test', () => {
  it('should render the sum of 9', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([0, 1]);
  });
});