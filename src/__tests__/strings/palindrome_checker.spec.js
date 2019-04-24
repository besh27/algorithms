import palindromeChecker from '../../algorithms/strings/palindrome_checker';

describe('isMonotonic Checker', () => {
  it('should render true in the output because the string is a palindrome.', () => {
    const string = 'otto';
    expect(palindromeChecker(string)).toBeTruthy();
  });

  it('should render true in the output because the string is a palindrome.', () => {
    const string = 'racecar';
    expect(palindromeChecker(string)).toBeTruthy();
  });

  it('should render false in the output because the string is not a palindrome.', () => {
    const string = 'benjamin';
    expect(palindromeChecker(string)).toBeFalsy();
  });
});
