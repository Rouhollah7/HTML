//tehtävä21
console.log('teht21')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kirjoita p\u00E4iv\u00E4t: ", function (daysInput) {
    const days = parseInt(daysInput);
    const years = Math.floor(days / 365);
    const weeks = Math.floor((days % 365) / 7);
    const remainingDays = days - (years * 365 + weeks * 7);

    console.log("Vuodet: " + years);
    console.log("Viikot: " + weeks);
    console.log("P\u00E4iv\u00E4t: " + remainingDays);

    rl.close();
});
