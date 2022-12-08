'use strict'
var ghostsImg = [
    '<img src="img/ghost_01.png" />',
    '<img src="img/ghost_02.png" />',
    '<img src="img/ghost_03.png" />',
    '<img src="img/ghost_04.png" />',
    '<img src="img/ghost_05.png" />',
    '<img src="img/ghost_06.png" />',
    '<img src="img/ghost_07.png" />',
    '<img src="img/ghost_08.png" />',
    '<img src="img/ghost_super.png" />',
]
var gGhost = ghostsImg[getRandomInt(0, 8)];

var gGhosts = [];
var gEaten = [];
var gIntervalGhosts;

function createGhost(board, i, j) {
    var ghost = {
        location: {
            i: i,
            j: j
        },
        currCellContent: FOOD
    }
    gGhosts.push(ghost)
    board[ghost.location.i][ghost.location.j] = gGhost
    console.log('gGhosts:', gGhosts)
}

function createGhosts(board) {
    // 3 ghosts and an interval
    gGhosts = [];

    for (var i = 1; i < 4; i++) {
        createGhost(board, i, i)
    }
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function moveGhosts() {
    // loop through ghosts
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i]
        moveGhost(ghost)
    }
}

function moveGhost(ghost) {
    // figure out moveDiff, nextLocation, nextCell
    var moveDiff = getMoveDiff()

    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j
    }
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // return if cannot move
    if (nextCell === WALL) return
    if (nextCell === gGhost) return
    // hitting a pacman?  call gameOver

    if (nextCell === PACMAN) {
        if (gPacman.isSuper) return;
        gameOver()
        return
    }

    // update the model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent;
    // update the DOM
    renderCell(ghost.location, ghost.currCellContent)
    // Move the ghost
    // update the model
    ghost.currCellContent = nextCell
    ghost.location = nextLocation;

    gBoard[ghost.location.i][ghost.location.j] = gGhost;
    // update the DOM
    renderCell(ghost.location, getGhostHTML(ghost))

}

function getMoveDiff() {
    var randNum = getRandomInt(0, 100);
    if (randNum < 25) {
        return { i: 0, j: 1 }
    } else if (randNum < 50) {
        return { i: -1, j: 0 }
    } else if (randNum < 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}

function getGhostHTML(ghost) {
    return `<span>${gGhost}</span>`
}