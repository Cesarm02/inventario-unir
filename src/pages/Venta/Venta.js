import React from "react";
import VentaForm from "../../components/forms/Venta/VentaForm";
import { Container, Row, Col } from 'react-bootstrap'

export default function Venta() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Ventas{" "}
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <VentaForm></VentaForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
