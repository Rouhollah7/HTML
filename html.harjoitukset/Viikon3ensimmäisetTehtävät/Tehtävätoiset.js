function laskePisteet() {
    var pisteet = 0;
    var annettuSana = document.getElementById('scsana').value;
    for (var i = 0; i < annettuSana.length; i++) {
        switch (annettuSana[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'n':
            case 's':
            case 't':
            case 'A':
            case 'E':
            case 'I':
            case 'N':
            case 'S':
            case 'T':
                pisteet++;
                break;
            case 'o':
            case 'ä':
            case 'k':
            case 'l':
            case 'O':
            case 'Ä':
            case 'K':
            case 'L':
                pisteet += 2;
                break;
            case 'u':
            case 'm':
            case 'U':
            case 'M':
                pisteet += 3;
                break;
            case 'y':
            case 'h':
            case 'j':
            case 'p':
            case 'r':
            case 'v':
            case 'Y':
            case 'H':
            case 'J':
            case 'P':
            case 'R':
            case 'V':
                pisteet += 4;
                break;
            case 'ö':
            case 'd':
            case 'Ö':
            case 'D':
                pisteet += 7;
                break;
            case 'b':
            case 'f':
            case 'g':
            case 'B':
            case 'F':
            case 'G':
                pisteet += 8;
                break;
            case 'c':
            case 'C':
                pisteet += 10;
                break;
            default:
                pisteet += 12;
        }
        document.getElementById('tscrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
    }
}
function muunataulu() {
    var jono = [];
    jono = [[4, 9, 7, 1], [9, 2, 8, 1], [6, 1, 9, 7], [2, 2, 85, 13], [14, 17, 20, 99]];
    var taulu = '<table border="1">';
    for (var j = 0; j < jono.length; j++) {
        taulu += '<tr>';
        for (var k = 0; k < jono[j].length; k++) {
            taulu += '<td>' + jono[j][k] + '</td>';
        }
        taulu += '</tr>';
    }
    taulu += '</table>';
    document.getElementById('taulu').innerHTML = taulu;
}
function teeLomake() {
    var lomake = '<p>Anna tilinro:<input type="text" id="tilinro" value=""></p>';
    var lomake = lomake + '<p>Anna etunimi:<input type="text" id="enimi" value=""></p>';
    var lomake = lomake + '<p>Anna sukunimi:<input type="text" id="snimi" value=""></p>';
    var lomake = lomake + '<p>Anna saldo:<input type="text" id="saldo" value=""></p>';
    var lomake = lomake + '<p>Haluatko jatkaa (k/e):<input type="text" id="lopetus" value=""></p>';
    document.getElementById('lomake').innerHTML = lomake;
    laskuri = 0;
    lopetus = 'e';
    do {

        lopetus = document.getElementById('lopetus').value;
    } while (lopetus = 'k');

}
function arvoKortit() {
    var pakka = [''];
    var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    var maat = ['pa','ri','ru', 'he']
    var numerot = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    laskuri = 0;
    for (m = 0; m < maat.length; m++) {
        for (n = 0; n < numerot.length; n++) {
            if (m == maat.length - 1 && n == numerot.length - 1) {
                pakka[laskuri] = maat[m] + numerot[n];
            }
            else {
                pakka[laskuri] = maat[m] + numerot[n];
                laskuri++;
            }

        }
    }
    var kortit = [];
    for (l = 0; l < 5; l++) {
        temp = pakka[Math.floor(Math.random() * 52)];
        kortit[l] = temp;
    }
    document.getElementById('pakka').innerHTML = '<p>' + kortit + '</p>';
}
function arvoLotto() {
    var lnumerot = [];
    var temp;
    for (var lotto = 0; lotto < 7; lotto++) {
        temp = Math.floor(Math.random() * 40) + 1;
        lnumerot[lotto] = temp;
    }
    lnumerot.sort(function(a, b){return a-b});

    document.getElementById('ltaulu').innerHTML = '<p>' + lnumerot + '</p>';
}
