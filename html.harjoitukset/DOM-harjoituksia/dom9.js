function laske() {
    var x = document.getElementById("autot");
    var txt1 = "Kohteiden lukum\u00E4\u00E4r\u00E4 : ";
    var i;
    l = document.getElementById("autot").length;
    txt1 = txt1 + l;
    for (i = 0; i < x.length; i++) {
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}