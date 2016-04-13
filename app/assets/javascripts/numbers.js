var nextNumber = 1;
var lastNumber = 10;

function clickNumber(boxNumber, div) {
  if (boxNumber === nextNumber) {
    div.style["background-color"] = "green";
    if (boxNumber === lastNumber) {
      console.log('Winner!');
    }
    nextNumber++;
  } else {
    nextNumber = 1;
    console.log('You suck! Try again!');
  }
}