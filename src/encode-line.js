const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let strArr = [];
    let strRez = '';
    for (let i = 0; i < str.length; i++) {
        strArr.push([str[i], 1]);
    }
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i][0] === strArr[i - 1][0]) {
            strArr[i][1]+=strArr[i-1][1];
            strArr[i - 1] = null;
        }
    }
    let finalStrArr = strArr.filter(item => item !== null);
    for (let i = 0; i < finalStrArr.length; i++) {
        console.log(finalStrArr[i]);
        if (finalStrArr[i][1] !== 1) {
            strRez += finalStrArr[i][1];
            strRez += finalStrArr[i][0];
        }
        else strRez += finalStrArr[i][0];
    }
    return strRez;
}

module.exports = {
    encodeLine
};
