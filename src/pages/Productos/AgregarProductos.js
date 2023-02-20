import React, {useEffect, useState} from 'react'
import AgregarProductoForm from '../../components/forms/Productos/AgregarProductoForm'
import { Container, Row, Card, Col } from 'react-bootstrap'
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'
import { Link } from 'react-router-dom'

export default function AgregarProductos() {
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Se monte el componente (iniciar)
  });

  const addProducto = ({producto, precio, cantidad, codigo}) => {
    const errors = {};
    setErrors(errors);

    if(validator.isEmpty(producto)){
        errors.producto = "El nombre del producto es obligatorio";
    }

    if(validator.isEmpty(precio)){
        errors.precio = "El precio del producto es obligatorio";
    }

    if(validator.isEmpty(cantidad)){
        errors.cantidad = "La cantidad del producto es obligatorio";
    }
    if(validator.isEmpty(codigo)){
        errors.codigo = "Codigo de producto es obligatorio";
    }
    if(!isObjectEmpty(errors)){
        setErrors(errors);
        return;
    }
    //llamar nuestra función
}
  return (
    <div>
        <h3 className="alert alert-info mt-4 mr-auto">
            {" "}
            Productos{" "}
            <Link to="/productos">
            <button type="button" className="btn btn-outline-primary float-right mr-4 btn-volver">
                Atras
            </button>
            </Link>
        </h3>
        <Container className="mt-5">
            <Row>
                <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
                <Card body>
                    <h3> Crear Producto</h3><hr></hr>
                    <AgregarProductoForm errors={errors} onSubmitCallback={addProducto}></AgregarProductoForm>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
