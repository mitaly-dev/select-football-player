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
  });
}

function totalChildren() {
  let ol = document.getElementById("player-list");
  let totalChildren = ol.children;
  return totalChildren.length;
}
