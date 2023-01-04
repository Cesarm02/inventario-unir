import React from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Documento",
    selector: (row) => row.documento,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Apellido",
    selector: (row) => row.apellido,
    sortable: true,
  },
  {
    name: "TipoDocumento",
    selector: (row) => row.tipoDocumento,
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
    grow: 3
  },
];

const data = [
  {
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    documento: 123456789,
    nombre: "Jhireth Zaray",
    apellido: "Gonzalez Flores",
    tipoDocumento: "CC",
    estado: "INACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/2`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
  {
    documento: 332221544,
    nombre: "Hisbeds",
    apellido: "Gomez Flores",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/3`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 332221544,
    nombre: "Hisbeds",
    apellido: "Gomez Flores",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/3`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 332221544,
    nombre: "Hisbeds",
    apellido: "Gomez Flores",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/3`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 332221544,
    nombre: "Hisbeds",
    apellido: "Gomez Flores",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/3`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },{
    documento: 1070626900,
    nombre: "Cesar Estiven",
    apellido: "Mesa Medrano",
    tipoDocumento: "CC",
    estado: "ACTIVO",
    acciones: (
      <div>
        <Link to={`/clientes/editar/1`}>
          <button type="button" className="btn btn-info mr-2">
            Editar
          </button>
        </Link>
      </div>
    ),
  },
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

export default function Clientes() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Clientes{" "}
        <Link to="/clientes/agregar">
          <button type="button" className="btn btn-outline-success float-right">
            Agregar clientes
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
