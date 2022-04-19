let a, b, c, d;
a = 'labas'; //string
b = 1234.23; //number
c = false; //true/false
d = [a, b, c];

console.log(a, b, c);
console.log(d);

let n = 'namas Nr.'
let g = 10;
let u = n + g;
console.log(u);

let x, y, z;
x = 1;
y = 2;
z = 3;

if (x + y > z) {

} else if (z - y == y) {
    console.log('atsakymas antras');

} else {
    console.log('nei viena salyga nera teisinga');
}
// inputas_______________________________

const inputElement1 = document.getElementById('inputoPavadinimas');
const w = 10;

function count() {
    const inputValue1 = Number(inputElement1.value);
    console.log(w + inputValue1);

    if (w + inputValue1 > 10) {
        console.log('daugiau nei 10');

    } else if (w + inputValue1 < 10) {
        console.log('maziau nei 10');

    } else {
        console.log('lygu 10');
    }
}

// namu inputai____________________________
const inputElement2 = document.getElementById('pirmasis');
const inputElement3 = document.getElementById('antrasis');

function sum() {
    const inputValue2 = Number(inputElement2.value);
    const inputValue3 = Number(inputElement3.value);

    console.log(inputValue2 + inputValue3);
}
// skaiciuotuvas_______________________________________

const numberZone = document.getElementById('numberZone');
const resultZone = document.getElementById('resultZone');
let prevNumber;
let symbol;
let isEqualsClicked = false;

function addNumber(number) {
    if (Number(numberZone.textContent) == 0 && numberZone.textContent != '0.') {
        numberZone.textContent = number;
    } else {
        numberZone.textContent += number;
    }
}

function deleteNumber() {
    numberZone.textContent = numberZone.textContent.slice(0, -1);

    if (numberZone.textContent.length == 0) {
        numberZone.textContent = 0;
    }
}

function mathActions(symbolParam) {
    if (prevNumber && !isEqualsClicked) {
        equals(false);
    }

    prevNumber = Number(numberZone.textContent);
    symbol = symbolParam;
    numberZone.textContent = 0;
    resultZone.textContent = prevNumber;
}

function equals(clicked) {
    isEqualsClicked = clicked;
    if (symbol == '+') {
        numberZone.textContent = prevNumber + Number(numberZone.textContent);
    } else if (symbol == '-') {
        numberZone.textContent = prevNumber - Number(numberZone.textContent);
    } else if (symbol == '*') {
        numberZone.textContent = prevNumber * Number(numberZone.textContent);
    } else if (symbol == '/') {
        numberZone.textContent = prevNumber / Number(numberZone.textContent);
    }

    resultZone.textContent = numberZone.textContent;
}

function getSquareRoot() {

    if (Number(numberZone.textContent) === 0) {
        resultZone.textContent = Math.sqrt(Number(resultZone.textContent));
    } else {
        numberZone.textContent = Math.sqrt(Number(numberZone.textContent));
    }
}

function addDot() {
    numberZone.textContent = numberZone.textContent.trim() + '.';
}

function roundNumber() {
    numberZone.textContent = Math.round(Number(numberZone.textContent));
}
