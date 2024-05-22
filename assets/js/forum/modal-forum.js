// Pega o modal
var modal = document.getElementById("newTopicModal");

// Pega o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Pega o elemento <cancel> que fecha o modal
var cancel = document.getElementsByClassName("btn-cancel")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar no <span> (x), fecha o modal
cancel.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
