function tulosta() {
    var karvo = parseInt(document.getElementById('luku').value);
    var jono = "<p>";
    for (var i = 2; i <= karvo; i = i + 2) {
        jono += i;
        jono += " ";
    }
    jono += "</p>";
    document.getElementById('parillinen').innerHTML = jono;
}
function muutaluku() {
    var ksana = document.getElementById('sana').value;
    var salasana = "<p>";
    for (var j = 0; j < ksana.length; j++) {
        salasana += ksana[j] + 'Ö';
    }
    salasana += "</p>";
    document.getElementById('salasana').innerHTML = salasana;
}
function tarka() {
    var annettuSana = document.getElementById('ösana').value;
    var vastaus = 'ei ole';
    for (var k = 0; k < annettuSana.length; k++) {
        if (annettuSana[k] == 'ö' || annettuSana[k] == 'ö') {
            vastaus = 'on';
        }
    }
    document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
function kerto() {
    var kerLuku = parseInt(document.getElementById('kert').value); 
    var laskettu = 1;
    for (var z = 1; z <= kerLuku; z++) {
        laskettu *= z;
    }
    document.getElementById('kertomav').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on ' + laskettu + '</p>';
}

function HeiHeippa() {
    var tuloste = '';
    for (var y = 1; y <= 100; y++) {
        if (y % 3 == 0 && y % 5 == 0) {
            tuloste += 'Hip Heijaa ';
        }
        else if (y % 5 == 0) {
            tuloste += 'Heijaa ';
        }
        else if (y % 3 == 0) {
            tuloste += 'Hip ';
        }
        else {
            tuloste += y + ' ';
        }
        document.getElementById('tulost').innerHTML = tuloste;
    }
}
function ekatulos() {
    var kym = '<p>';
    for (var e = 1; e <= 10; e++) {
        kym += e + ' ';
    }
    kym += '</p>';
    document.getElementById('luktulost').innerHTML = kym;
}
function yht() {
    yhteensa = 0;
    for (var y = 1; y <= 10; y++) {
        yhteensa += y;
    }
    document.getElementById('kymluk').innerHTML = '<p>' + yhteensa + '</p>';
}
function potensin() {
    var koro = document.getElementById('kor').value;
    var pote = document.getElementById('pot').value;
    yht = koro;
    for (var p = 1; p < pote; p++) {
        yht *= koro;
    }
    document.getElementById('kasluk').innerHTML = '<p>' + yht + '</p>';
}
function etsisurpi() {
    var taulu = [], temp;
    for (var x = 0; x < 5; x++) {
        temp = document.getElementById('taulukko[' + x + ']').value;
        temp = parseInt(temp);
        taulu.push(temp);
    }
    taulu = taulu.sort((a, b) => a - b);
    document.getElementById('ysluk').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: ' + taulu[taulu.length - 1];
}
function muokkaaluku() {
    var pw = '';
    var eka, toka;
    pw = document.getElementById('luk').value;
    alert(pw);
    var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
    var temp = [];
    var lop = '';
    for (var s = 0; s < pw.length; s++) {
        eka = pw[s];
        temp.push(eka);
        var lisa = Math.floor(Math.random() * taulu.length);
        toka = taulu[lisa];
        temp.push(toka);
    }
    lop = temp.join('');
    document.getElementById('lukk').innerHTML = lop;
}
function luvut() {
    var nro1, nro2, palku, ralku, psumma = 0, rsumma = 0, pluvut = '', rluvut = '';
    nro1 = parseInt(document.getElementById('pnro').value);
    nro2 = document.getElementById('inro').value;
    if (nro1 % 2 == 0) {
        palku = nro1;
    }
    else {
        palku = nro1 + 1;
    }
    for (var b = palku; b <= nro2; b += 2) {
        pluvut += b + ' ';
        psumma += b;
    }
    if (nro1 % 2 == 0) {
        ralku = nro1 + 1;
    }
    else {
        ralku = nro1;
    }
    for (var r = ralku; r <= nro2; r += 2) {
        rluvut += r + ' ';
        rsumma += r;
    }
    document.getElementById('lukujentul').innerHTML = '<p>Parilliset numerot: ' + pluvut + ' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: ' + rsumma + '</p>';
}