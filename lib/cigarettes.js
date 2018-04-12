'use strict';

/**
 * Generate a Cigarette with its brand name
 * @param {string} string
 */
class Cigarettes {
    constructor(brand) {
        this.brand = brand;
    }

    listBrands() {
        return new Promise(resolve => resolve(['Marlboro', 'Camel', 'Lucky Strike']));
    }

    async hasBrand() {
        let brands = await this.listBrands();
        return Array.prototype.includes.call(brands, this.brand);
    }
}

module.exports = Cigarettes;
