function mutarvo() {
    const muutarvotButton = document.getElementById('muutarvot');
    muutarvotButton.addEventListener('click', () => {
        const nimiKentta = document.getElementById('nimi');
        const sahkopostiKentta = document.getElementById('sahkoposti');
        nimiKentta.value = 'Cris Ronaldo';
        sahkopostiKentta.value = 'ronaldo@example.com';
    });
}