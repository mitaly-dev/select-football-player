//total children of ol
function totalChildren() {
  let ol = document.getElementById("player-list");
  let totalChildren = ol.children;
  return totalChildren.length;
}

//get input value
function inputValue(id) {
  let inputElement = document.getElementById(id);
  let value = parseInt(inputElement.value);
  return value;
}

//set total calculated value
function setValue(id, total) {
  let element = document.getElementById(id);
  element.innerText = `$${total}`;
}

//total player expenses
function playerTotalExpenses() {
  let perPlayer = inputValue("per-player");
  let totalPlayer = totalChildren();
  let total = perPlayer * totalPlayer;
  return total;
}
