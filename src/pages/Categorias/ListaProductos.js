import React, { useEffect, useState } from 'react'
import {useParams} from "react-router"
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { CATEGORIA_ENDPOINT } from '../../Helpers/endpoints';

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



export default function ListaProductos() {
  const {id} = useParams();

  const [categoriaActual, setCategoriaActual] = useState();
  const [nombreCategoria, setCategoria] = useState("");
  const [ descripcionCat, setDescripcionCat] = useState("");
  const [ estadoCat, setEstadoCat] = useState("");
  const [cantidadCat, setCantidad] = useState("");
  const [productos, setProductos] = useState();
  useEffect(() => {
    axios.get(CATEGORIA_ENDPOINT+id).then(response => {
      const data = response.data;
      setCategoriaActual(data);
      setCategoria(data.nombre);
      setEstadoCat(data.estado);
      setDescripcionCat(data.descripcion);
      setCantidad(data.productos.length)
      setProductos(data.productos);
    }).catch(e => {
      console.log(e);
    })
  },[]);

  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        Lista de productos - Categoria = {nombreCategoria}
        <Link to={"/categorias"}>
          <button type="button" className="btn btn-outline-primary float-right">
            Volver
          </button>
        </Link>
      </h3>
      <Card className="mb-4">
      <Card.Header>Nombre {nombreCategoria}</Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Descripcion :</b> {descripcionCat} <br></br>
            <b>Estado: </b>{estadoCat},<br></br>
            <b>Cantidad productos :</b> {cantidadCat}
          </Card.Text>
        </Card.Body>
      </Card>

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

