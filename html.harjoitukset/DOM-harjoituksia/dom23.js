function alertik() {
    const avikunButton = document.getElementById('avikun');
    avikunButton.addEventListener('click', () => {
        const valinta = confirm('Haluatko jatkaa?');
        if (valinta) {
            alert('Jatka painamalla OK.');
        } else {
            alert('Peruutettu.');
        }
    });
}
