const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
    let rezArr = Array(matrix.length).fill(0).map(item=>Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                if (j < matrix[i].length - 1) {
                    rezArr[i][j + 1]++;                                 //правая
                }
                if ((j < matrix[i].length - 1) && (i < matrix.length - 1)) { //правая-нижняя
                    rezArr[i + 1][j + 1]++;
                }
                if ((j < matrix[i].length - 1) && (i > 0)) { //правая-верхняя
                    rezArr[i - 1][j + 1]++;
                }

                if (j > 0) {
                    rezArr[i][j - 1]++;          // левая
                }

                if ((j > 0) && (i < matrix.length - 1)) {  //левая-нижняя
                    rezArr[i + 1][j - 1]++;
                }

                if ((j > 0) && (i > 0)) {  //левая-верхняя
                    rezArr[i - 1][j - 1]++;
                }

                if (i > 0) {               //верхняя
                    rezArr[i - 1][j]++;
                }

                if (i < matrix.length - 1) {   // нижняя
                    rezArr[i + 1][j]++;
                }

            }
        }
    }
    return rezArr;
}

module.exports = {
    minesweeper
};
