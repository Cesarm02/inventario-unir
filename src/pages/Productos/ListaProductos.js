import React from 'react'
import {useParams} from "react-router"
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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
    cantidad: "25",
  },
  {
    id: 2,
    nombre: "Res",
    precio : 12000,
    unidad : "libra",
    cantidad: "10",
    estado: "ACTIVO",
  },
  {
    id: 3,
    nombre: "Coca Cola",
    precio: 9500,
    unidad: "3.5lt",
    estado: "ACTIVO",
    cantidad: "3"
  },
];

export default function ListaProductos() {
  const {id} = useParams();

  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        Lista de productos - Categoria = {id} (Aqui irá nombre) {" "}
        <Link to={"/categorias"}>
          <button type="button" className="btn btn-outline-primary float-right">
            Volver
          </button>
        </Link>
      </h3>
      <Card className="mb-4">
      <Card.Header>Nombre Categoria</Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Descripcion :</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br></br>
            <b>Estado: </b>ACTIVO,<br></br>
            <b>Cantidad productos :</b> 123
          </Card.Text>
        </Card.Body>
      </Card>

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

