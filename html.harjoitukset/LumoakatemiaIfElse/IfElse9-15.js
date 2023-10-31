//Tehtävä9
console.log('teht9')
function kne(merkki) {
    let kirjain = /[a-öA-Ö]/i;
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

//Tehtävä10
console.log('teht10')
function ip(merkki) {
    if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toUpperCase()) {
        console.log("Se on iso kirjain");
    }
    else if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toLowerCase()) {
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

//Tehtävä11
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

//Tehtävä12
console.log('teht12')
function koe(Ma, KeFy, Ai, Ru, En) {
    var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["\u00E4idinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][1] >= 90) {
            console.log(taulukko[i][0] + ": K5");
        }
        else if (taulukko[i][1] >= 80) {
            console.log(taulukko[i][0] + ": H4");
        }
        else if (taulukko[i][1] >= 70) {
            console.log(taulukko[i][0] + ": H3");
        }
        else if (taulukko[i][1] >= 60) {
            console.log(taulukko[i][0] + ": T2");
        }
        else if (taulukko[i][1] >= 50) {
            console.log(taulukko[i][0] + ": T1");
        }
        else {
            console.log(taulukko[i][0] + ": Hyl\u00E4tty");
        }
    }
}
koe(71, 98, 77, 59, 84);
console.log('------------')
koe(85, 75, 99, 48, 83);
console.log('----------------------------------')

//Tehtävä13
console.log('teht13')
function vikpv(nro) {
    nro = parseInt(nro);
    console.log(nro);
    switch (nro) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai");
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai");
            break;
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;
        default:
            console.log("Anna numero v\u00E4lill\u00E4 1-7");
            break;
    }
}
vikpv(2);
vikpv(7);
vikpv(0);
console.log('----------------------------------')

//Tehtävä14
console.log('teht14')
function tarkluvut(a, b) {
    try {
        const lukuA = parseInt(a);
        const lukuB = parseInt(b);
        if (isNaN(lukuA) || isNaN(lukuB)) {
            throw new Error("Et antanut kokonaislukuja");
        }
        if (lukuA === lukuB) {
            return "Luvut ovat sama.";
        } else {
            return "Luvut eiv\u00E4t ole sama.";
        }
    } catch (error) {
        return error.message;
    }
}
console.log(tarkluvut(7, 7)); 
console.log(tarkluvut(2, "kuusi")); 
console.log(tarkluvut("0", 0));
console.log(tarkluvut(8, 5));
console.log('----------------------------------')

//Tehtävä15
console.log('teht15')
function ika\u00E4\u00E4ni(ika) {
    ika = parseInt(ika);
    if (ika >= 18) {
        console.log("Voit \u00E4\u00E4nest\u00E4\u00E4");
    }
    else if (isNaN(ika)) {
        console.log("Et antanut numeroa");
    }
    else {
        console.log("Et voi \u00E4\u00E4nest\u00E4\u00E4");
    }
}
ika\u00E4\u00E4ni(20);
ika\u00E4\u00E4ni("kaksi");
ika\u00E4\u00E4ni(17);