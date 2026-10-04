const container = document.querySelector(".container");

const gridOfDivs = [];

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
    gridOfDivs.push(div);

    div.addEventListener("mouseenter", (e) => {
    console.log("div entered");
    div.classList.add("entered-div");
});
};

const width = prompt("please input the desired number of squares for size");
const sizeButton = document.createElement("button");
