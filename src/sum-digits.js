const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
    let digitArr = n.toString().split('').map(item => +item);
    while(digitArr.length!==1) {
        digitArr = digitArr.reduce((acc, item) => acc + item, 0).toString().split('').map(item => +item);
    }
    return digitArr[0];

}


module.exports = {
    getSumOfDigits
};
