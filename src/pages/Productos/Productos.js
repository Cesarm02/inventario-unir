import React, {useState, useEffect} from 'react'
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from 'axios';
import { PRODUCTO_ENDPOINT } from '../../Helpers/endpoints';
import Boton from "../../components/Botones/BotonEditar";

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
 // Aca da error por ser solo id
 {
   name: "Categoria",
    selector: (row) => row.categoria.nombre,
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
  },
  {
    name: "unidad",
    selector: (row) => row.unidad,
  },
  {
    name: "Acciones",
    selector: (row) => row.acciones,
    sortable: true,
    grow: 3
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

export default function Productos() {

  const [productos, setProductos] = useState([]);
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    axios.get(PRODUCTO_ENDPOINT).then( response => {
      const data = response.data;
      data.forEach(da => {
        da.acciones = <Boton id={da.id} ruta={"/productos/editar/"}></Boton>;
      });
      
      setfetching(false);
      setProductos(data);
      
    }).catch(e => {
      console.error(e);
      setfetching(false);
    });
  }, []);

  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Productos{" "}
        <Link to="/productos/agregar">
          <button type="button" className="btn btn-outline-success float-right">
            Agregar productos
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
        data = {productos}
        pagination
        responsiveLayout="scroll"
        fixedHeader
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
