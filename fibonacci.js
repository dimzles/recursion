/**
 * Non-recursive solution to fibonacci sequence
 * @param {number} n - the amount of numbers from the sequence to return
 * @returns an array of elements with n amount of numbers from the sequence
 */

function fibs(n) {
  const array = [0, 1];
  if (n <= 0 || isNaN(n)) return "Invalid parameter";
  if (n < 2) return array.slice(0, num);
  for (let i = 2; i < n; i++) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array;
}
