import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import Select from 'react-select'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { COMPRA_ENDPOINT, PRODUCTO_ENDPOINT, REGISTER_PROVEEDOR_ENDPOINT, PROVEEDOR_ENDPOINT } from "../../../Helpers/endpoints";
import { useNavigate } from "react-router";
import { toast } from "react-toastify"
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
//import Boton from "../../components/Botones/BotonEditar";


export default function CompraForm({ onSubmitCallback }) {
  const [producto, setProducto] = useState([]);
  const [listProducto, setListProduct] = useState([]);
  const [dataProducto, setDataProducto] = useState("");
  const [total, setTotal] = useState("");
  const [fecha, setFecha] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  //const [id, setId] = useState("");


  const [proveedor_id, setProveedor_id] = useState("");
  const [listProveedor, setListProveedor] = useState([]);
  const [dataProveedor, setDataProveedor] = useState("");

  const history = useNavigate();

  //Listado productos
  useEffect(() => {
    axios
      .get(PRODUCTO_ENDPOINT)
      .then((response) => {
        const data = response.data;
        setDataProducto(data);
        console.log({dataProducto});
        data.forEach((element) => {
          const aux = { value: element.id, label: element.nombre };
          listProducto.push(aux);
        });
        setProducto(listProducto);
        console.log(listProducto);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(REGISTER_PROVEEDOR_ENDPOINT)
      .then((response) => {
        const data = response.data;
        setDataProveedor(data);
        data.forEach((element) => {
          const aux = { value: element.id, label: element.nombre };
          listProveedor.push(aux);
        });
        setProveedor_id(listProveedor);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [elementos, setElementos] = useState([]);

  const addElement = () => {
    const elemenNew = [...elementos];
    elemenNew.push({
      cantidad: 0,
      precio: 0,
      total: 0,
    });
    setElementos(elemenNew);
  };

  

  const onChangeItem = (index, name, value) => {
    const elemenNew = [...elementos];
    elemenNew[index][name] = value;
    if (name === "producto") {
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
      producto,
      proveedor_id,
      fecha,
      cantidad,
      precio,
      total,
    });

    const data = {};
    data.producto = producto.id;
    data.proveedor_id = proveedor_id.id;
    data.fecha = fecha;
    data.cantidad = cantidad;
    //data.precio = producto.precio;
    data.total = total;
    console.log(data);

    axios.post(COMPRA_ENDPOINT, data).then(response => {
      toast.success("Compra correctamente", {
        position: toast.POSITION.TOP_CENTER
      })

      history("/compras")

    }).catch(e => {
      console.log(e);
    })
  };



  return (
    <>
      <Form onSubmit={submitForm}>
        <div>
          {elementos.map((item, index) => (
            <div key={index}>
              <Row>
                <Col md="4" xs="12" className="mr-4">
                  <Form.Group control="productos">
                    <Form.Label> Seleccionar producto</Form.Label>
                    <Select
                      options={producto}
                      onChange={(e) => onChangeItem(index, "productos", e.value)}
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
              <Col md="4" xs="12" className="mr-4">
                <Form.Group control="proveedor_id">
                  <Form.Label> Proveedor</Form.Label>
                  <Select
                    options={proveedor_id}
                    onChange={(e) => onChangeItem(index, "proveedor_id", e.value)}
                  ></Select>
                </Form.Group>
              </Col>
              <Col md="4" xs="12">
                <Form.Group control="fecha">
                  <Form.Label> fecha</Form.Label>
                  <Form.Control
                    type="date"
                    value={item.fecha}
                    name="fecha"
                    onChange={(e) =>
                      onChangeItem(index, e.target.name, e.target.value)
                    }
                    placeholder="Fecha"
                  />
                </Form.Group>
              </Col>
              <Col md="4" xs="12">
                <Form.Group control="fecha">
                  <Form.Label> Numero Factura</Form.Label>
                  <Form.Control
                    type="number"
                    value={item.numeroFactura}
                    name="numeroFactura"
                    onChange={(e) =>
                      onChangeItem(index, e.target.name, e.target.value)
                    }
                    placeholder="numeroFactura"
                  />
                </Form.Group>
              </Col>

            </div>
          ))}
          <div>
            <Button variant="success mt-2 mr-2 " type="submit">
              Realizar compra
            </Button>
          </div>
        </div>
      </Form>
      <>
        <Button
          onClick={addElement}
          variant="primary mt-2 mr-2"
          type="submit"
        >
          Agregar producto
        </Button>
      </>

    </>

  );
}
