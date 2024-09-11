let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const rgbDisplay = document.getElementById("rgbValue");
const newColorsBtn = document.getElementById("newColors");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const messageDisplay = document.getElementById("message");

init();

function init() {
    setModeButtons();
    setSquareListeners();
    reset();
}

function setModeButtons() {
    easyBtn.addEventListener("click", function() {
        numSquares = 3;
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        reset();
    });

    hardBtn.addEventListener("click", function() {
        numSquares = 6;
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        reset();
    });

    newColorsBtn.addEventListener("click", reset);
}

function setSquareListeners() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
