//tehtävä19
console.log('teht19')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kirjoita sivun pituus: ", function (sideInput) {
    const side = parseFloat(sideInput);
    const area = side * side;
    console.log("Nelion pinta-ala: " + area);
    rl.close();
});
