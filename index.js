function isPalindrome(word) {
  // Remove any spaces and convert the word to lowercase
  word = word.replace(/\s/g, "").toLowerCase();

  // Initialize two pointers, one at the start and one at the end of the word
  let left = 0;
  let right = word.length - 1;

  // Iterate until the two pointers meet or cross each other
  while (left < right) {
    // If the characters at the left and right pointers are not the same, the word is not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers towards each other
    left++;
    right--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

module.exports = isPalindrome;


/* 
  Add your pseudocode here
  1. Remove any spaces from the word and convert it to lowercase.
2. Initialize two pointers, `left` and `right`, with `left` starting from the beginning of the word and `right` starting from the end of the word.
3. Repeat the following steps while `left` is less than `right`:
     a. If the characters at `left` and `right` pointers are not the same, return false as the word is not a palindrome.
     b. Move `left` one step forward and `right` one step backward.
4. If the loop completes without returning false, return true as the word is a palindrome.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
