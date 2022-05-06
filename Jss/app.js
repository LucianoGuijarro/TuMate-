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
