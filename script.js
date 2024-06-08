const containerDiv = document.querySelector(".containers");
const Button16 = document.querySelector("#small");
const Button32 = document.querySelector("#medium");
const Button64 = document.querySelector("#large");
const Button128 = document.querySelector("#extralarge");
const customGrid = document.querySelector('#custom')
const cleanBtn = document.querySelector('#clean')
let amount=16;

//event listeners

Button16.addEventListener('click', () => {clearGrid(),createGrid(25)});
Button32.addEventListener('click', () => {clearGrid(),createGrid(35)});
Button64.addEventListener('click', () => {clearGrid(),createGrid(45)});
Button128.addEventListener('click', () => {clearGrid(),createGrid(60)});
customGrid.addEventListener('click', () => {clearGrid(),createGrid(takeInput())});
cleanBtn.addEventListener('click', () => {clearGrid()});

//maxwidth selection


function createGrid(amount) {
    for (let i=0; i<amount; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        for (let k = 0; k<amount; k++) {
            let Item =document.createElement('div');
            Item.classList.add('paint');
            Item.addEventListener('mouseover', () => {Item.style = 'background-color:black;'});
            row.appendChild(Item);
        }
        containerDiv.appendChild(row);
    }
};

//function to take input from the user
function takeInput() {
    do {
        amount = prompt('Input value for custom grid(Max 80)');
        if (amount == '') {
            alert('no value specified. Setting to 25.')
            return amount = 25;
        };
    } while (amount > 80);
    return amount;
    };

//this function clears the grid.
function clearGrid() {
    containerDiv.innerHTML='';
};