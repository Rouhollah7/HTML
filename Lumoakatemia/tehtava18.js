//tehtävä18
console.log('teht18')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Anna s\u00E4de: ", function (radiusInput) {
    const radius = parseFloat(radiusInput);
    const area = Math.PI * Math.pow(radius, 2);
    console.log("Ympyr\u00E4n ala on: " + area);
    rl.close();
});

