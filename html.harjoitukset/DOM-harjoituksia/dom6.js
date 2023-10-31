function sulku() {
    rivi = document.getElementById("rivi").value;
    solu = document.getElementById("solu").value;
    sisalto = document.getElementById("sisalto").value;
    document.getElementById("taulu").rows[rivi].cells[solu].innerHTML = sisalto;
}
