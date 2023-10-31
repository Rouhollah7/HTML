function link() {
    var u = document.getElementById("link").href;
    alert('Linkin href-attribuutin arvo on : ' + u);
    var v = document.getElementById("link").hreflang;
    alert('Linkin hreflang-attribuutin arvo on : ' + v);
    var w = document.getElementById("link").rel;
    alert('Linkin rel-attribuutin arvo on : ' + w);
    var x = document.getElementById("link").target;
    alert('Linkin kohde-attribuutin arvo on : ' + x);
    var y = document.getElementById("link").type;
    alert('The value of the type attribute of the link is : ' + y);
}