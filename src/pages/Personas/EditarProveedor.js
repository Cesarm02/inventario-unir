import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import validator from "validator";
import { isObjectEmpty } from "../../Helpers/Helpers";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import EditarProveedorForm from "../../components/forms/Proveedor/EditarProveedorForm";

export default function EditarProveedor() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Se monte el componente (iniciar)
  });
  const editProv = ({ nombreProv, telefonoProv, descripcionProv, direccionProv, documentoProv, emailProv }) => {
    const errors = {};
    setErrors(errors);

    if (validator.isEmpty(telefonoProv)) {
      errors.telefonoProv = "El Telefono del proveedor es obligatorio";
    }

    if (validator.isEmpty(nombreProv)) {
      errors.nombreProv = "El nombre del proveedor es obligatorio";
    }

    if (validator.isEmpty(descripcionProv)) {
      errors.descripcionProv = "la descripcion del proveedor es obligatorio";
    }
    if (validator.isEmpty(direccionProv)) {
      errors.direccionProv = "la direccion del proveedor es obligatorio";
    }
    if (validator.isEmpty(documentoProv)) {
      errors.documentoProv = "El documento del proveedor es obligatorio";
    }
    if (validator.isEmpty(emailProv)) {
      errors.emailProv = "El email del proveedor es obligatorio";
    }

    if (!isObjectEmpty(errors)) {
      setErrors(errors);
      return;
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
              <h3> Editar Proveedor {id}</h3>
              <hr></hr>
              <EditarProveedorForm
                errors={errors}
                onSubmitCallback={editProv}
                id={id}
              ></EditarProveedorForm>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
