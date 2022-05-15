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

const cardContainer = document.getElementById("cardContainer");

fetch("http://localhost:3000/productos/")
  .then((response) => response.json())
  .then((response) => {
    response.map((productos) => {
      const card = document.createElement("div");
      const cardCont = `
  <div class="row">
  <div class="col-8 my-2">
  <p class="text-center ms-2 fw-bold fs-3">
    ${productos.title}
  </p>
</div>
  <img
    class="p-0 img-card"
    src="${productos.img}"
    alt="mate camionero"
  />
</div>
<div class="row">
  <div class="col-4 d-flex">
    <p class="fw-bold fs-4">$${productos.precio}</p>
  </div>
</div>
<div class="row">
  <div class="d-flex justify-content-center mb-2">
    <button class="btn btn-primary">Comprar ahora</button>
  </div>
</div>`;

      card.className =
        "col-sm-12 col-md-6 col-lg-3 me-3 mt-3 border border-2 rounded border-info";

      card.innerHTML = cardCont;
      cardContainer.appendChild(card);
    });
  });
