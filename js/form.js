$(document).ready(function () {
  $(".datepicker").datepicker();
  $("select").formSelect();
});

// let prod = document
//   .getElementById("productosN")
//   .addEventListener("click", (e) => {
//     // let value = prod.value();
//     console.log("Ok click");
//   });
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
