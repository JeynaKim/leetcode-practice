/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
  if (n == 1 || n == 0) return 1 
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
  }
  return second;
};
