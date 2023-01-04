import React, { useState } from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";

export default function EditarClienteForm({errors, onSubmitCallback, id}) {
    const [documento, setDocumento] = useState(id);
    const [nombre, setNombre] = useState(id);
    const [apellido, setApellido] = useState(id);
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [estado, setEstado] = useState("ACTIVO");
    const [tipo, setTipo] = useState("CLIENTE");
    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({
          documento,
          nombre,
          apellido,
          tipoDocumento,
          estado,
          tipo,
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
              isInvalid={errors.apellido}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary mt-2 " type="submit">
        Editar cliente
      </Button>
    </Form>
  )
}
