import React from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Categoria",
    selector: (row) => row.categoria,
    sortable: true,
  },
  {
    name: "Precio",
    selector: (row) => row.precio,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Cantidad",
    selector: (row) => row.cantidad,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
    sortable: true,
    grow: 3
  },
];

const data = [
  {
    id: 1,
    nombre: "Leche lt",
    categoria: "Lacteos",
    precio : 3500,
    cantidad : 6,
    descripcion: "Productos procedentes de lacteos",
    estado: "ACTIVO",
    acciones: (
      <div>
        <button type="button" className="btn btn-light mr-2">
          Visualizar
        </button>
        <button type="button" className="btn btn-info">
          Editar
        </button>
      </div>
    ),
  },
  {
    id: 2,
    nombre: "Res lb",
    categoria: "Carnes",
    precio : 12000,
    cantidad : 6,
    descripcion: "Todo lo relacionado a carniceria",
    estado: "ACTIVO",
    acciones: (
      <div>
        <button type="button" className="btn btn-light mr-2">
          Visualizar
        </button>
        <button type="button" className="btn btn-info">
          Editar
        </button>
      </div>
    ),
  },
  {
    id: 3,
    categoria: "Bebidas",
    nombre: "Coca Cola 2.5lt",
    precio: 9500,
    cantidad: 8,
    descripcion: "Referencia a gaseosas - jugos - cervezas - te",
    estado: "ACTIVO",
    acciones: (
      <div>
        <button type="button" className="btn btn-light mr-2">
          Visualizar
        </button>
        <button type="button" className="btn btn-info">
          Editar
        </button>
      </div>
    ),
  },
];
export default function Productos() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Productos{" "}
        <button type="button" className="btn btn-outline-success float-right">
          Agregar productos
        </button>
        <Link to="/">
          <button type="button" className="btn btn-outline-primary float-right mr-4 btn-volver">
            Home
          </button>
        </Link>
      </h3>
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsiveLayout="scroll"
        fixedHeader
      />
    </div>
  );
}
