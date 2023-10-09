function laskeSummaJaKeskiarvo() {
    var luku1 = parseInt(document.getElementById("luku1").value);
    var luku2 = parseInt(document.getElementById("luku2").value);
    var luku3 = parseInt(document.getElementById("luku3").value);
    var luku4 = parseInt(document.getElementById("luku4").value);
    var luku5 = parseInt(document.getElementById("luku5").value);

    if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3) || isNaN(luku4) || isNaN(luku5)) {
        alert("Syötä kelvollisia lukuja kaikkiin kenttiin.");
        return;
    }

    var summa = luku1 + luku2 + luku3 + luku4 + luku5;
    var keskiarvo = summa / 5;

    var tulosElement = document.getElementById("tulos");
    tulosElement.innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}
