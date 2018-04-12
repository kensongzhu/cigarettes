'use strict';

const Cigarettes = require('../../dist/cigarettes.min');

async function run() {
    const cigarettes = new Cigarettes('Marlboro');
    console.log(cigarettes.brand);

    let hasBrand = await cigarettes.hasBrand();
    console.log(hasBrand);
}

run();
