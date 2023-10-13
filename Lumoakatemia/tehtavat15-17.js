//tehtävä15
console.log('teht15')
var cel, fah;
fah = 85;
cel = (fah - 33) * 4 / 8;
console.log(fah);
console.log('-----------')

//tehtävä16
console.log('teht16')
const findMax = (a, b, c) => Math.max(a, b, c);
const luku1 = 10;
const luku2 = 15;
const luku3 = 5;
const suurinLuku = findMax(luku1, luku2, luku3);
console.log(`Suurin luku on: ${suurinLuku}`);
console.log('-----------')

//tehtävä17
console.log('teht17')
function asciiToChar(ascii) {
    console.log(String.fromCharCode(ascii));
}
asciiToChar(85);
console.log('-----------')

