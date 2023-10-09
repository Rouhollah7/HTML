function tarkistaKarkausvuosi() {
    var vuosiluku = parseInt(document.getElementById("vuosiluku").value);

    if (isNaN(vuosiluku)) {
        alert("Syötä kelvollinen vuosiluku.");
        return;
    }

    var tulosElement = document.getElementById("tulos");

    if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || vuosiluku % 400 === 0) {
        tulosElement.innerHTML = "Vuosi on karkausvuosi";
    } else {
        tulosElement.innerHTML = "Vuosi ei ole karkausvuosi";
    }
}
