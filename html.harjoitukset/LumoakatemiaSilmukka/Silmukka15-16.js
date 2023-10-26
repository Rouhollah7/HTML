//Tehtävä15
console.log('teht15')
function isonimi(a, b) {
    let pienempi, temp, suurempi;
    if (a > b) {
        pienempi = b;
        suurempi = a;
    }
    else {
        pienempi = a;
        suurempi = b;
    }
    while (pienempi > 0) {
        temp = pienempi;
        pienempi = suurempi % pienempi;
        suurempi = temp;
    }
    console.log("Muuttujan yhteinen nimitt\u00E4j\u00E4 on: " + temp);
}
isonimi(25, 85);
console.log('-----------------------------------------------------------------------')


//Tehtävä16
console.log('teht16')
function pilk(numerojono) {
    var numerot = numerojono.split(',');

    var tulostettavatNumerot = [];
    for (var i = 0; i < numerot.length; i++) {
        var numero = numerot[i].trim(); 
        if (!isNaN(numero)) {
            tulostettavatNumerot.push(numero);
        }
    }
    console.log(tulostettavatNumerot.join(' '));
}
var laita = '100,7,39,10,66,85,777';
pilk(laita);
console.log('-----------------------------------------------------------------------')