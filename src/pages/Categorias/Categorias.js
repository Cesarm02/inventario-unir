import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import  "../../Css/Categoria.css";

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
    estado: "ACTIVO",
    descripcion:"Productos proveniente de la leche",
    acciones: (
      <div>
        <Link to={`/categorias/1`}>
          <button type="button" className="btn btn-light mr-2">
            Visualizar
          </button>
        </Link>
        <Link to={`/categorias/editar/1`}>
          <button type="button" className="btn btn-info">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 2,
    categoria: "Carnes",
    descripcion: "Todo lo relacionado a carniceria",
    estado: "ACTIVO",
    acciones: (
      <div className="">
        <Link to={`/categorias/2`}>
          <button type="button" className="btn btn-light mr-2">
            Visualizar
          </button>
        </Link>
        <Link to={`/categorias/editar/2`}>
          <button type="button" className="btn btn-info">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    id: 3,
    categoria: "Bebidas",
    descripcion: "Referencia a gaseosas - jugos - cervezas - te",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/categorias/3`}>
          <button type="button" className="btn btn-light mr-2">
            Visualizar
          </button>
        </Link>
        <Link to={`/categorias/editar/3`}>
          <button type="button" className="btn btn-info">
            Editar
          </button>
        </Link>
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
        <Link to="/categorias/agregar">
          <button type="button" className="btn btn-outline-success float-right">
            Agregar categoria
          </button>
        </Link>
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
