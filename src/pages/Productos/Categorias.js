import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Categoria",
    selector: (row) => row.categoria,
    sortable: true,
  },
  {
    name: "Descripción",
    selector: (row) => row.descripcion,
    sortable: true,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
    sortable: true,
    grow:1.5
  },
];

const data = [
  {
    id: 1,
    categoria: "Lacteos",
    descripcion: "Productos procedentes de lacteos",
    acciones: "",
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
    categoria: "Carnes",
    descripcion: "Todo lo relacionado a carniceria",
    Acciones: "",
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
    descripcion: "Referencia a gaseosas - jugos - cervezas - te",
    Acciones: "",
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

export default function Categorias() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Categorias{" "}
        <button type="button" className="btn btn-outline-primary float-right">
          Agregar categoria
        </button>
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
