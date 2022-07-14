let board = document.querySelector("#board");
const boardSize = 500;
let resolution = 16;
let lineHeight = boardSize/resolution;


for (let i = 0; i < resolution; i++) {
    let line = document.createElement("div");
    line.className = "line";
    line.style.height = `${lineHeight}px`;
    
    for (let j = 0; j < resolution; j++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.height = `${lineHeight}px`;
        square.style.width = `${lineHeight}px`;

        line.appendChild(square);
    }

    board.appendChild(line);
}

let drawing = false;

board.addEventListener("mousedown", () => {
    drawing = true;
});

document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (drawing) square.style.backgroundColor = "black";
    });
}); 

board.addEventListener("mouseup", () => {
    drawing = false;
});