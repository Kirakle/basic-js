const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(n) {
//     return String(n).split("").map(item => +item).sort().splice(1).sort((a, b) => b - a).join('')*(+1);
// }

 function deleteDigit(n) {
    let arrDigits = new Array(String(n).length).fill(String(n).split(''));
    return Math.max(...arrDigits.map((item, index) => +[...item.slice(0, index), ...item.slice(index + 1)].join('')));
  }



module.exports = {
    deleteDigit
};
