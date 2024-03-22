const btncperm = document.getElementById("btncperm");
const tabla = document.getElementById("tabla");
const btnBuscar = document.getElementById('btn-buscar')
const inputBuscar = document.getElementById('input-buscar')

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

function inicialdata() {
  const titulos = `
    <tr>
        <th class="table-light">No. Caso</th>
        <th class="table-light">Nit Cliente</th>
        <th class="table-light">Nombre Cliente</th>
        <th class="table-light">Estado</th>
        <th class="table-light">Eliminar</th>
        <th class="table-light">Editar</th>
    </tr>
    `;
  const lista = data.map(
    (el) =>
      (el = `
        <tr>
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

window.onload = inicialdata();

function eliminar(e) {
  const value = e.target.attributes.name.value;

  data = data.filter((el) => el.ncaso != value);

  inicialdata();
}

function editarFn(e) {
  const value = e.target.attributes.name.value;
  console.log(value);

  const editarDatos = data.find((el) => el.ncaso == value);

  console.log(editarDatos);

  const nombre = prompt("Editar nombre", editarDatos.ncliente);
  const nit = prompt("Editar NIT", editarDatos.nitc);

  console.log({ nombre, nit });

  data = data.map((el) => {
    if (el.ncaso == value) {

            el.nitc = nit;
            el.ncliente = nombre;

    }
    return el
  });

  inicialdata();
}

//buscar


inputBuscar.addEventListener('input',(e)=>{
    console.log('cambio');


    busqueda(e)


})

btnBuscar.addEventListener('click', busqueda)

function busqueda(e) {

    e.preventDefault()
    const temp  =  inputBuscar.value.toString().toLocaleLowerCase()

   let tr  = document.getElementsByTagName('tr')


   for (let i = 0; i < tr.length; i++) {
       
       let textoConsulta = tr[i].cells[2].textContent.toString().toLocaleLowerCase()
       if(textoConsulta.indexOf(temp)=== -1){
           console.log(textoConsulta);
           console.log('valor buscado',temp);
           tr[i].style.visibility ='collapse'
       }else{
           console.log('else');
           tr[i].style.visibility =''

       }
    
}
}





btncperm.addEventListener("click", goCP);




function goCP() {
  window.location = "cpermisos.html";
}
