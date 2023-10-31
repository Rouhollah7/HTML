//Tehtävä16
console.log('teht16')
function kuupv(kknro) {
    kknro = parseInt(kknro);
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Kuukaudessa on 31 p\u00E4iv\u00E4\u00E4");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Kuukaudessa on 30 p\u00E4iv\u00E4\u00E4");
            break;
        case 2:
            console.log("Kuukaudessa on 27/28 p\u00E4iv\u00E4\u00E4");
    }
}
kuupv(2);
kuupv(11);
kuupv(8);
console.log('----------------------------------')

//Tehtävä17
console.log('teht17')
function cash(amount) {
    var note1 = 0, note2 = 0, note5 = 0, note10 = 0, note20 = 0, note50 = 0, note100 = 0, note500 = 0;
    if (amount >= 500) {
        note500 = Math.floor(amount / 500);
        amount -= note500 * 500;
    }
    if (amount >= 100) {
        note100 = Math.floor(amount / 100);
        amount -= note100 * 100;
    }
    if (amount >= 50) {
        note50 = Math.floor(amount / 50);
        amount -= note50 * 50;
    }
    if (amount >= 20) {
        note20 = Math.floor(amount / 20);
        amount -= note20 * 20;
    }
    if (amount >= 10) {
        note10 = Math.floor(amount / 10);
        amount -= note10 * 10;
    }
    if (amount >= 5) {
        note5 = Math.floor(amount / 5);
        amount -= note5 * 5;
    }
    if (amount >= 2) {
        note2 = Math.floor(amount / 2);
        amount -= note2 * 2;
    }
    if (amount >= 1) {
        note1 = amount;
    }
    console.log("Muistiinpanojen kokonaism\u00E4\u00E4r\u00E4 = \n");
    console.log("500 = " + note500);
    console.log("100 = " + note100);
    console.log("50 = " + note50);
    console.log("20 = " + note20);
    console.log("10 = " + note10);
    console.log("5 = " + note5);
    console.log("2 = " + note2);
    console.log("1 = " + note1);
}
cash(2766);
cash(1597);
console.log('----------------------------------')

//Tehtävä18
console.log('teht18')
function kolmio(a, b, c) {
    if (a + b + c == 180) {
        console.log("Kolmio on mahdollinen");
    }
    else {
        console.log("Kolmio ei ole mahdollinen");
    }
}
kolmio(60, 60, 60);
kolmio(66, 66, 66);
console.log('----------------------------------')