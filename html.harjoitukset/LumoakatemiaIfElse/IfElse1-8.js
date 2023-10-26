//Tehtävä1
console.log('teht1')
function suuri(a, b) {
    if (a > b) {
        console.log("Suurempi on " + a);
    }
    else if (b > a) {
        console.log("Suurempi on " + b);
    }
    else {
        console.log("Numerot ovat yhtäsuuri");
    }
}
suuri(7, 5);
suuri(2, 9);          
console.log('----------------------------------')

//Tehtävä2
console.log('teht2')
function iso(a, b, c) {
    if (a > b && a > c) {
        console.log("Isoin luku on " + a);
    }
    else if (b > c) {
        console.log("Isoin luku on " + b);
    }
    else {
        console.log("Isoin luku on " + c);
    }
}
iso(9, 3, 6);
iso(1, 4, 7);
iso(5, 6, 4);
iso(2, 1, 8);
iso(6, 0, 2);
iso(3, 1, 4);
console.log('----------------------------------')

//Tehtävä3
console.log('teht3')
function merki(luku) {
    if (luku < 0) {
        console.log("Luku on negatiivinen");
    }
    else if (luku == 0) {
        console.log("Luku on nolla");
    }
    else {
        console.log("Luku on positiivinen");
    }
}
merki(-85);
merki(1);
merki(-0);
console.log('----------------------------------')

//Tehtävä4
console.log('teht4')
function jako(luku) {
    if (luku % 5 == 0 && luku % 11 == 0) {
        console.log("Luku voi jakaa sek\u00E4 5:ll\u00E4, ett\u00E4 11:sta");
    }
    else if (luku % 5 == 0 || luku % 11 == 0) {
        console.log("Luku voi jakaa 5:ll\u00E4 tai 11:sta");
    }
    else {
        console.log("Luku ei voi jakaa 5:ll\u00E4 tai 11:sta");
    }
}
jako(55);
jako(50);
jako(44);
jako(56);
console.log('----------------------------------')

//Tehtävä5
console.log('teht5')
function karka(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (vuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}
karka(2004);
karka(2024);
karka(2500);
karka(1999);
console.log('----------------------------------')

//Tehtävä6
console.log('teht6')
function parit(luku) {
    if (luku % 2 == 0) {
        console.log("Luku on parillinen");
    }
    else {
        console.log("Luku on pariton");
    }
}
parit(7);
parit(2);
parit(9);
parit(6);
console.log('----------------------------------')

//Tehtävä7
console.log('teht7')
function kirjain(merkki) {
    if (merkki.length == 1 && merkki.match(/[a-öA-Ö]/i)) {
        console.log("On kirjain");
    }
    else {
        console.log("Ei ole kirjain");
    }
}
kirjain("A");
kirjain("7");
kirjain("?");
kirjain("Ö");
kirjain("R");
kirjain(0);
console.log('----------------------------------')

//Tehtävä8
console.log('teht8')
function vokkon(merkki) {
    if (merkki.match(/[aeiouyäö]/i)) {
        console.log("Merkki on vokaali");
    }
    else if (merkki.match(/[bcdfghjklmnpqrstvwxz]/i)) {
        console.log("Merkki on konsonantti");
    }
    else {
        console.log("Merkki ei ole kumpikaan");
    }
}
vokkon("T");
vokkon("A");
vokkon("1");
vokkon("!");
vokkon("E");
console.log('----------------------------------')





