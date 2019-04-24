const palindromeChecker = (word) => {
  var letters = [];
  var reversedWord = '';

  // put letters in the letter stack;
  for(let i = 0; i < word.length; i++) {
      letters.push(word[i]);
  }
  // remove letters in the letter stack and into the reversedWord string.
  for(var i = 0; i < word.length; i++){
      reversedWord += letters.pop();
  }

  if(reversedWord === word) {
      console.log(`${word} is a palindrome!`);
      return true;
  } else{
      console.log(`${word} is not a palindrome`);
      return false;
  }
}

export default palindromeChecker;