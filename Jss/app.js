// function iniciarSesion(){
//     let contraseña = 123456;
//     let usuario = "puchy13"
//     if (password.value == contraseña && login.value == usuario) {
//         alert("Bienvenido a nuestra pagina de mates!");
//         window.location="https://www.google.com/"
//     } else {
//         alert("usuario o contraseña no validos")
//     }
// }
let formularioLogin = document.querySelector(".formulario-login");
let formularioRegistro = document.querySelector(".formulario--registro");
let contenedorLoginRegistro = document.querySelector(
  ".contenedor--login--registro"
);
let cajaTraseraLogin = document.querySelector(".caja--trasera-login");
let cajaTraseraRegistro = document.querySelector(".caja--trasera-registro");
function registro() {
  // formularioRegistro.className = "formulario--registro--js"
  // contenedorLoginRegistro.className = "contenedor--login--registro--js-left"
  // formularioLogin.className = "formulario-login-js-none"
  // cajaTraseraRegistro.className = "caja--trasera--registro-js"
  // cajaTraseraLogin.className = "caja--trasera--login.js"
  formularioRegistro.style.display = "block";
  contenedorLoginRegistro.style.left = "410px";
  formularioLogin.style.display = "none";
  cajaTraseraRegistro.style.opacity = "0";
  cajaTraseraLogin.style.opacity = "1";
}
function iniciarSesion() {
  formularioRegistro.style.display = "none";
  contenedorLoginRegistro.style.left = "10px";
  formularioLogin.style.display = "block";
  cajaTraseraRegistro.style.opacity = "1";
  cajaTraseraLogin.style.opacity = "0";
}

const cardContainer = document.getElementById('cardContainer');

fetch('http://localhost:3000/productos/')
.then(response => response.json())
.then(response => {
response.map((productos) => {
  const card = document.createElement('div');
  const cardCont = `
  <div class="row">
  <p class="fw-bold text-center mt-4">${productos.title}</p>
</div>
<div class="row">
  <img
    class="img-fluid"
    src="${productos.img}"
    alt=""
  />
</div>
<div class="row justify-content-center">
  <p class="text-center fw-bold opacity-75 fs-3 mt-3">$${productos.precio}</p>
  <button class="btn btn-primary w-50 mb-4 mt-1">comprar ahora</button>
</div>`

  card.className = 'card col-sm-11 col-md-3 cardBg mt-5 mx-4 g-0'

  card.innerHTML = cardCont
  cardContainer.appendChild(card)
  })
})
