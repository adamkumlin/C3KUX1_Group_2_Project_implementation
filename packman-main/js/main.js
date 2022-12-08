'use strict'
const WALL = '🧱';
const FOOD = '🍕';
const EMPTY = ' ';
const SUPER_FOOD = '🍄';
const CHERRY = '🍒';


var gBoard;
var gGame = {
    score: 0,
    isOn: false,
    count: 0
}
var timer;

function init() {
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
    getChery();
}

function buildBoard() {
    const SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if ((i === 1 && j === 1) || (i === 1 && j === SIZE - 2) ||
                (i === SIZE - 2 && j === 1) || (i === SIZE - 2 && j === SIZE - 2)) {
                board[i][j] = SUPER_FOOD;
            }
        }
    }
    console.log(board)
    return board;
}

function updateScore(diff) {
    // update model and dom
    gGame.score += diff;
    var elScore = document.querySelector('h2 span');
    elScore.innerText = gGame.score;
}

function gameOver() {
    var elModal = document.querySelector('.game-over')
    console.log('Game Over');
    renderCell(gPacman.location, EMPTY)
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null;
    elModal.style.display = 'block'
    clearInterval(timer);
    timer = null;
}

function victory() {
    var elModal = document.querySelector('.victory')
    console.log('victory');
    renderCell(gPacman.location, EMPTY)
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null;
    elModal.style.display = 'block'
    clearInterval(timer);
    timer = null;
}


function restart() {
    var elVictory = document.querySelector('.victory')
    var elGameOver = document.querySelector('.game-over')
    gGhost = ghostsImg[getRandomInt(0, 8)];
    elGameOver.style.display = 'none'
    elVictory.style.display = 'none'
    gGame.count = 0;
    gGame.score = 0;
    updateScore(0);
    init();
}


function getChery() {
	timer = setInterval(function () {
        var freeBoard = getFreeBoard();
        if (freeBoard.length === 0) return;
		freeBoard.sort(() => Math.random() - 0.5);
		var placeForCherry = freeBoard[0];
		gBoard[placeForCherry[0]][placeForCherry[1]] = CHERRY;

		var pos = { i: placeForCherry[0], j: placeForCherry[1] }
		renderCell(pos, CHERRY);

	}, 5000);
}