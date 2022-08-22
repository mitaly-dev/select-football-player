//add favourit five players
let selectBtns = document.querySelectorAll("#card-btn");
for (let selectBtn of selectBtns) {
  selectBtn.addEventListener("click", function (event) {
    let playerName = event.target.parentNode.children[0].innerText;
    let ol = document.getElementById("player-list");
    let div = document.createElement("div");
    div.innerHTML = `
    <li class="text-lg mb-3">${playerName}</li>`;

    let totalPlayer = totalChildren();
    if (totalPlayer < 5) {
      ol.appendChild(div);
    } else {
      return alert("You can't add more than five players");
    }
    selectBtn.setAttribute("disabled", true);
    selectBtn.style.background = "#4c660b";
    selectBtn.innerText = "Selected ✔️";
  });
}

//calculate player expenses
document.getElementById("calculate").addEventListener("click", function () {
  let perPlayer = inputValue("per-player");
  if (isNaN(perPlayer)) return alert("Please provide us a number");
  let playerExpenses = playerTotalExpenses();
  setValue("player-expenses", playerExpenses);
});

//calculate total
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let playerExpenses = playerTotalExpenses();
    let manager = inputValue("manager-input");
    let coach = inputValue("coach-input");
    let player = inputValue("per-player");
    let total = playerExpenses + manager + coach;
    if (isNaN(player) || isNaN(manager) || isNaN(coach)) {
      return alert("please enter a valid number");
    } else {
      setValue("total-cost", total);
    }
  });
