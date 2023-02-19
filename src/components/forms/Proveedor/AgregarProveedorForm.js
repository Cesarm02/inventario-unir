import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default function AgregarProveedorForm({ errors, onSubmitCallback }) {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("ACTIVO");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [documento, setDocumento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({
      nombre,
      estado,
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
      <Form.Group control="documento">
        <Form.Label>NIT</Form.Label>
        <Form.Control
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          placeholder="Nit"
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
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="direccion"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Agregar Proveedor
      </Button>
    </Form>
  );
}
