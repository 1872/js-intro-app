var boxNumbersClicked = [];

function clickOne(boxNumber) {
  boxNumbersClicked.push(boxNumber);
  
  var firstBoxClicked = boxNumbersClicked.indexOf(1) !== -1;
  var secondBoxClicked = boxNumbersClicked.indexOf(2) !== -1;
  var thirdBoxClicked = boxNumbersClicked.indexOf(3) !== -1;

  if (firstBoxClicked && secondBoxClicked && thirdBoxClicked) {
    console.log("Winner!");
  }
}