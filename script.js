const container = document.querySelector(".container");

function initialGrid() {
    for (i = 0; i < 16; i++) {
        const newRow = document.createElement("div");
        newRow.className = "gridRow";
        for (x = 0; x < 16; x++) {
            const gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            let initialBoxPixels = 400 / 16;
            gridBox.style.height = `${initialBoxPixels}px`;
            gridBox.style.width = `${initialBoxPixels}px`;
            newRow.appendChild(gridBox);
        }
        container.appendChild(newRow);
    }
    let gridBoxes = document.querySelectorAll(".gridBox");

    gridBoxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "aqua";
         });
    });
}


initialGrid();


const newGridButt = document.querySelector(".grid-butt");

newGridButt.addEventListener("click", () => {
    let newGridDimensionString;
    do {
        newGridDimensionString = prompt("Dimensions of new grid?");

        newGridDimensionNum = Number(newGridDimensionString);
    } while (isNaN(newGridDimensionNum) || newGridDimensionNum < 1 || newGridDimensionNum > 100);
    createNewGrid(newGridDimensionNum);
})

function createNewGrid(dimension) {
    container.replaceChildren();
    for (i = 0; i < dimension; i++) {
        const newRow = document.createElement("div");
        newRow.className = "gridRow";
        for (x = 0; x < dimension; x++) {
            const gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            let boxPixels = 400 / dimension;
            gridBox.style.height = `${boxPixels}px`;
            gridBox.style.width = `${boxPixels}px`;
            newRow.appendChild(gridBox);
        }
        container.appendChild(newRow);
    }
    let gridBoxes = document.querySelectorAll(".gridBox");

    gridBoxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "aqua";
        });
    });
}

