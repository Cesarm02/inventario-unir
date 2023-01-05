import React from "react";
import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";
import DataTable from "react-data-table-component";

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
    }
  ];
  
  const data = [
    {
      id: 1,
      nombre: "Leche",
      precio : 3500,
      unidad: "Caja",
      estado: "ACTIVO",
      cantidad: 25,
    },
    {
      id: 2,
      nombre: "Res",
      precio : 12000,
      unidad : "libra",
      cantidad: 10,
      estado: "ACTIVO",
    },
    {
      id: 3,
      nombre: "Coca Cola",
      precio: 9500,
      unidad: "3.5lt",
      estado: "ACTIVO",
      cantidad: 3
    },
  ];
  
const conditionalRowStyles = [
    {
      when: row => row.cantidad < 10,
      style: {
        backgroundColor: "#ff00006b",
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];
export default function Inventario() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Inventario{" "}
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-primary float-right mr-4 btn-volver"
          >
            Home
          </button>
        </Link>
      </h3>
      <div className="col-md-12 izquierda alertas">
        <Busqueda></Busqueda>
        <div className="alert alert-primary col-md-5 izquierda" role="alert">
          Valor inventario $500.200
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        responsiveLayout="scroll"
        responsive
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
