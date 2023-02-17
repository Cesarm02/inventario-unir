import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";
import { PROVEEDORID_ENDPOINT } from "../../../Helpers/endpoints";

export default function EditarProveedorForm({ errors, onSubmitCallback, id }) {
    const [nombre, setNombre] = useState(id);
    const [telefono, setTelefono] = useState(id);
    const [descripcion, setDescripcion] = useState(id);
    const [documento, setDocumento] = useState(id);
    const [direccion, setDireccion] = useState(id);
    const [email, setEmail] = useState(id);
    const [proveedorActual, setProveedorActual] = useState({});
    const data = {};

    useEffect( () => {
        axios.get(PROVEEDORID_ENDPOINT+id).then(response => {
            const data = response.data;
            console.log(data);
            setProveedorActual(data);
        }).catch(e => {
            console.error(e);
        })
    },[]);

    const submitForm = (e) => {
      e.preventDefault();
      onSubmitCallback({
        id,
        nombre,
        telefono,
        descripcion,
        documento,
        direccion,
        email
      });
    };
  return (
    <Form onSubmit={submitForm} method="POST">
      <Form.Group control="nombre">
        <Form.Label> Nombre</Form.Label>
        <Form.Control
          type="text"
          value={proveedorActual.nombre}
          onChange={(e) => setNombre(e.target.value)}
          isInvalid={errors.nombre}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="descripcion">
        <Form.Label> Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          value={proveedorActual.descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          isInvalid={errors.descripcion}
        />
      </Form.Group>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={proveedorActual.telefono}
          onChange={(e) => setTelefono(e.target.value)}
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="documento">
        <Form.Label> Nit</Form.Label>
        <Form.Control
          type="text"
          value={proveedorActual.documento}
          onChange={(e) => setDocumento(e.target.value)}
          isInvalid={errors.documento}
        />
        <Form.Control.Feedback type="invalid">
          {errors.documento}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="direccion">
        <Form.Label> Direccion</Form.Label>
        <Form.Control
          type="text"
          value={proveedorActual.direccion}
          onChange={(e) => setDireccion(e.target.value)}
          isInvalid={errors.direccion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.direccion}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="email">
        <Form.Label> Email</Form.Label>
        <Form.Control
          type="text"
          value={proveedorActual.email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Editar Proveedor
      </Button>
    </Form>
  )
}
