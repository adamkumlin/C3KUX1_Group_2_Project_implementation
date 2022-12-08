function printMat(mat, selector) {
  var strHTML = '<table border="5" cellpadding="1"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getFreeBoard() {
  var freeBoard = []
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) {
      var cell = gBoard[i][j];
      if (cell === EMPTY) {
        freeBoard.push([i, j])
      }
    }
  }
  return freeBoard;
}

function findGhost(i, j) {
  var ghostIdx = -1;
  for (var idx = 0; idx < gGhosts.length; idx++) {
      if (gGhosts[idx].location.i === i && gGhosts[idx].location.j === j) {
          ghostIdx = idx;
      }
  }
  return ghostIdx;
}