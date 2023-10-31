function lasketaan() {
    const luku1Kentta = document.getElementById('luku1');
    const luku2Kentta = document.getElementById('luku2');
    const laskeButton = document.getElementById('laske');
    const tulosElementti = document.getElementById('tulos');

    laskeButton.addEventListener('click', () => {
        const luku1 = parseFloat(luku1Kentta.value);
        const luku2 = parseFloat(luku2Kentta.value);
        const tulos = luku1 + luku2;
        tulosElementti.textContent = tulos;
    });
}
