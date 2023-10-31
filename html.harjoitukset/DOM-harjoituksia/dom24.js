function ilmotus() {
    const shwilmoitusButton = document.getElementById('shwilmoitus');
    shwilmoitusButton.addEventListener('click', () => {
        setTimeout(() => {
            alert('Ilmoitus!');
        }, 3000);
    });
}
