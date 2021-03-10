let cont = document.getElementById(`container`);
let btnA = document.getElementById(`btnA`);
let btnB = document.getElementById(`btnB`);
let btnC = document.getElementById(`btnC`);
let btnR = document.getElementById(`btnR`);

let divClass = document.getElementsByClassName(`square`);
let clrBoard = document.getElementById(`clrBoard`);
let colorScheme = 0;
let r = 0;
let g = 0;
let b = 0;
btnA.addEventListener(`click`, () => {
    colorScheme = 1;
})

btnB.addEventListener(`click`, () => {
    colorScheme = 2;
})

btnC.addEventListener(`click`, () => {
    colorScheme = 3;
})

btnR.addEventListener(`click`, () => {
    colorScheme = 4;
})

clrBoard.addEventListener(`click`, () => {
    colorScheme = 0;
    for (i=0; i<divClass.length; i++){
        divClass[i].removeAttribute(`style`);
    }
})
// let input = prompt(`Please enter a number:`)
let input = 16
while(input%8 != 0) {
    input++;
}

document.getElementById(`container`).style.gridTemplateColumns = `repeat(${input}, 1fr)`;

let amountOfsqrs = input*=input;

for (i=0; i<amountOfsqrs; i++) {
    createDiv();
}

cont.addEventListener(`mouseover`, e => {
    if (colorScheme == 1) {
        changeColor();
        e.target.style.background = `rgb(${r}, 0, 0)`;
    } else if (colorScheme == 2) {
        changeColor();
        e.target.style.background = `rgb(0, ${g}, 0)`;
    } else if (colorScheme == 3) {
        changeColor();
        e.target.style.background = `rgb(0, 0, ${b})`;
    } else if (colorScheme == 4) {
        changeColor();
        e.target.style.background = `rgb(${r}, ${g}, ${b})`;
    }
})

function createDiv() {
    let divs = document.createElement(`div`);
    divs.setAttribute(`class`, `square`);
    container.appendChild(divs)
}


function changeColor() {
    r = Math.floor(Math.random() * 255) + 50;
    g = Math.floor(Math.random() * 255) + 50;
    b = Math.floor(Math.random() * 255) + 50;
}

function resetBoard() {

}

console.log(amountOfsqrs);
console.log(input);
