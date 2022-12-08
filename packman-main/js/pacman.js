'use strict'
const PACMAN = '<img src="img/pacman.png" />';

var gPacman;
function createPacman(board) {
    // TODO
    gPacman = {
        location: {
            i: 5,
            j: 6
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
    if (gGame.count === 60) {
        victory();
        return;
    }

    if (!gGame.isOn) return;
    // use getNextLocation(), nextCell
    var nextLocation = getNextLocation(ev);
    if (!nextLocation) return;
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // return if cannot move
    if (nextCell === WALL) return;
    // hitting a ghost?  call gameOver
    if (nextCell === gGhost) {
        if (gPacman.isSuper) {
            var currGhostIdx = findGhost(nextLocation.i, nextLocation.j)
            var currGhost = gGhosts[currGhostIdx];
            gEaten.push(currGhost);
            gGhosts.splice(currGhostIdx, 1);
            gBoard[currGhost.location.i][currGhost.location.j] = gPacman;
            renderCell(gPacman.location, PACMAN);
            return;
        } else {
            gameOver();
            return;
        }
    }

    if (nextCell === FOOD) {
        updateScore(1);
        gGame.count++;
    }

    if (nextCell === CHERRY) {
        updateScore(10);
    }

    if (nextCell === SUPER_FOOD) {
        updateScore(5);
        superPower()
    }
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // update the DOM
    renderCell(gPacman.location, EMPTY)
    // Move the pacman
    // update the model
    gPacman.location = nextLocation
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
    // update the DOM
    renderCell(gPacman.location, PACMAN)
    var elPacman = document.querySelector(`.cell${gPacman.location.i}-${gPacman.location.j} img`)
    elPacman.style.transform = nextLocation.rotation;
}

function getNextLocation(eventKeyboard) {
    // figure out nextLocation
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j,
        rotation: ''
    }

    switch (eventKeyboard.key) {
        case 'ArrowUp':
            nextLocation.i--
            nextLocation.rotation = 'rotate(270deg)'
            break
        case 'ArrowDown':
            nextLocation.i++
            nextLocation.rotation = 'rotate(90deg)'
            break
        case 'ArrowLeft':
            nextLocation.j--
            nextLocation.rotation = 'rotate(180deg)'
            break
        case 'ArrowRight':
            nextLocation.j++
            break
        default: return null

    }
    return nextLocation;
}



function superPower() {
    gPacman.isSuper = true;
    gGhost = ghostsImg[8];
    for (var i = 0; i < gGhosts.length; i++) {
        var currGhost = gGhosts[i]
        renderCell(currGhost.location, gGhost)
    }


    console.log('super on')
    setTimeout(function () {

        console.log('super off')
        gGhost = ghostsImg[getRandomInt(0, 8)]
        gPacman.isSuper = false;
        for (var i = 0; i < gEaten.length; i++) {
            var currGhost = gEaten[i]
            gGhosts.push(currGhost);
            gBoard[currGhost.location.i][currGhost.location.j] = currGhost;
            renderCell(currGhost.location, gGhost)

        }
        gEaten = [];
    }, 5000)
}