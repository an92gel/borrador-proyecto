const btncperm = document.getElementById("btncperm");
const tabla = document.getElementById("tabla");
const btnBuscar = document.getElementById("btn-buscar");
const inputBuscar = document.getElementById("input-buscar");

let _delete;
let _editar;

let data = [
  {
    ncaso: 1000,
    nitc: 9005246213,
    ncliente: "Pintuaseosas",
    estado: "Nuevo",
  },
  {
    ncaso: 1001,
    nitc: 8003214523,
    ncliente: "compuhipersa",
    estado: "Capturado",
  },
  {
    ncaso: 1002,
    nitc: 8093215365,
    ncliente: "megaredltda",
    estado: "Revisado",
  },
  {
    ncaso: 1003,
    nitc: 900321523,
    ncliente: "lacticossas",
    estado: "Firma Digital",
  },
];

//data alamacenada en localstorage
let dataStorge;

export function registoCCaso(params) {
  if (localStorage.getItem("data")) {

      //const localData = localStorage.getItem("data");
      let localdata2 = { nit: "", nombre: "", embarque: "" };
      //localdata2 = JSON.parse(localData);
      
      localdata2 =desconvierteString('data')
      let tempdata  = desconvierteString('inicialData')
      
      console.log('temdata',tempdata.length);


    //le agregamos un valor adicional a la información que trae
    localdata2.ncaso = tempdata[tempdata.length-1].ncaso +1
    dataStorge.push(localdata2);

    console.log(dataStorge);

    //insertar la nueva data nuevamente en inicialData

    //mandamos datos a la función para poderlo subir nuevamente como string
    //al local storage
    convierteAString(dataStorge, "inicialData");

    localStorage.removeItem("data");
  }
}

//Cargue de la información inicial de la tabla
function inicialdata() {
  if (!localStorage.getItem("inicialData")) {
    convierteAString(data, "inicialData");
    //let tempData = JSON.stringify(data)
    //localStorage.setItem('inicialData',tempData)

    dataStorge = JSON.parse(tempData);

    console.log("se ha creado el almacenado de la data inicial");

    registoCCaso();
  } else {
    let local = localStorage.getItem("inicialData");
    dataStorge = JSON.parse(local);

    console.log("else");
    console.log(dataStorge);
    registoCCaso();
  }

  console.log("ds", dataStorge);
  const titulos = `
  
    <thead>
      <a>
          <th class="table-light">No. Caso</th>
          <th class="table-light">Nit Cliente</th>
          <th class="table-light">Nombre Cliente</th>
          <th class="table-light">Estado</th>
          <th class="table-light">Eliminar</th>
          <th class="table-light">Editar</th>
      </a>
      </thead>
      `;
  const lista = dataStorge.map(
    (el) =>
      (el = `
          <tr id ='body'>
              <td>${el.ncaso}</td>
              <td>${el.nitc}</td>
              <td>${el.ncliente}</td>
              <td>${el.estado}</td>
              <td><i  name=${el.ncaso} id="delete" class="bi bi-trash3 delete"></i></td>
              <td><i name=${el.ncaso} id ="edit" class="bi bi-pencil edit"></i></td>
              </tr>
              `)
  );
  tabla.innerHTML = titulos + lista;
  _delete = document.querySelector(".delete");
  _delete.addEventListener("click", eliminar);
  _editar = document.querySelector(".edit");
  _editar.addEventListener("click", editarFn);
}

//llamado de la función inicialdata tan pronto cargue la pagina

window.onload = inicialdata();

//eliminar datos de la tabla
function eliminar(e) {
  const value = e.target.attributes.name.value;

  dataStorge = dataStorge.filter((el) => el.ncaso != value);

  convierteAString(dataStorge,'inicialData')

  inicialdata();
}

//editar datos de la tabla
function editarFn(e) {
  const value = e.target.attributes.name.value;
  console.log(value);

  const editarDatos = dataStorge.find((el) => el.ncaso == value);


  const nombre = prompt("Editar nombre", editarDatos.ncliente);
  const nit = prompt("Editar NIT", editarDatos.nitc);

  console.log({ nombre, nit });

  dataStorge = dataStorge.map((el) => {
    if (el.ncaso == value) {
      el.nitc = nit;
      el.ncliente = nombre;
    }
    return el;
  });

  convierteAString(dataStorge, "inicialData");

  inicialdata();
}

function convierteAString(info, item) {
  let temp = JSON.stringify(info);
  localStorage.setItem(item, temp);
}

function desconvierteString(item) {
    let dataTemp = localStorage.getItem(item)
    let temp  = JSON.parse(dataTemp)


    return temp


}

//busqueda desde el input --cada vez que se escribe busca automaticamente
inputBuscar.addEventListener("input", (e) => {
  console.log("cambio");

  //lamada ala función que realiza la busqueda
  busqueda(e);
});

//busqueda al dar click en el boton
btnBuscar.addEventListener("click", busqueda);

//función que realiza la busqueda
function busqueda(e) {
  e.preventDefault();
  const temp = inputBuscar.value.toString().toLocaleLowerCase();

  let tr = document.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let textoConsulta = tr[i].cells[2].textContent
      .toString()
      .toLocaleLowerCase();
    if (textoConsulta.indexOf(temp) === -1) {
      console.log(textoConsulta);
      console.log("valor buscado", temp);
      if (tr[i].id == "body") {
        tr[i].style.visibility = "collapse";
      }
    } else {
      console.log("else");
      tr[i].style.visibility = "";
    }
  }
}

//lanza la función para ir a la pagina de control permisos

btncperm.addEventListener("click", goCP);

//funcion de despliegue de la pagin a de control permisos
function goCP() {
  window.location = "cpermisos.html";
}
