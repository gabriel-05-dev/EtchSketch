const containerDiv = document.querySelector(".containers");
const Button16 = document.querySelector("#small");
const Button32 = document.querySelector("#medium");
const Button64 = document.querySelector("#large");
const Button128 = document.querySelector("#extralarge");
const customGrid = document.querySelector('#custom')
const cleanBtn = document.querySelector('#clean')

//event listeners

Button16.addEventListener('click', () => {clearGrid(),createGrid(25)});
Button32.addEventListener('click', () => {clearGrid(),createGrid(35)});
Button64.addEventListener('click', () => {clearGrid(),createGrid(45)});
Button128.addEventListener('click', () => {clearGrid(),createGrid(60)});
customGrid.addEventListener('click', () => {clearGrid(),createGrid(takeInput())});
cleanBtn.addEventListener('click', () => {clearDrawing()});

//maxwidth selection


function createGrid(amount) {
    if (amount <=10) {
        containerDiv.style = 'max-width: 8%;'
        clearGrid(),createBoard(amount);
    } else if (amount <= 25 && amount > 10) {
        containerDiv.style = 'max-width: 25%;'
        clearGrid(),createBoard(amount);
    } else if (amount <= 35 && amount > 25) {
        containerDiv.style = 'max-width: 35%;'
        clearGrid(),createBoard(amount);
    } else if (amount <=45 && amount >35) {
        containerDiv.style = 'max-width: 45%;'
        clearGrid(),createBoard(amount);
    } else if (amount <=60 && amount > 45) {
        containerDiv.style = 'max-width: 65%;'
        clearGrid(),createBoard(amount);
    } else if (amount > 60) {
        containerDiv.style = 'max-width: 75%;'
        clearGrid(),createBoard(amount);
    };
//function to create the divs
    function createBoard(amount) {
        for (let i = 0; i <= (amount*amount); i++) {
            const newdiv = document.createElement("div");
            newdiv.classList = ('paint');
            newdiv.addEventListener('mouseover', () => {
                newdiv.style = 'background-color:black;'
            })
            containerDiv.appendChild(newdiv)};
        };
};
//function to take input from the user
function takeInput() {
    do {
        amount = prompt('Input value for custom grid(Max 100)');
        if (amount == '') {
            return amount = 25;
        };
    } while (amount > 100);
    return amount;
    };

//this function clears the grid.
function clearGrid() {
    containerDiv.innerHTML='';
};
//this function cleans the paintboard
function clearDrawing() {
    for (const child of containerDiv.children) {
        child.style = 'background-color:;';
    };
};