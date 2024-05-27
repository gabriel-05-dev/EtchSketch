const containerDiv = document.querySelector(".containers");
const Button16 = document.querySelector("#b16");
const Button32 = document.querySelector("#b32");
const Button64 = document.querySelector("#b64");
const Button128 = document.querySelector("#b128");

Button16.addEventListener('click', createGrid(16));
Button32.addEventListener('click', () => {});
Button64.addEventListener('click', () => {});
Button128.addEventListener('click', () => {});

function createGrid(amount) {
    for (let i = 0; i <= amount; i++) {
        const newdiv = document.createElement("div");
        containerDiv.appendChild(newdiv)};
};

function clearSpace() {
    const containerDiv = //todo
};