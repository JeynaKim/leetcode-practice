/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

// For example, Input: strs = ["flower","flow","flight"], Output: "fl"

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j of strs) {
      if (j[i] != strs[0][i]) {
        return j.slice(0, i);
      }
    }
  }
  return strs[0];
};