import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function EditarProveedorForm({ errors, onSubmitCallback, id }) {
    const [nombre, setNombre] = useState(id);
    const [telefono, setTelefono] = useState(id);
    const [descripcion, setDescripcion] = useState(id);
    
    const submitForm = (e) => {
      e.preventDefault();
      onSubmitCallback({
        nombre,
        telefono,
        descripcion,
      });
    };
  return (
    <Form onSubmit={submitForm}>
      <Form.Group control="nombre">
        <Form.Label> Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
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
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          isInvalid={errors.descripcion}
        />
      </Form.Group>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Editar Proveedor
      </Button>
    </Form>
  )
}
