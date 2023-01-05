import React from "react";
import CotizacionForm from "../../components/forms/Venta/CotizacionForm";
import { Container, Row, Col } from 'react-bootstrap'

export default function Cotizacion() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Cotización{" "}
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <CotizacionForm></CotizacionForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
