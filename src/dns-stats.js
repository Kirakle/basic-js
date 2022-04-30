const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let rezObj = {};
    for (let i = 0; i < domains.length; i++) {
        domains[i] = domains[i].split('.').reverse();
        let str = '';
        for (let j = 0; j < domains[i].length; j++) {
            str += '.' + domains[i][j];
            if (rezObj[str])
                rezObj[str]++;
            else
                rezObj[str] = 1;
        }
    }
    return rezObj;
}

module.exports = {
    getDNSStats
};
