function piln() {
    const piilotaButton = document.getElementById('piilota');
    const naytaButton = document.getElementById('nayta');
    const piilotettava = document.getElementById('pilota');
    piilotaButton.addEventListener('click', () => {
        piilotettava.style.display = 'none';
    });
    naytaButton.addEventListener('click', () => {
        piilotettava.style.display = 'block';
    });
}
