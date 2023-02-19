import React from 'react'
import VerProveedorForm from '../../components/forms/Proveedor/VerProveedorForm';
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function VerProveedores() {
  const { id } = useParams();
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Proveedores{" "}
        <Link to="/proveedores">
          <button
            type="button"
            className="btn btn-outline-primary float-right mr-4 btn-volver"
          >
            Atras
          </button>
        </Link>
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Card body>
              <h3> Visualizar Proveedor</h3>
              <hr></hr>
              <VerProveedorForm id={id}></VerProveedorForm>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
