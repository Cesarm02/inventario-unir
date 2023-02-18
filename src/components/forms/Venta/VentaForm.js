import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { PRODUCTO_ENDPOINT } from "../../../Helpers/endpoints";
import Select from "react-select";

export default function VentaForm({onSubmitCallback}) {
  const [producto, setProducto] = useState("");
  const [listProducto, setListProduct] = useState([]);
  const [dataProducto, setDataProducto] = useState("");
  const [total, setTotal] = useState("");

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
    if (name == "producto") {
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
      producto
      //ACA MODIFICAR ESTO; PARA LO DE LA VENTA
    });
  };

  return (
    <Form onSubmit={submitForm}>
      <div>
        {elementos.map((item, index) => (
          <div key={index}>
            <Row>
              <Col md="4" xs="12" className="mr-4">
                <Form.Group control="producto">
                  <Form.Label> Seleccionar producto</Form.Label>
                  <Select
                    options={producto}
                    onChange={(e) => onChangeItem(index, "producto", e.value)}
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
