import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import Select from 'react-select'
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { COMPRA_ENDPOINT, PRODUCTO_ENDPOINT } from "../../../Helpers/endpoints";
import { useNavigate } from "react-router";
import { toast } from "react-toastify"
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
//import Boton from "../../components/Botones/BotonEditar";



export default function CompraForm() {

  const data = [
    { id: 1, nombre: "leche", cantidad: 3, precio: 2000},
    { id: 2, nombre: "carne", cantidad: 2, precio: 2000},
    { id: 3, nombre: "pasta", cantidad: 5, precio: 2000},
  ];
  const [elementos, setElementos] = useState([]);
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");

const [listOptionProd, setOptionProd] = useState([]);

  useEffect( () => {
    axios.get(PRODUCTO_ENDPOINT).then(response => {
        const data = response.data;
        data.forEach(element => {
            const aux = {value : element.id, label: element.nombre}
            listOptionProd.push(aux);

        });
    
        console.log(listOptionProd)
        setOptionProd(listOptionProd);
    }).catch(e => {
        console.error(e);
    })
}, []);

const productoChanges = (producto) =>{
  setProducto({producto});
};


  const addElement = () => {
    const elemenNew = [...elementos];
    elemenNew.push({
      producto: "",
      cantidad: 0,
      precio: 0,
      total: 0,
      numerofactura:0,
      proveedor_id:0,
      fecha:0,
    });

    setElementos(elemenNew);
    

  };

  const onChangeItem = (index, name, value) => {
    const elemenNew = [...elementos];
    elemenNew[index][name] = value;
    if(name === "producto"){
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
      <Form.Group control="categoria">
            <Form.Label> Producto</Form.Label>
            <Select 
                options={listOptionProd}
                onChange={productoChanges}
                >
            </Select>
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
                <Form.Label> Total </Form.Label>
                <Form.Control
                  type="number"
                  value={item.total}
                  name="total"
                  cantidad={item.total}
                  onChange={(e) =>
                    onChangeItem(index, e.target.name, e.target.value)
                  }
                  placeholder="Total"
                />
              </Form.Group>
            </Col>
            <Col md="4" xs="12">
              <Form.Group control="numerofactura">
                <Form.Label> Numero de Factura </Form.Label>
                <Form.Control
                  type="number"
                  value={item.numerofactura}
                  name="numerofactura"
                  cantidad={item.numerofactura}
                  onChange={(e) =>
                    onChangeItem(index, e.target.name, e.target.value)
                  }
                  placeholder="Numero de factura"
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
          Realizar Compra
        </Button>
      </div>
    </div>
  );
}
