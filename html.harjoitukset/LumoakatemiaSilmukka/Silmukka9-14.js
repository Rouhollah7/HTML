//Tehtävä9
console.log('teht9')
function tokais() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    let suurin = taulukko[0];
    let toiSuurin = 0;
    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > suurin) {
            toiSuurin = suurin;
            suurin = taulukko[i];
        }
    }
    console.log("Taulukon " + taulukko + " toinen suuri arvo on " + toiSuurin);
}
tokais(); 
console.log('-----------------------------------------------------------------------')

//Tehtävä10
console.log('teht10')
function jakosat() {
    let lause = "";
    for (var i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            lause += "viisitoista ";
        }
        else if (i % 5 == 0) {
            lause += "viisi ";
        }
        else if (i % 3 == 0) {
            lause += "kolme ";
        }
        else {
            lause += i + " ";
        }
    }
    console.log(lause);
}
jakosat();
console.log('-----------------------------------------------------------------------')

//Tehtävä11
console.log('teht11')
function fibo() {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(fibonacci);
}
fibo();
console.log('-----------------------------------------------------------------------')

//Tehtävä12
console.log('teht12')
function molemp(lause) {
    let kaannetty = "";
    for (var i = lause.length - 1; i >= 0; i--) {
        kaannetty += lause[i];
    }
    if (lause == kaannetty) {
        console.log("sana on palidromi");
    }
    else {
        console.log("sana ei ole palidromi")
    }
}
molemp("suuruus");
molemp("äijiä");
molemp("kone");
molemp("pop");
molemp("futis");
console.log('-----------------------------------------------------------------------')

//Tehtävä13
console.log('teht13')
function parisum() {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let summa = 0;
    for (var i = 2; i < 11; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 1 == 0) {
            summa += fibonacci[i];
        }
    }
    console.log(fibonacci);
    console.log("Parillinen summa: " + summa);
}
parisum();
console.log('-----------------------------------------------------------------------')

//Tehtävä14
console.log('teht14')
function paritsum() {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let summa = 1;
    for (var i = 2; i < 12; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 != 0) {
            summa += fibonacci[i];
        }
    }
    console.log(fibonacci);
    console.log("Pariton summa: " + summa);
}
paritsum();
console.log('-----------------------------------------------------------------------')