function valitseQSA() {
    const kaikkiKohdat = document.querySelectorAll('li');
    kaikkiKohdat.forEach((kohta, indeksi) => {
        kohta.textContent = `Kohta ${indeksi + 1} muokattu`;
    });
}               