function listat() {
    const lista = document.querySelector('dl');
    const uusiTermi = document.createElement('dt');
    uusiTermi.textContent = 'Uusi j�sen';
    const uusiKuvaus = document.createElement('dd');
    uusiKuvaus.textContent = 'Uusi kuvaus';
    lista.appendChild(uusiTermi);
    lista.appendChild(uusiKuvaus);
}
