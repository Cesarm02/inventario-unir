import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CompraForm from "../../components/forms/Venta/CompraForm";
import { COMPRA_ENDPOINT } from "../../Helpers/endpoints";
import axios from 'axios';
import Boton from "../../components/Botones/BotonEditar";


export default function Venta() {

  const [compra, setCompra] = useState([]);
  const [fetching, setfetching] = useState(true);
  const [errors, setErrors] = useState({});

  const addCompra = ({ cantidadP, totalP, fecha,  }) => {
    const errors = {};
    setErrors(errors);

    
    //llamar nuestra función
  };

  useEffect(() => {
    axios.get(COMPRA_ENDPOINT).then( response => {
      const data = response.data;
      data.forEach(da => {
        da.acciones = <Boton id={da.id} ruta={"/compras"}></Boton>;
      });
      
      setfetching(false);
      setCompra(data);
      
    }).catch(e => {
      console.error(e);
      setfetching(false);
    });
  }, []);


  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Compras{" "}
      </h3>
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
              <CompraForm errors={errors}
                onSubmitCallback={addCompra}>
              </CompraForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
