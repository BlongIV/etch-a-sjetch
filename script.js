function initialGrid() {
    for (i = 0; i < 16; i++) {
        const container = document.querySelector(".container");
        const newRow = document.createElement("div");
        newRow.className = "gridRow";
        for (x = 0; x < 16; x++) {
            const gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            newRow.appendChild(gridBox);
        }
        container.appendChild(newRow);
    }
}


initialGrid();

const gridBoxes = document.querySelectorAll(".gridBox");

gridBoxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "aqua";
    });
});



function createNewGrid(dimension) {
    const container = document.querySelector("container");
    container.replaceChildren();
    for (i = 0; i < dimension; i++) {
        const newRow = document.createElement("div");
        newRow.className = "gridRow";
        for (x = 0; x < dimension; x++) {
            const gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            newRow.appendChild(gridBox);
        }
        container.appendChild(newRow);
    }
}

const newGridButt = document.querySelector(".grid-butt");

newGridButt.addEventListener("click", () => {
    const newGridDimensionString = prompt("Dimensions of new grid?");
    const newGridDimensionNum = Number(newGridDimensionString);
    createNewGrid(newGridDimensionNum);
})