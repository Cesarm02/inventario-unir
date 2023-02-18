import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import validator from "validator";
import { isObjectEmpty } from "../../Helpers/Helpers";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import EditarClienteForm from "../../components/forms/Clientes/EditarClienteForm";

export default function EditarCliente() {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Se monte el componente (iniciar)
  });
  const editCliente = ({
    documento,
    nombre,
    apellido,
    tipoDocumento,
    estado,
    tipo,
  }) => {
    const errors = {};
    setErrors(errors);

    if (validator.isEmpty(documento)) {
      errors.documento = "El documento del cliente es obligatorio";
    }

    if (validator.isEmpty(nombre)) {
      errors.nombre = "El nombre del cliente es obligatorio";
    }

    if (validator.isEmpty(apellido)) {
      errors.apellido = "El apellido del cliente es obligatorio";
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
        Clientes{" "}
        <Link to="/clientes">
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
              <h3> Editar Cliente {id}</h3>
              <hr></hr>
              <EditarClienteForm
                errors={errors}
                onSubmitCallback={editCliente}
                id={id}
              ></EditarClienteForm>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}