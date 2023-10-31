function list() {
    const listaaminen = document.getElementById('listaaminen');
    const elementit = ['Kohta 1', 'Kohta 2', 'Kohta 3'];
    elementit.forEach((teksti) => {
        const uusiLi = document.createElement('li');
        uusiLi.textContent = teksti;
        listaaminen.appendChild(uusiLi);
    }