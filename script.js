const containerDiv = document.querySelector(".containers");
const Button16 = document.querySelector("#small");
const Button32 = document.querySelector("#medium");
const Button64 = document.querySelector("#large");
const Button128 = document.querySelector("#extralarge");
const clearBtn = document.querySelector('#clear')
const customGrid = document.querySelector('#custom')


Button16.addEventListener('click', () => {clearGrid(),createGrid(25)});
Button32.addEventListener('click', () => {clearGrid(),createGrid(35)});
Button64.addEventListener('click', () => {clearGrid(),createGrid(45)});
Button128.addEventListener('click', () => {clearGrid(),createGrid(60)});
clearBtn.addEventListener('click', () => {clearGrid()});
customGrid.addEventListener('click', () => {clearGrid(),createGrid(takeInput())});

function createGrid(amount) {
    if (amount <= 25) {
        containerDiv.style = 'max-width: 25%;'
        clearGrid(),createBoard(amount);
    } else if (amount <= 35) {
        containerDiv.style = 'max-width: 35%;'
        clearGrid(),createBoard(amount);
    } else if (amount <=45) {
        containerDiv.style = 'max-width: 45%;'
        clearGrid(),createBoard(amount);
    } else if (amount >=60) {
        containerDiv.style = 'max-width: 65%;'
        clearGrid(),createBoard(amount);
    } else if (amount >=85) {
        containerDiv.style = 'max-width: 100%;'
        clearGrid(),createBoard(amount);
    };

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

function takeInput() {
    do {
        amount = prompt('Input value for custom grid (Max 100)');
    } while (amount > 100);
    return amount;
    };


function clearGrid() {
    containerDiv.innerHTML='';
};