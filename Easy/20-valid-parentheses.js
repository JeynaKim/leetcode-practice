/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid
*/

// /**
//  * @param {string} s
//  * @return {boolean}
//  */

const isValid = (s) => {
  let y = [];
  let a = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let ele of s) {
    if (["(", "[", "{"].includes(ele)) {
      y.push(ele);
    } else if (a[ele] === y[y.length - 1]) {
      y.pop();
    } else {
      return false;
    }
  }
  return y.length == 0;
};