var lihavoidut;
window.onload = haeLihavoidut();

function haeLihavoidut() {
    lihavoidut = document.getElementsByTagName('strong');
}

function korosta() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "green";
    }
}

function palaaNormaaliin() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "black";
    }
}
