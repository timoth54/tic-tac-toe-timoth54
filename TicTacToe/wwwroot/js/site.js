// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var squares = document.getElementsByClassName("square");
var dragging;
for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
    squares[i].addEventListener('dragleave', onDragLeave)
}

function onDrop(event) {
    console.log(event);
    event.target = event;
}

function onDragStart(event) {
    console.log(event.target.dataset)
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
}

function onDragEnd(event) {
    console.log(event);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event
    event.target.style.backgroundColor = "yellow";
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
    console.log('dragleave', event);
}

/*
var form = document.getElementsById("board");
var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
    celss[i].addEventListener(event => {

    });
}

var turn = "x";
*/

/*
function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = `Player ${winner} wins`;
    //var cells = document
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    //Check horizontal cells;
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0]);
            return true;
        }
    }

    for (var j = 0; j < 9; j += 1) {
        if (cells[j].innerText === cells[3 + j].innerText && cells.innerText === cells[6 + j].innerText) {
            setWinner(cells[0]);
            return true;
        }
    }

    //Check for diagonal cells
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }

        if (checkForWin()) {
            removeEventListener();
        }
        else {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/