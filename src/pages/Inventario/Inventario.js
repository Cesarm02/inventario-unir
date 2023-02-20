import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";
import DataTable from "react-data-table-component";
import axios from "axios";
import { PRODUCTOZUUL_ELASTIC } from "../../Helpers/endpointZuul";

const columns = [
    {
      name: "Id elastic",
      selector: (row) => row.id,
      sortable: true,
    },{
      name: "Codigo",
      selector: (row) => row.codigo,
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
  
  const [productos, setProducto] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(PRODUCTOZUUL_ELASTIC).then(response => {
      const data = response.data;
      setProducto(data);
      var aux = 0;
      data.forEach(element => {
        aux = aux + element.precio;
      });
      setTotal(aux);
    }).catch((e) => {
      console.log(e);
    })
  }, []);
  
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
          Valor inventario ${total}
        </div>
      </div>
      <DataTable
        columns={columns}
        data={productos}
        pagination
        responsiveLayout="scroll"
        responsive
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
