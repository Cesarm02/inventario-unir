import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function VerProveedorForm({ id }) {
  const [nombre, setNombre] = useState(id);
  const [estado, setEstado] = useState("ACTIVO");
  const [telefono, setTelefono] = useState(id);
  const [descripcion, setDescripcion] = useState(id);

  return (
    <Form>
      <Form.Group control="nombre">
        <Form.Label> Nombre</Form.Label>
        <Form.Control
          disabled
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group control="descripcion">
        <Form.Label> Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          disabled
          type="text"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
      </Form.Group>
      <Form.Group control="estado">
        <Form.Label> Estado</Form.Label>
        <Form.Control
          type="text"
          disabled
          onChange={(e) => setEstado(e.target.value)}
          value={estado}
        />
      </Form.Group>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          disabled
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
