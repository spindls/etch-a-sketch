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
    console.log("div entered");
    div.classList.add("entered-div");

});
};

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", (e) => {
    const divWidth = prompt("please enter the size of which you'd like your sketch-pad 1-100.");
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
    console.log("div entered");
    div.classList.add("entered-div");
        });
};
});


