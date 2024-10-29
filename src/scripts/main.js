window.addEventListener('DOMContentLoaded', () => {
  console.log('App init');
});

var modal = document.querySelector(".modal");
var card = document.querySelector(".card");
var cross = document.querySelector(".close");
var btnclose = document.querySelector(".button-close");


card.onclick = function () {
  modal.style.display = "block";
}

cross.onclick = function () {
  modal.style.display = "none";
}

btnclose.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}