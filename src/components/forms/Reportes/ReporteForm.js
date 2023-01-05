import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function ReporteForm() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  return (
    <Form>
      <Row>
        <Col md="3" xs="6">
          <Form.Group control="fechaFinal">
            <Form.Label> Fecha final</Form.Label>
          </Form.Group>
        </Col>
        <Col md="3" xs="6">
          <Form.Group control="fechaFinal">
            <Form.Control
              type="date"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              placeholder="fechaFinal"
            />
          </Form.Group>
        </Col>
        <Col md="3" xs="6">
          <Form.Group control="buscar">
            <Form.Label> Fecha inicio</Form.Label>
          </Form.Group>
        </Col>
        <Col md="3" xs="6">
          <Form.Group control="fechaInicio">
            <Form.Control
              type="date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              placeholder="fechaInicio"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12">
            <Form.Group className="mt-4" control="reporte">
                <Form.Label> Tipo de reporte</Form.Label>
                <Form.Select aria-label="Default select example" className="ml-4">
                <option value="1"> Reporte de ventas </option>
                <option value="2"> Reporte de compras </option>
                <option value="3"> Reporte de inventario </option>
                <option value="4"> Reporte de clientes </option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col>
            <Form.Group className="mt-4" control="reporte">
            <Button variant="primary " type="submit">
              Generar reporte
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
