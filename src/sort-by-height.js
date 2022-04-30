const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */


function sortByHeight(arr) {
    let indexesMinusOne = [];
    let rezArr = [...arr];
    let sortArrWithoutMinusOne = arr.filter(item => item !==-1).sort((a, b) => a - b);

    arr.forEach((item, index) => {
        if (item === -1) indexesMinusOne.push(index);
    })

    for (let i = 0; i < arr.length; i++) {
        if (indexesMinusOne.includes(i)) continue;
        rezArr[i] = sortArrWithoutMinusOne[0];
        sortArrWithoutMinusOne.shift();
    }
    return rezArr;
}

module.exports = {
    sortByHeight
};
