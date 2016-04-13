var numClicks = 0;
var gameOver = false;
var spaces = ["", "", "", "", "", "", "", "", ""];

function takeTurn(boxNumber, box) {
  if (!gameOver) {
    markBox(boxNumber, box);
    checkForWinner();
  }
}

function markBox(boxNumber, box) {
  if (!box.classList.contains('x') && !box.classList.contains('o')) {
    if (numClicks % 2 === 0) {
      box.classList.add('x');
      spaces[boxNumber] = "x";
    } else {
      box.classList.add('o');
      spaces[boxNumber] = "o";
    }
    numClicks++;
  }
}

function checkForWinner() {
  if (
    spaces[0] !== "" && spaces[0] === spaces[1] && spaces[0] === spaces[2] ||
    spaces[3] !== "" && spaces[3] === spaces[4] && spaces[3] === spaces[5] ||
    spaces[6] !== "" && spaces[6] === spaces[7] && spaces[6] === spaces[8] ||
    spaces[0] !== "" && spaces[0] === spaces[3] && spaces[0] === spaces[6] ||
    spaces[1] !== "" && spaces[1] === spaces[4] && spaces[1] === spaces[7] ||
    spaces[2] !== "" && spaces[2] === spaces[5] && spaces[2] === spaces[8] ||
    spaces[0] !== "" && spaces[0] === spaces[4] && spaces[0] === spaces[8] ||
    spaces[2] !== "" && spaces[2] === spaces[4] && spaces[2] === spaces[6]
  ) {
    console.log("Winner!!!");
    gameOver = true;
  }
}