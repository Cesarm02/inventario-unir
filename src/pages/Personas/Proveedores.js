import React, {useState, useEffect} from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from 'axios';
import { PROVEEDOR_ENDPOINT } from '../../Helpers/endpoints';
import Boton from "../../components/Botones/botonEditarProv";
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
    grow: 3

  },{
    name: "Telefono",
    selector: (row) => row.telefono,
    sortable: true,
  },{
    name: "Descripcion",
    selector: (row) => row.descripcion,
    sortable: true,
    grow: 2
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


export default function Proveedor() {

  const [proveedor, setProveedor] = useState([]);
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    axios.get(PROVEEDOR_ENDPOINT).then( response => {
      const data = response.data;
      console.log(response.data);
      data.forEach(da => {
        da.acciones = <Boton id={da.id}></Boton>;
      });
      
      setfetching(false);
      setProveedor(data);
      
    }).catch(e => {
      console.error(e);
      setfetching(false);
    });
  }, []);

  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Proveedor{" "}
        <Link to="/proveedores/agregar">
          <button type="button" className="btn btn-outline-success float-right">
            Agregar proveedor
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
        data = {proveedor}
        pagination
        responsiveLayout="scroll"
        fixedHeader
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
