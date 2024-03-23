const inputnit = document.querySelector("#inputnit");
const inputnombre = document.getElementById("inputnombre");
const inputembarque = document.getElementById("inputembarque");
let btncccaso = document.getElementById("btnccaso");

//importamos la función deiniadmin

btncccaso.addEventListener("click", inputccasos);

export function inputccasos() {
  let nit = inputnit.value;
  let nombre = inputnombre.value;
  let embarque = inputembarque.value;

  if (nit !== "null" && nombre !== "null" && embarque !== "null") {
    window.location = "inicioadmi.html";

    //convertimos los datos a String para poder ser almacenaos en el localstorage
    const data = JSON.stringify({
      nitc: nit,
      ncliente: nombre,
      estado: "Nuevo",
    });

    localStorage.setItem("data", data);
  }
}
