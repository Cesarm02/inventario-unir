import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import validator from "validator";
import { isObjectEmpty } from "../../Helpers/Helpers";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import EditarProductoForm from "../../components/forms/Productos/EditarProductoForm";

export default function EditProducto() {
  const {id} = useParams();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Se monte el componente (iniciar)
  });

  const editarProducto = ({nombreProducto, precioProducto, unidad}) => {
    const errors = {};
    setErrors(errors);

    if(validator.isEmpty(nombreProducto)){
        errors.nombreProducto = "El nombre del producto es obligatorio";
    }

    if(validator.isEmpty(precioProducto)){
        errors.precioProducto = "El precio del producto es obligatorio";
    }

    if(!isObjectEmpty(errors)){
        setErrors(errors);
        return;
    }
    //llamar nuestra función
    };
    return (
      <div>
        <h3 className="alert alert-info mt-4 mr-auto">
          {" "}
          Productos{" "}
          <Link to="/productos">
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
            <Col
              sm="12"
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
            >
              <Card body>
                <h3> Editar Producto {id}</h3>
                <hr></hr>
                <EditarProductoForm errors={errors} onSubmitCallback={editarProducto} id={id}>
                </EditarProductoForm>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
