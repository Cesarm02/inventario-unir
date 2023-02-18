import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import "../../Css/Categoria.css";
import axios from "axios";
import { useEffect } from "react";
import { CATEGORIA_ENDPOINT } from "../../Helpers/endpoints";
import Boton from "../../components/Botones/BotonEditar";
import BotonVisualizar from "../../components/Botones/BotonVisualizar";

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
    grow: 1.5,
  },
];

export default function Categorias() {
  const [categorias, setCategorias] = useState("");
  useEffect(() => {
    axios.get(CATEGORIA_ENDPOINT).then(response => {
      const data = response.data;
      data.forEach(da => {
        da.acciones = 
        <div>
          <Boton id={da.id} ruta={"/categorias/editar/"}></Boton>
          <BotonVisualizar id={da.id} ruta={"/categorias/"}></BotonVisualizar>
        </div>
      });
        console.log(response)
        setCategorias(response.data);
      }).catch(e => {
      console.log(e);
    })
  }, [])

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
        data={categorias}
        pagination
        responsiveLayout="scroll"
        fixedHeader
      />
    </div>
  );
}
