import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import validator from "validator";
import { isObjectEmpty } from "../../Helpers/Helpers";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import AgregarProveedorForm from "../../components/forms/Proveedor/AgregarProveedorForm";

export default function AgregarProveedor() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Se monte el componente (iniciar)
  });
  const editCliente = ({ nombre, telefono }) => {
    const errors = {};
    setErrors(errors);

    if (validator.isEmpty(telefono)) {
      errors.documento = "El Telefono del proveedor es obligatorio";
    }

    if (validator.isEmpty(nombre)) {
      errors.nombre = "El nombre del cliente es obligatorio";
    }

    if (!isObjectEmpty(errors)) {
      setErrors(errors);
      return;
    }
    //llamar nuestra función
  };
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Proveedor{" "}
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
              <h3> Agregar proveedor 2 {id}</h3>
              <hr></hr>
              <AgregarProveedorForm
                errors={errors}
                onSubmitCallback={editCliente}
                id={id}
              ></AgregarProveedorForm>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
