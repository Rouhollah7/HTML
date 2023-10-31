function haekoot() {
    var leveys = document.documentElement.clientWidth;
    var korkeus = document.documentElement.clientHeight;
    document.getElementById('koot').innerHTML = "<h1>Leveys: "
        + leveys + ", Korkeus: " + korkeus + "</h1>";
    
}