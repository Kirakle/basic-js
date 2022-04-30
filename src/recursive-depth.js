const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let deepElem = 0;
        let deep = 0;

        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    deepElem = this.calculateDepth(arr[i]);
                    if (deepElem > deep) {
                        deep = deepElem;
                        deepElem = 0;
                    }
                }
            }
            deep += 1;
            return deep;
        }
        return 0;
    }
}

module.exports = {
    DepthCalculator
};
