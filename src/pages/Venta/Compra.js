import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import CompraForm from "../../components/forms/Venta/CompraForm";

export default function Venta() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Compras{" "}
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <CompraForm></CompraForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
