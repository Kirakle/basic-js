const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options.addition === null) options.addition = 'null';
    let fullAddition = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator || '|');
    let fullString = new Array(options.repeatTimes).fill(str + fullAddition).join(options.separator || '+');
    return fullString;
}

module.exports = {
    repeater
};
