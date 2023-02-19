import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import Select from 'react-select'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { CATEGORIA_ENDPOINT, PRODUCTO_ENDPOINT } from "../../../Helpers/endpoints";
import { useNavigate } from "react-router";
import { toast } from "react-toastify"

export default function AgregarProductoForm({ errors, onSubmitCallback }) {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [estado, setEstado] = useState("");
  const [unidad, setUnidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");

  const history = useNavigate();

  const listOption = 
  [
      { label : "ACTIVO", value : "ACTIVO"}, 
      { label : "INACTIVO", value : "INACTIVO"}
  ];

  const listUnidad =
  [
    { label : "KG", value : "KG"}, 
    { label : "LB", value : "LB"}, 
    { label : "UNIDAD", value : "UNIDAD"}, 
    { label : "CAJA", value :"CAJA"}

  ]

  const [listOptionCate, setOptionCate] = useState([]);

   useEffect( () => {
        axios.get(CATEGORIA_ENDPOINT).then(response => {
            const data = response.data;
            data.forEach(element => {
                const aux = {value : element.id, label: element.nombre}
                listOptionCate.push(aux);
            });
            setOptionCate(listOptionCate);
        }).catch(e => {
            console.error(e);
        })
    }, []);

    const categoriaChanges = (categoria) =>{
      setCategoria({categoria});
    };
  
    const estadoChanges = (estado) => {
      setEstado({estado});
    };

    const unidadChange = (unidad) => {
      setUnidad({unidad});
    }

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ producto, precio, estado, unidad, categoria, cantidad });
    
    const data = {};
    data.nombre = producto;
    data.precio = precio;
    data.estado = estado.estado.value;
    data.categoria_id = categoria.categoria.value;
    data.unidad = unidad.unidad.value;
    data.cantidad = cantidad;
    console.log( data);

    axios.post(PRODUCTO_ENDPOINT, data).then(response => {

      toast.success("Producto creado correctamente", {
        position: toast.POSITION.TOP_CENTER
      })

      history("/productos")
    }).catch(e => {
      console.log(e);
    })

  };

  return (
    
    <Form onSubmit={submitForm}>
      <Form.Group control="producto">
        <Form.Label> Nombre Producto</Form.Label>
        <Form.Control
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          placeholder="Nombre del Producto"
          isInvalid={errors.producto}
        />
        <Form.Control.Feedback type="invalid">
          {errors.producto}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="categoria">
            <Form.Label> Categoria del producto</Form.Label>
            <Select 
                options={listOptionCate}
                onChange={categoriaChanges}
                >
            </Select>
      </Form.Group>
      <Row>
        <Col md="6" xs="12">
          <Form.Group control="precio">
            <Form.Label> Precio</Form.Label>
            <Form.Control
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio"
              isInvalid={errors.precio}
              min="1"
            />
            <Form.Control.Feedback type="invalid">
              {errors.precio}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="estado">
            <Form.Label> Estado del producto</Form.Label>
            <Select
             options={listOption} onChange={estadoChanges} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12">
          <Form.Group control="unidad">
            <Form.Label> Unidad</Form.Label>
            <Select
            options= {listUnidad}
            onChange={unidadChange}
            />
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          
          <Form.Group control="cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={cantidad}
              pattern="^[1-9]\d*$"
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Cantidad del producto"
              isInvalid={errors.cantidad}
              min="1"

            />
            <Form.Control.Feedback type="invalid">
              {errors.cantidad}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      
      <Button variant="primary mt-2 " type="submit">
        Agregar Categoria
      </Button>
    </Form>
  );
}
