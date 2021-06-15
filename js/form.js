$(document).ready(function () {
  $(".datepicker").datepicker();
  $("select").formSelect();
  $(".timepicker").timepicker();
  $(".tooltipped").tooltip({ delay: 500 });
  $(".tooltipped").trigger("mouseleave");
  $(".tooltipped").trigger("needs click");
});

const porciones = document.getElementById("porciones");
let cantPorciones = document.getElementById("cantPorciones");
let boolean = false;
var value;

function fnElement(comp) {
  value = comp.value;
  let id = comp.id;

  if (
    id === "desnudaChocolate" ||
    id === "desnudaCasera" ||
    id === "desnudaRed"
  ) {
    porciones.style.display = "block";
    document.getElementById(
      "productoSeleccionado"
    ).innerText = `Elegiste: ${value}.`;
    boolean = true;
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
    "android",
    "blackberry",
    "nokia",
    "opera mini",
    "safari",
    "windows mobile",
    "windows phone",
    "iemobile",
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
const telefono = "573214544853";

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
  buttonSubmit.disable = false;
  setTimeout(() => {
    let name = document.querySelector("#firstName").value;
    let torta = document.querySelector("#cantPorciones").value;
    // let phone = document.querySelector("#phone").value;
    let data = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;
    let nameR = document.querySelector("#nameRecibe").value;
    let phoneR = document.querySelector("#phoneRecibe").value;
    let address = document.querySelector("#address").value;
    let msg = document.querySelector("#message").value;
    let adiciones = document.getElementById("add").value;
    //verificamos si es torta o no
    if (boolean != true) {
      console.log(boolean + " Sin porciones ");
      let mensaje =
        "send?phone=" +
        telefono +
        "&text=*¿Qué producto deseas?*%0A" +
        value +
        "%0A*¿Tu nombre?*%0A" +
        name +
        "%0A*¿Fecha?*%0A" +
        data +
        "%0A*¿Hora?*%0A" +
        time +
        "%0A*¿Quién recibe?*%0A" +
        nameR +
        "%0A*¿Celular?*%0A" +
        phoneR +
        "%0A*¿Dirección?*%0A" +
        address +
        "%0A*¿Mensaje?*%0A" +
        msg +
        "%0A*¿Adición?*%0A" +
        adiciones +
        "";
      if (isMobile()) {
        window.open(urlMobile + mensaje, "_blank");
      } else {
        window.open(urlDesktop + mensaje, "_blank");
      }
    } else {
      console.log(boolean + "Con porciones");
      if (torta == 1) {
        console.log("Sin porciones" + data + time + "Porciones= " + "6");
        let mensaje =
          "send?phone=" +
          telefono +
          "&text=*¿Qué producto deseas?*%0A" +
          value +
          "%0A*¿Cuántas porciones*%0A" +
          "6" +
          "%0A*¿Tu nombre?*%0A" +
          name +
          "%0A*¿Fecha?*%0A" +
          data +
          "%0A*¿Hora?*%0A" +
          time +
          "%0A*¿Quién recibe?*%0A" +
          nameR +
          "%0A*¿Celular?*%0A" +
          phoneR +
          "%0A*¿Dirección?*%0A" +
          address +
          "%0A*¿Mensaje?*%0A" +
          msg +
          "%0A*¿Adición?*%0A" +
          adiciones +
          "";
        if (isMobile()) {
          window.open(urlMobile + mensaje, "_blank");
        } else {
          window.open(urlDesktop + mensaje, "_blank");
        }
      } else {
        console.log("Sin porciones" + data + time + "Porciones= " + "15");
        let mensaje =
          "send?phone=" +
          telefono +
          "&text=*Formulario de compra Rotri Reposteria*%0A*¿Qué producto deseas?*%0A" +
          value +
          "%0A*¿Cuántas porciones*%0A" +
          "15" +
          "%0A*¿Cuáles es tu nombre?*%0A" +
          name +
          // "%0A*¿Cuáles es tu número celular?*%0A" +
          // phone +
          "%0A*¿Fecha de entrega?*%0A" +
          data +
          "%0A*¿Hora de entrega?*%0A" +
          time +
          "%0A*¿Nombre de quien recibe?*%0A" +
          nameR +
          "%0A*¿Celular de quien recibe?*%0A" +
          phoneR +
          "%0A*¿Dirección de entrega?*%0A" +
          address +
          "%0A*¿Mensaje para la tarjeta?*%0A" +
          msg +
          "%0A*¿Alguna adición?*%0A" +
          adiciones +
          "";
        if (isMobile()) {
          window.open(urlMobile + mensaje, "_blank");
        } else {
          window.open(urlDesktop + mensaje, "_blank");
        }
      }
    }
  });
});
