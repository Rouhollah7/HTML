function laskeKertotaulu() {
    var luku = parseInt(document.getElementById("luku").value);

    if (isNaN(luku)) {
        alert("Syötä kelvollinen luku.");
        return;
    }

    var lause = "";

    for (var i = 1; i <= 10; i++) {
        lause += luku + "x " + i + " = " + luku * i;
        if (i < 10) {
            lause += "<br>";
        }
    }

    var tulosElement = document.getElementById("tulos");
    tulosElement.innerHTML = lause;
}
