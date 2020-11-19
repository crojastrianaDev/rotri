$(document).ready(function () {
  $(".datepicker").datepicker();
  $("select").formSelect();
});

const porciones = document.getElementById("porciones");
let cantPorciones = document.getElementById("cantPorciones");

function fnElement(comp) {
  let value = comp.value;
  let id = comp.id;

  if (
    id === "desnudaChocolate" ||
    id == "desnudaCasera" ||
    id === "desnudaRed"
  ) {
    porciones.style.display = "block";
    document.getElementById(
      "productoSeleccionado"
    ).innerText = `Elegiste: ${value}.`;
  } else {
    porciones.style.display = "none";
    document.getElementById(
      "productoSeleccionado"
    ).innerText = `Elegiste: ${value}.`;
  }
}

// Preguntamos si el dispositivo es un celular
function isMobile() {
  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;
  var mobile = [
    "iphone",
    "ipad",
    "blackberry",
    "nokia",
    "opera mini",
    "windows mobile",
    "windows phone",
    "ismobile",
  ];
  for (var i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
      return true;
  return false;
}

//Envio de formulario
const formulario = document.querySelector("#formWh");
const buttonSubmit = document.querySelector("#submitForm");
const urlDesktop = "https://web.whatsapp.com/";
const urlMobile = "whatsapp://";
const telefono = "3214544853";

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
  buttonSubmit.disable = true;
  setTimeout(() => {
    let name = document.querySelector("#firstName").value;
    let torta = document.querySelector("#cantPorciones").value;
    let phone = document.querySelector("#phone").value;
    let data = document.querySelector("#datepicker").value;
    let time = document.querySelector("#time").value;
    let nameR = document.querySelector("#nameRecibe").value;
    let phoneR = document.querySelector("#phoneRecibe").value;
    let address = document.querySelector("#address");
    let msg = document.querySelector("#message").value;
  });
});
