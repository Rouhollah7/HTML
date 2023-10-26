//Tehtävä1
console.log('teht1')
function laina() {
    let lainanMaara = 5000;
    let aika = 2;
    let korko = 0.02;

    let korkosumma = lainanMaara * korko * aika;
    let maksettava = lainanMaara + korkosumma;

    console.log(`Pit\u00E4\u00E4 maksaa takaisin ${maksettava}euroa`);
}
laina();
console.log('-----------------------------------------')

//Tehtävä2
console.log('teht2')
function kerto(luku) {
    let kertoma = 2;
    for (var i = 2; i <= luku; i++) {
        kertoma *= i;
    }
    console.log("Luvun " + luku + "kertoma on: " + kertoma);
}
kerto(2);
kerto(4);
kerto(5);

console.log('-----------------------------------------')

//Tehtävä3
console.log('teht3')
function kolmasnro\u00E4() {
    let taulukko = [6, 7, 2, 4, 7, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i] == 3) {
            console.log("Numeron 3 on taulukon " + i + ". j\u00E4sen");
            i = taulukko.length;
        }
    }
}
kolmasnro\u00E4();        
console.log('-----------------------------------------')

//Tehtävä4
console.log('teht4')
function kanty(teksti) {
    let lause = "";
    for (var i = teksti.length - 1; i >= 0; i--) {
        lause += teksti[i];
    }
    console.log(lause);
}
kanty("Jalkapallo"); 
console.log('-----------------------------------------')

//Tehtävä5
console.log('teht5')
function maks() {
    let taulukko = [3, 4, 8, 3, 1, 9, 5];
    let maksimi = taulukko[0];
    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > maksimi) {
            maksimi = taulukko[i];
        }
    }
    console.log("Taulukon " + taulukko + " maksiminarvo on: " + maksimi);
}
maks(); 
console.log('-----------------------------------------')

//Tehtävä6
console.log('teht6')
function kesk() {
    let taulukko = [5, 3, 7, 8, 1, 6, 2];
    let summa = 0;
    let keskiarvo = 0;
    for (var i = 0; i < taulukko.length; i++) {
        summa += taulukko[i];
    }
    keskiarvo = summa / taulukko.length;
    console.log("Taulukon " + taulukko + " keskiarvo on: " + keskiarvo);
}
kesk();
console.log('-----------------------------------------')

//Tehtävä7
console.log('teht7')
function iso() {
    let taulukko = ["t", "a", "j", "i", "k",];
    let uusiTaulukko = [];
    for (var i = 0; i < taulukko.length; i++) {
        uusiTaulukko.push(taulukko[i].toUpperCase());
    }
    console.log(uusiTaulukko);
}
iso();
console.log('-----------------------------------------')

//Tehtävä8
console.log('teht8')
function seiska() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    let laskuri = 0;
    let haettuLuku;
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 != 0) {
            laskuri++;
            if (laskuri == 7) {
                console.log("Taulukon " + taulukko +
                    " seitsem\u00E4n pariton j\u00E4sen on " + taulukko[i]);
                i = taulukko.length;
            }
        }
    }
}
seiska();
console.log('-----------------------------------------')
