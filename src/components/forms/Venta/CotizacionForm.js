import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function CotizacionForm() {
  const data = [
    { id: 1, nombre: "leche", cantidad: 3, precio: 2000},
    { id: 2, nombre: "carne", cantidad: 2, precio: 2000},
    { id: 3, nombre: "pasta", cantidad: 5, precio: 2000},
  ];
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [total, setTotal] = useState("");

  const [elementos, setElementos] = useState([]);

  const addElement = () => {
    const elemenNew = [...elementos];
    elemenNew.push({
      producto: "",
      cantidad: 0,
      precio: 0,
      total: 0,
    });

    setElementos(elemenNew);
  };

  const onChangeItem = (index, name, value) => {
    const elemenNew = [...elementos];
    elemenNew[index][name] = value;
    if(name == "producto"){
      elemenNew[index].precio = data[index].precio; //se debe seleccionar el del producto
    }
    elemenNew[index].total = elemenNew[index].precio * elemenNew[index].cantidad;
    setElementos(elemenNew);
  };

  const eliminarElement = (index) => {
   
    if(index > -1){
      const newArray = elementos.filter((item, indice) =>{
        return indice !== index
      });
      setElementos(newArray);
    }
    
  };

  console.log(elementos);
  return (
    <div>
      {elementos.map((item, index) => (
        <div key={index}>
          <Row>
            <Col md="4" xs="12" className="mr-4">
              <Form.Group control="producto">
              <Form.Label> Seleccionar producto</Form.Label>
                <Form.Select
                  name="producto"
                  value={item.producto}
                  onChange={(e) =>
                    onChangeItem(index, e.target.name, e.target.value)
                  }
                >
                  <option>Selecciona producto</option>
                  <option value="1">{data[0].nombre}</option>
                  <option value="2">{data[1].nombre}</option>
                  <option value="3">{data[2].nombre}</option>
                </Form.Select>
               
              </Form.Group>
            </Col>
            <Col md="4" xs="12">
              <Form.Group control="cantidad">
                <Form.Label> cantidad</Form.Label>
                <Form.Control
                  type="number"
                  value={item.cantidad}
                  name="cantidad"
                  cantidad={item.cantidad}
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
                  value={item.total }
                  name="total"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col md="4" xs="12">
              <Button onClick={() => eliminarElement(index)} variant="danger mt-4 mr-2"  type="submit">
                eliminar {index + 1}
              </Button>
            </Col>
          </Row>
          
        </div>
      ))}
      <div>
        <Button onClick={addElement} variant="primary mt-2 mr-2" type="submit">
          Agregar producto
        </Button>
        <Button variant="success mt-2 mr-2 " type="submit">
          Realizar Cotización
        </Button>
      </div>
    </div>
  );
}
