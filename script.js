const containerDiv = document.querySelector(".containers");
const Button16 = document.querySelector("#b16");
const Button32 = document.querySelector("#b32");
const Button64 = document.querySelector("#b64");
const Button128 = document.querySelector("#b128");
const clearBtn = document.querySelector('#clear')


Button16.addEventListener('click', () => {clearGrid(),createGrid(25)});
Button32.addEventListener('click', () => {clearGrid(),createGrid(35)});
Button64.addEventListener('click', () => {clearGrid(),createGrid(45)});
Button128.addEventListener('click', () => {clearGrid(),createGrid(60)});
clearBtn.addEventListener('click', () => {clearGrid()});

function createGrid(amount) {
    if (amount == 25) {
        containerDiv.style = 'max-width: 25%;'
        clearGrid(),createBoard(amount);
    } else if (amount == 35) {
        containerDiv.style = 'max-width: 35%;'
        clearGrid(),createBoard(amount);
    } else if (amount == 45) {
        containerDiv.style = 'max-width: 45%;'
        clearGrid(),createBoard(amount);
    } else if (amount == 60) {
        containerDiv.style = 'max-width: 65%;'
        clearGrid(),createBoard(amount);
    };

    function createBoard(amount) {
        for (let i = 0; i <= (amount*amount); i++) {
            const newdiv = document.createElement("div");
            newdiv.classList = ('paint');
            containerDiv.appendChild(newdiv)};
        };
};


function clearGrid() {
    containerDiv.innerHTML='';
};