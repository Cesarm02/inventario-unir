import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AgregarProveedorForm({ errors, onSubmitCallback }) {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("ACTIVO");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({
      nombre,
      estado,
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
          placeholder="Nombre"
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
          placeholder="descripcion"
          isInvalid={errors.descripcion}
        />
      </Form.Group>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Telefono o Celular"
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Agregar Cliente
      </Button>
    </Form>
  );
}
