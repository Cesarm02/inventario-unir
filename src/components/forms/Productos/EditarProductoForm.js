import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";
import { PRODUCTOID_ENDPOINT, CATEGORIA_ENDPOINT } from "../../../Helpers/endpoints";
import Select from 'react-select'
import { useNavigate } from "react-router";

export default function EditarProductoForm({errors, onSubmitCallback, id}) {
    const [categoria, setCategoria] = useState();
    const [estado, setEstado] = useState(id);
    const [unidad, setUnidad] = useState(id);
    
    const [productoActual, setProductoActual] = useState({});
        
    const listOption = 
    [
        { label : "ACTIVO", value : 1}, 
        { label : "INACTIVO", value : 0}
    ];

    const listUnidad =
    [
      { label : "KG", value : "KG"}, 
      { label : "LB", value : "LB"}, 
      { label : "UNIDAD", value : "UNIDAD"}, 
      { label : "CAJA", value :"CAJA"}
  
    ]
    const history = useNavigate();
  
    const [listOptionCate, setOptionCate] = useState([]);
    const [selectCat, setSelectCat] = useState([]);
    const [selectEst, setSelectEst] = useState([]);
    var aux2 = {};

    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [cantidadProducto, setCantidadProducto] = useState("");

    useEffect( () => {
        axios.get(PRODUCTOID_ENDPOINT+id).then(response => {
            setProductoActual(response.data);
            setNombreProducto(response.data.nombre)
            setPrecioProducto(response.data.precio)
            setCantidadProducto(response.data.cantidad)

            //Imprimir el producto
            const aux = {value: response.data.categoria.id, label:response.data.categoria.nombre};
            setSelectCat(aux);
            if(response.data.estado === "ACTIVO"){
                aux2 = {value: response.data.estado, label:"ACTIVO"};
            }else{
                aux2 = {value: response.data.estado, label:"INACTIVO"};
            }
            setSelectEst(aux2);
        }).catch(e => {
            console.error(e);
        })
    },[]);

    useEffect( () => {
        axios.get(CATEGORIA_ENDPOINT).then(response => {
            const data = response.data;
            data.forEach(element => {
                const aux = {value : element.id, label: element.nombre}
                listOptionCate.push(aux);
            });
            setOptionCate(listOptionCate);
        }).catch(e => {
            console.error(e);
        })
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ nombreProducto, precioProducto, cantidadProducto, estado, unidad, categoria});
    
        const data = {};
        data.id=id;
        data.nombre = nombreProducto;
        data.precio = precioProducto;
        data.estado = estado.estado.label;
        data.categoria_id = categoria.categoria.value;
        data.unidad = unidad.unidad.value;
        data.cantidad = cantidadProducto;
        console.log( data);

        axios.put(PRODUCTOID_ENDPOINT, data).then(response => {
            console.log(response);
            history("/productos")
        }).catch(e => {
            console.log(e);
        })

    }

    const changeNombre= (nombre) => {
        let nombreProducto = nombre.target.value;
        setNombreProducto(nombreProducto);
    }

    const changePrecio= (precio) => {
        let precioProducto = precio.target.value;
        setPrecioProducto(precioProducto);
    }

    const changeCantidad= (cantidad) => {
        let cantidadProducto = cantidad.target.value;
        setCantidadProducto(cantidadProducto);
    }

    const categoriaChanges = (categoria) =>{
        setCategoria({categoria});
      };
    
      const estadoChanges = (estado) => {
        setEstado({estado});
      };
      const unidadChange = (unidad) => {
        setUnidad({unidad});
      }
    return (
        <Form onSubmit={submitForm}>

        <Form.Group control="producto">
            <Form.Label> Nombre Producto</Form.Label>
            <Form.Control 
                type="text" 
                onChange={changeNombre}
                value = {nombreProducto}
                isInvalid={errors.nombreProducto}
            />
            <Form.Control.Feedback type="invalid">
                    {errors.nombreProducto}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Group control="categoria">
                    <Form.Label> Categoria del producto</Form.Label>
                        <Select 
                            options={listOptionCate}
                            onChange={categoriaChanges}
                            >
                        </Select>
                </Form.Group>
        </Form.Group>
        <Row>
            <Col md="6" xs="12">
                <Form.Group control="precio">
                    <Form.Label> Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        value = {precioProducto}
                        onChange={changePrecio}
                        isInvalid={errors.precioProducto}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.precioProducto}
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
                <Form.Group control="estado">
                    <Form.Label> Estado del producto</Form.Label>
                        <Select options={listOption} defaultValue={selectEst} onChange={estadoChanges} ></Select>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="6" xs="12">
                <Form.Group control="unidad">
                <Form.Label> Unidad</Form.Label>
                    <Select
                    options= {listUnidad}
                    onChange = {unidadChange}
                    />
                </Form.Group>
            </Col>
            <Col md="6" xs="12">
            <Form.Group control="cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              pattern="^[1-9]\d*$"
              value = {cantidadProducto}
              isInvalid={errors.cantidad}
              onChange={changeCantidad}
              min="1"
            />
            <Form.Control.Feedback type="invalid">
              {errors.cantidad}
            </Form.Control.Feedback>
          </Form.Group>
            </Col>
        </Row>
        <Button variant="primary mt-2 " type="submit">
            Editar Producto
        </Button>
    </Form>
  )
}
