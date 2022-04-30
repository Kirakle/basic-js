const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain:[],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === null) {
            this.chain.push('null');
        }
        else {
            this.chain.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (
            position - 1 < 0 ||
            typeof position !== 'number' ||
            position >= this.chain.length
        ) {
            this.chain=[];
            throw new Error("You can't remove incorrect link!");
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.map((elem) => `( ${elem} )`).join('~~');
        this.chain=[];
        return result;
    }
};

module.exports = {
    chainMaker
};
