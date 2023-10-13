//tehtävä20
console.log('teht20')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kirjoita suorakulmion pituus: ", function (lengthInput) {
    const length = parseFloat(lengthInput);
    rl.question("Kirjoita suorakulmion leveys: ", function (breadthInput) {
        const breadth = parseFloat(breadthInput);
        const area = length * breadth;
        console.log("Suorakulmion pinta-ala: " + area);
        rl.close();
    });
});
