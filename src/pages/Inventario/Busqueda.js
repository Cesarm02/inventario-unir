import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../../Css/Busqueda.css";

export default function Busqueda({ onSubmitCallback }) {
  const [buscar, setBuscar] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ buscar });
  };
  return (
    <Form >
      <Row className="derecha">
        <Col md="2" xs="2">
          <Form.Group control="buscar">
            <Form.Label> Filtrar</Form.Label>
          </Form.Group>
        </Col>
        <Col md="6" xs="6">
          <Form.Group control="buscar">
            <Form.Control
              type="text"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              placeholder="Buscar"
            />
          </Form.Group>
        </Col>
        <Col md="2" xs="2">
          <Button variant="primary " type="submit">
            Filtrar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
