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

function fnElement(comp) {
  let value = comp.value;

  document.getElementById(
    "productoSeleccionado"
  ).innerText = `Elegiste: ${value}.`;
}
// si es torta poner un checklist de 6 o 15 porciones
