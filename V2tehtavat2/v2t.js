function tarkistaluku() {
    const luku = parseFloat(document.getElementById("luku").value);



    if (!isNaN(luku)) {
        if (luku >= 0) {
            document.getElementById("tulos").textContent = "Luku on positiivinen.";
        } else {
            document.getElementById("tulos").textContent = "Luku on negatiivinen.";
        }
    }
}