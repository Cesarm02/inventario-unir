import React, {useState, useEffect} from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from 'axios';
import { CLIENTES_ENDPOINT } from '../../Helpers/endpoints';
import Boton from "../../components/Botones/BotonEditar";

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
    name: "Telefono",
    selector: (row) => row.telefono,
    sortable: true,
  },
  {
    name: "Correo",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
    sortable: true,
    grow: 3,
  }
];

const conditionalRowStyles = [
  {
    when: (row) => row.estado === "INACTIVO",
    style: {
      backgroundColor: "#ff00006b",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];

export default function Clientes() {

  const [clientes, setClientes] = useState([]);
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    axios.get(CLIENTES_ENDPOINT).then( response => {
      const data = response.data;
      console.log(response.data);
      data.forEach(da => {
        da.acciones = <Boton id={da.id} ruta={"/clientes/editar/"}></Boton>;
      });
      
      setfetching(false);
      setClientes(data);
      
    }).catch(e => {
      console.error(e);
      setfetching(false);
    });
  }, []);

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
          <button
            type="button"
            className="btn btn-outline-primary float-right mr-4 btn-volver"
          >
            Home
          </button>
        </Link>
      </h3>
      <DataTable
        columns={columns}
        data={clientes}
        pagination
        responsiveLayout="scroll"
        fixedHeader
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}