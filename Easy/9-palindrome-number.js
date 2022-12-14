/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  const reversedNumber = x.toString().split('').reverse().join('');
  return (x == reversedNumber ? true : false);
};