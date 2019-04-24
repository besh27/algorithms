import monotoneIncreasingDigits from '../../algorithms/arrays/monotone_increasing_digits';

describe('Monotone SubArray Test', () => {
  it('should render the correct output via snapshot', () => {
    const numbers = [1, 10, 12, 3, 4, 5, 2, 7, 3, 14, 2];
    expect(monotoneIncreasingDigits(numbers)).toMatchSnapshot();
  });

  it('should render the correct output via snapshot', () => {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(monotoneIncreasingDigits(numbers)).toMatchSnapshot();
  });

  it('should render the correct output via snapshot', () => {
    const numbers = [1, 5, 10, 7, 15, 12, 17, 16, 20];
    expect(monotoneIncreasingDigits(numbers)).toMatchSnapshot();
  });
});