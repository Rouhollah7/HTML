function tarkasta() {
    var etunimi = document.getElementById('etunimi').value;
    var sukunimi = document.getElementById('sukunimi').value;
    var kouluun = document.querySelector('input[name="koululle"]:checked');
    var aine = document.getElementById('aine').value;

    if (etunimi.length < 1) {
        alert("Anna etunimesi, kiitos!");
    } else if (sukunimi.length < 1) {
        alert("Anna sukunimesi, kiitos!");
    } else if (!kouluun) {
        alert("Valitse, mill\u00E4 tulit kouluun, kiitos!");
    } else if (aine === "") {
        alert("Valitse lempituntisi koulussa, kiitos!");
    } else {
        alert("Kiitos tietojen t\u00E4ytt\u00E4misest!");
        document.getElementById('lomake').innerHTML = "Annoit seuraavat tiedot: <br>" + etunimi + " " + sukunimi + "<br /> Tulin t\u00E4n\u00E4\u00E4n koululle " + kouluun.value + "<br /> Ja pid\u00E4t seuraavasta aineista: " + aine;
    }
}

