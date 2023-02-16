import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";
import { PRODUCTOID_ENDPOINT } from "../../../Helpers/endpoints";

export default function EditarProductoForm({errors, onSubmitCallback, id}) {
    const [producto, setProducto] = useState(id);
    const [precio, setPrecio] = useState(id);
    const [estado, setEstado] = useState(id);
    const [unidad, setUnidad] = useState(id);
    const [categoria, setCategoria] = useState(id);
    
    const [productoActual, setProductoActual] = useState({});
    const data = {};

    useEffect( () => {
        axios.get(PRODUCTOID_ENDPOINT+id).then(response => {
            const data = response.data;
            console.log(data);
            setProductoActual(data);
        }).catch(e => {
            console.error(e);
        })
    },[]);

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ producto, precio, estado, unidad, categoria});
    }

    return (
        <Form onSubmit={submitForm}>

        <Form.Group control="producto">
            <Form.Label> Nombre Producto</Form.Label>
            <Form.Control 
                type="text" 
                value={productoActual.nombre}
                onChange={e => setProducto(e.target.value )}
                isInvalid={errors.producto}
            />
            <Form.Control.Feedback type="invalid">
                    {errors.producto}
            </Form.Control.Feedback>
        </Form.Group>
        <Row>
            <Col md="6" xs="12">
                <Form.Group control="precio">
                    <Form.Label> Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={productoActual.precio}
                        onChange={e => setPrecio(e.target.value )}
                        isInvalid={errors.precio}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.precio}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="estado">
                    <Form.Label> Estado del producto</Form.Label>
                        <Form.Select  name="estado" id="plan">
                            <option value="ACTIVO">ACTIVO</option>
                            <option value="INACTIVO">INACTIVO</option>
                        </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="6" xs="12">
                <Form.Group control="unidad">
                    <Form.Label> Unidad</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={productoActual.unidad}
                        onChange={e => setUnidad(e.target.value )}
                        isInvalid={errors.unidad}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.unidad}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="categoria">
                    <Form.Label> Categoria del producto</Form.Label>
                    <Form.Select  aria-label="Default select example">
                            <option value="1">Producto Lacteos</option>
                            <option value="2">Producto Carnes</option>
                        </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Button variant="primary mt-2 " type="submit">
            Editar Producto
        </Button>
    </Form>
  )
}
