//Teht�v�9
console.log('teht9')
function kne(merkki) {
    let kirjain = /[a-�A-�]/i;
    let numero = /[0-9]/i;
    if (merkki.length == 1 && merkki.match(kirjain)) {
        console.log("Se on kirjain");
    }
    else if (merkki.match(numero)) {
        console.log("Se on numero");
    }
    else {
        console.log("Se on erikoismerkki");
    }
}
kne("R");
kne("%");
kne("7");
console.log('----------------------------------')

//Teht�v�10
console.log('teht10')
function ip(merkki) {
    if (merkki.match(/[a-�A-�]/i) && merkki == merkki.toUpperCase()) {
        console.log("Se on iso kirjain");
    }
    else if (merkki.match(/[a-�A-�]/i) && merkki == merkki.toLowerCase()) {
        console.log("Se on pieni kirjain");
    }
    else {
        console.log("Ei ole kirjain");
    }
}
ip("E");
ip("j");
ip("!");
console.log('----------------------------------')

//Teht�v�11
console.log('teht11')
function winL(myynti, osto) {
    myynti = parseInt(myynti);
    osto = parseInt(osto);
    if ((myynti - osto) > 0) {
        console.log("Voitto " + (myynti - osto));
    }
    else {
        console.log("Tappio " + (myynti - osto));
    }
}
winL(11, 4);
winL(49, 23);
winL(53, 100);
console.log('----------------------------------')

