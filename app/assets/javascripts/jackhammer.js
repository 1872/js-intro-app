var numberOfClicks = 0;

function jackhammer() {
  numberOfClicks++;
  if (numberOfClicks === 5) {
    console.log("You win!");
  }
}