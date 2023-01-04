import React from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const columns = [
  {
    name: "Nombre",
    selector: (row) => row.nombre,
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
  },{
    name: "Telefono",
    selector: (row) => row.telefono,
    sortable: true,
  },{
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
    grow: 3
  },
];

const data = [
  {
    nombre: "Alqueria",
    estado: "ACTIVO",
    telefono:"12345",
    descripcion: "Productos lacteos",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    nombre: "Carnes S.A.S",
    estado: "ACTIVO",
    telefono:"12345",
    descripcion: "Productos carnes",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/2`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    nombre: "Nestle",
    estado: "ACTIVO",
    telefono:"12345",
    descripcion: "Productos Nestle",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/3`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    nombre: "Margarita",
    estado: "ACTIVO",
    telefono:"1231231245",
    descripcion: "Papas",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    nombre: "Margarina",
    estado: "ACTIVO",
    telefono:"12345",
    descripcion: "Mantequilla - queso",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    nombre: "Familia",
    estado: "INACTIVO",
    telefono:"12345",
    descripcion: "Servilletas - papel higienico",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    nombre: "Plaza Erika",
    estado: "ACTIVO",
    telefono:"12345",
    descripcion: "Productos de plaza, frutas y verduras",
    acciones: (
      <div>
        <Link to={`/proveedores/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  }
];


const conditionalRowStyles = [
  {
    when: row => row.estado === "INACTIVO",
    style: {
      backgroundColor: "#ff00006b",
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
];


export default function Proveedores() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Proveedores{" "}
        <Link to="/proveedores/agregar">
          <button type="button" className="btn btn-outline-success float-right">
            Agregar Proveedor
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
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  )
}
