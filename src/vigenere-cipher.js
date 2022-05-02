const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }

        let codeMessage = message.split('').map(item => item.toUpperCase()).map(item => {
            if (this.alphabet.includes(item)) {
                return this.alphabet.indexOf(item);
            } else return item;
        }).filter(item => typeof (item) === 'number');

        

        let modeKey = '';
        for (let i = 0; i < 1000; i++) {
            modeKey += key;
        }

        let longKey = [];
        for (let i = 0; i < codeMessage.length; i++) {
            longKey.push(modeKey[i])
        }
        let codeKey = longKey.map(item => item.toUpperCase()).map(item => {
            if (this.alphabet.includes(item)) {
                return this.alphabet.indexOf(item);
            } else return item;
        }).filter(item => typeof (item) === 'number');

        let codeCipher = [];

        for (let i = 0; i < codeMessage.length; i++) {
            if (codeMessage[i] + codeKey[i] > 25) {
                codeCipher[i] = codeMessage[i] + codeKey[i] - 26;
            }
            else codeCipher[i] = codeMessage[i] + codeKey[i];
        }

        let wordCipher = [];
        for (let i = 0; i < codeCipher.length; i++) {
            wordCipher.push(this.alphabet[codeCipher[i]])
        }

        for (let i = 0; i < message.length; i++) {
            if (!this.alphabet.includes(message[i].toUpperCase())) {
                wordCipher.splice(i, 0, message[i])
            }
        }

        return this.type ? wordCipher.join('') : wordCipher.reverse().join('');
    }

    decrypt(encryptedMessage, key) {

        if (encryptedMessage === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }

        let codeEncryptedMessage = encryptedMessage.split('').map(item => item.toUpperCase()).map(item => {
            if (this.alphabet.includes(item)) {
                return this.alphabet.indexOf(item);
            } else return item;
        }).filter(item => typeof (item) === 'number');

        let modeKey = '';
        for (let i = 0; i < 1000; i++) {
            modeKey += key;
        }

        let longKey = [];
        for (let i = 0; i < codeEncryptedMessage.length; i++) {
            longKey.push(modeKey[i])
        }
        let codeKey = longKey.map(item => item.toUpperCase()).map(item => {
            if (this.alphabet.includes(item)) {
                return this.alphabet.indexOf(item);
            } else return item;
        }).filter(item => typeof (item) === 'number');

        let codeMessage = [];

        for (let i = 0; i < codeEncryptedMessage.length; i++) {
            if (codeEncryptedMessage[i] - codeKey[i] < 0) {
                codeMessage[i] = codeEncryptedMessage[i] - codeKey[i] + 26;
            }
            else codeMessage[i] = codeEncryptedMessage[i] - codeKey[i];
        }

        let message = [];
        for (let i = 0; i < codeMessage.length; i++) {
            message.push(this.alphabet[codeMessage[i]])
        }

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!this.alphabet.includes(encryptedMessage[i].toUpperCase())) {
                message.splice(i, 0, encryptedMessage[i])
            }
        }
        return this.type ? message.join('') : message.reverse().join('');
    }
}
module.exports = {
    VigenereCipheringMachine
};

