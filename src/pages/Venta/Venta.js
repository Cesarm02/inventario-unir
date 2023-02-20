import React, { useEffect, useState } from "react";
import VentaForm from "../../components/forms/Venta/VentaForm";
import { Container, Row, Col } from 'react-bootstrap'
import validator from "validator";
import { isObjectEmpty } from "../../Helpers/Helpers";
export default function Venta() {
  const [cantidadP, setCantidad] = useState();
  const [errors, setErrors] = useState({});
  const addVenta = ({ cantidadP, totalP, fecha,  }) => {
    const errors = {};
    setErrors(errors);

    
    //llamar nuestra función
  };
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Ventas{" "}
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <VentaForm   errors={errors}
                onSubmitCallback={addVenta}
                >
              
              </VentaForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
