const btncperm = document.getElementById("btncperm");
const tr = document.getElementById("tabla");

let data = [{
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
        <td><i class="bi bi-trash3"></i></td>
        <td><i class="bi bi-pencil"></i></td>
        </tr>
        `)
);

tr.innerHTML = titulos + lista;

btncperm.addEventListener("click", goCP);

function goCP() {
    window.location = "cpermisos.html";
}