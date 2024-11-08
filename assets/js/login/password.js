const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#senha");

togglePassword.addEventListener("click", function () {
  // Alternar o tipo de input de 'password' para 'text'
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Alternar o ícone entre olho aberto e fechado
  this.classList.toggle("fa-eye-slash");
});
