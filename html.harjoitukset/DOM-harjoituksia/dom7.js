function luotaulu() {
    rivimaara = document.getElementById("rivi").value;
    sarakemaara = document.getElementById("solu").value;

    for (var r = 0; r < parseInt(rivimaara); r++) {
        var x = document.getElementById('taulukko').insertRow(r);
        for (var s = 0; s < parseInt(sarakemaara); s++) {
            var y = x.insertCell(s);
            y.innerHTML = "Rivi" + r + " Sarake" + s;
        }
    }
}