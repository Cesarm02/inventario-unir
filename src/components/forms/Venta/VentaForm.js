import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { PRODUCTO_ENDPOINT } from "../../../Helpers/endpoints";
import Select from "react-select";
import { VENTA_ENDPOINT } from "../../../Helpers/endpoints";
import { useNavigate } from "react-router";
import { CLIENTES_ENDPOINT } from "../../../Helpers/endpoints";
export default function VentaForm({ errors, onSubmitCallback}) {
  const [producto_id, setProducto] = useState("");
  const [listProducto, setListProduct] = useState([]);
  const [listCliente, setListCliente] = useState([]);
  const [dataProducto, setDataProducto] = useState("");
  const [dataCliente, setDataCliente] = useState("");
  const [total, setTotal] = useState("");
  const [totalP, setTotalP] = useState();
  const [numFactura, setNumFactura] = useState();
  const [totalProd, setTotalProd] = useState();
  const [fecha, setFecha] = useState();
  const [cliente_id, setCliente_Id] = useState("");
  const [clid, setClid] = useState("");
  const [listadoProducto, setListadoProduct] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(PRODUCTO_ENDPOINT)
      .then((response) => {
        const data = response.data;
        setDataProducto(data);
        data.forEach((element) => {
          const aux = { value: element.id, label: element.nombre };
          listProducto.push(aux);
        });
        setProducto(listProducto);
        
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get(CLIENTES_ENDPOINT)
      .then((response) => {
        const data = response.data;
        setDataCliente(data);
        data.forEach((element) => {
          const aux = { value: element.id, label: element.nombre };
          listCliente.push(aux);
        });
        setCliente_Id(listCliente);
        console.log(listCliente);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [elementos, setElementos] = useState([]);

  const addElement = () => {
    const elemenNew = [...elementos];
    const totalp2=0;
    elemenNew.push({
      producto_id: "",
      cantidad: 0,
      precio: 0,
      total: 0,
    });
    setElementos(elemenNew);
    
  };
  
  const onChangeItem = (index, name, value) => {
    const elemenNew = [...elementos];
    
    elemenNew[index][name] = value;
    if (name === "producto_id") {
      elemenNew[index].precio = dataProducto[value].precio; //se debe seleccionar el del producto
    }
    elemenNew[index].total =
      elemenNew[index].precio * elemenNew[index].cantidad;
    setElementos(elemenNew);
    
            
    
   
  };
  
  const eliminarElement = (index) => {
    if (index > -1) {
      const newArray = elementos.filter((item, indice) => {
        return indice !== index;
      });
      setElementos(newArray);
    }
  };

  console.log(elementos);

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({
     totalP,
     numFactura,
     clid,
     fecha,
     cliente_id,
     listadoProducto
      
    });
    const data = {};
     
     
      data.numero_factura = numFactura;
      data.totalp = 300;
      data.fecha="2022-12-12";
      data.cliente_id=11;
      data.numeroFactura=22;
      data.productos=elementos;
      console.log("antes");
      console.log(data);
      console.log("despues");
      axios.post(VENTA_ENDPOINT, data).then(response => {
        console.log(response);
        history("/")
      }).catch(e => {
          console.log(e);
      })
      elementos.forEach(function(elemento) {
      console.log(elemento.total);
  });
    
  };
  
  
  return (
    <Form onSubmit={submitForm}>
      Total:{totalProd}
      <div>
      <Col md="4" xs="12" className="mr-4">
                <Form.Group control="cliente_id">
                  <Form.Label> Seleccionar cliente</Form.Label>
                  <Select 
                    options={cliente_id}
                    
                  ></Select>
                </Form.Group>
              </Col>
          <Form.Group control="numFactura">
        <Form.Label> numero de factura</Form.Label>
        <Form.Control
          
          type="text"
          value={numFactura}
          onChange={(e) => setNumFactura(e.target.value)}
          
        />
       
      </Form.Group>
        {elementos.map((item, index) => (
           
          <div key={index}>
            <Form.Label>  </Form.Label>
            <Row>
            
              <Col md="4" xs="12" className="mr-4">
                <Form.Group control="producto_id">
                  <Form.Label> Seleccionar producto</Form.Label>
                  <Select
                    options={producto_id}
                    onChange={(e) => onChangeItem(index, "producto_id", e.value)}
                  ></Select>
                </Form.Group>
              </Col>
              <Col md="4" xs="12">
                <Form.Group control="cantidad">
                  <Form.Label> cantidad</Form.Label>
                  <Form.Control
                    type="number"
                    value={item.cantidad}
                    name="cantidad"
                    onChange={(e) =>
                      onChangeItem(index, e.target.name, e.target.value)
                    }
                    placeholder="Cantidad"
                  />
                </Form.Group>
              </Col>
              <Col md="4" xs="12">
                <Form.Group control="total">
                  <Form.Label> Total</Form.Label>
                  <Form.Control
                    type="number"
                    value={item.total}
                    name="total"
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col md="4" xs="12">
                <Button
                  onClick={() => eliminarElement(index)}
                  variant="danger mt-4 mr-2"
                  type="submit"
                >
                  eliminar {index + 1}
                </Button>
              </Col>
            </Row>
          </div>
        ))}
        <div>
          <Button
            onClick={addElement}
            variant="primary mt-2 mr-2"
            type="submit"
          >
            Agregar producto
          </Button>
          <Button variant="success mt-2 mr-2 " type="submit">
            Realizar venta
          </Button>
        </div>
      </div>
    </Form>
  );
}
