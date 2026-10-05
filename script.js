const container = document.querySelector(".container");
const gridOfDivs = [];

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
    gridOfDivs.push(div);
    div.style.width = "25px";
    div.style.height = "25px";
    div.addEventListener("mouseenter", (e) => {
    let currentOpacity = Number(e.target.style.opacity) || 0;
    let newOpacity = currentOpacity + 0.1;
    e.target.classList.add("entered-div");
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = newOpacity;
    console.log("div entered");
});
};

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", (e) => {
    let divWidth = prompt("please enter the desired number of squares per side for new grid.");
    if (divWidth === null || divWidth.trim() === "") {
        divWidth = 16;
    } else if (divWidth > 100 || divWidth < 1) {
        alert("please enter a valid number 1 - 100")
        return;
    }
container.replaceChildren();
const totalSquares = divWidth * divWidth;
for (i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
        div.style.width = 400 / divWidth + "px";
        div.style.height = 400 / divWidth + "px";
    div.classList.add("grid-item");
    container.appendChild(div);
    gridOfDivs.push(div);
    div.addEventListener("mouseenter", (e) => {
    let currentOpacity = Number(e.target.style.opacity) || 0;
    let newOpacity = currentOpacity + 0.1;
    e.target.classList.add("entered-div");
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = newOpacity;
    });
    };
});


