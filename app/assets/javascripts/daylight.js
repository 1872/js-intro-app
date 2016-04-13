function changeToMorning() {
  document.body.style["background-color"] = "yellow";
  document.getElementById("daylight-message").innerHTML = "Morning";
}

function changeToAfternoon() {
  document.getElementById("daylight-message").innerHTML = "Afternoon";
  document.body.style["background-color"] = "orange";
}

function changeToEvening() {
  document.body.style["background-color"] = "black";
  document.getElementById("daylight-message").innerHTML = "Evening";
}