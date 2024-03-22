const inputnit = document.querySelector('#inputnit')
const inputnombre = document.getElementById("inputnombre")
const inputembarque = document.getElementById("inputembarque")
let btncccaso = document.getElementById("btnccaso")

btncccaso.addEventListener('click', inputccasos)

console.log(btncccaso);
export function inputccasos() {

    let nit = inputnit.value
    let nombre = inputnombre.value
    let embarque = inputembarque.value


    if (nit !== "null" && nombre !== "null" && embarque !== "null") {


        setTimeout(() => {
            window.location = 'inicioadmi.html'
        }, 1000);

        console.log({
            nit,
            nombre,
            embarque

        });


        return (nit)
    }
}