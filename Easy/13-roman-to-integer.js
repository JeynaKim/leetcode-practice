/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*/

var romanToInt = function (s) {
  let romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0
  s.split("").forEach((ele, index) => {
    if (romanValue[ele] < romanValue[s[index + 1]]) {
      sum -= romanValue[ele]
    } else {
      sum += romanValue[ele]
    }
  }) 
  return sum
}

// let s = "XIV";
// console.log(romanToInt(s))

