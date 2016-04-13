var numberOfClicks = 0;
var colors = ["red", "green", "purple", "orange", "yellow"];

function jackhammer(box) {
  box.style["background-color"] = colors[numberOfClicks];

  numberOfClicks++;
  if (numberOfClicks === 5) {
    console.log("You win!");
  }
}