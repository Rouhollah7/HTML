function tarkistaViikonpaiva() {
    var viikonpaivaNumero = parseInt(document.getElementById("viikonpaiva").value);
    var tulosta = "";

    switch (viikonpaivaNumero) {
        case 1:
            tulosta = "Maanantai";
            break;
        case 2:
            tulosta = "Tiistai";
            break;
        case 3:
            tulosta = "Keskiviikko";
            break;
        case 4:
            tulosta = "Torstai";
            break;
        case 5:
            tulosta = "Perjantai";
            break;
        case 6:
            tulosta = "Lauantai";
            break;
        case 7:
            tulosta = "Sunnuntai";
            break;
        default:
            tulosta = "Anna numero v&auml;lilt&auml; 1-7";
    }

    document.getElementById("tulosta").innerHTML = tulosta;
}

