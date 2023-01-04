import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AgregarCliente({ errors, onSubmitCallback }) {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [estado, setEstado] = useState("ACTIVO");
  const [telefono, setTelefono] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({
      documento,
      nombre,
      apellido,
      tipoDocumento,
      estado,
      telefono,
    });
  };
  return (
    <Form onSubmit={submitForm}>
      <Row>
        <Col md="6" xs="12">
          <Form.Group control="documento">
            <Form.Label> Documento</Form.Label>
            <Form.Control
              type="number"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Documento"
              isInvalid={errors.documento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.documento}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="tipoDocumento">
            <Form.Label> Tipo de documento</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Cedula de ciudadania</option>
              <option value="2">Tarjeta de identidad</option>
              <option value="3">Cedula de extranjeria</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12">
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
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="apellido">
            <Form.Label> Apellido</Form.Label>
            <Form.Control
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Apellido"
              isInvalid={errors.apellido}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
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
