let parrafo1 = "Soluciones logisticas de transporte y nacionalización de mercancía"

document.getElementById("p1").textContent = parrafo1

let username
let contra
let btn = document.getElementById("btn")


btn.addEventListener('click', asignar)


function asignar() {
    username = document.getElementById("myemail").value
    contra = document.getElementById("mytext").value
    console.log(username, contra)


    if (username == "angelica@gmail.com" && contra == "123") {
        window.location = "inicioadmi.html"
        console.log('entro');
    } else {
        console.log('sss');
        alert("Usuario o contraseña incorrecto")
    }
}

//boton de control permisos