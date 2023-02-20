import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";
import { PROVEEDORID_ENDPOINT } from "../../../Helpers/endpoints";
import { useNavigate } from "react-router";
import Select from 'react-select';
export default function EditarProveedorForm({ errors, onSubmitCallback, id }) {
    const [estadoProv, setEstado] = useState("");
    const [nombreProv, setNombre] = useState("");
    const [telefonoProv, setTelefono] = useState("");
    const [descripcionProv, setDescripcion] = useState("");
    const [documentoProv, setDocumento] = useState("");
    const [direccionProv, setDireccion] = useState("");
    const [emailProv, setEmail] = useState("");
    
    const listOption = 
    [
        { label : "ACTIVO", value : 1}, 
        { label : "INACTIVO", value : 0}
    ];
    const history = useNavigate();
   
    const [selectEst, setSelectEst] = useState([]);
    var aux2 = {};
    useEffect( () => {
        axios.get(PROVEEDORID_ENDPOINT+id).then(response => {
            const data = response.data;
            console.log(data);
           
            setNombre(data.nombre);
            setTelefono(data.telefono);
            setDescripcion(data.descripcion);
            setDocumento(data.documento);
            setDireccion(data.direccion);
            setEmail(data.email);
            setEstado(data.estado);
            if(data.estado === "ACTIVO"){
              aux2 = {label:"ACTIVO",value: 1};
            }else{
                aux2 = {value:0, label:"INACTIVO"};
            }
            
            setSelectEst(aux2);
            console.log(selectEst);
            console.log(aux2);
        }).catch(e => {
            console.error(e);
        })
    },[]);

    const submitForm = (e) => {
      e.preventDefault();
      onSubmitCallback({
        id,
        estadoProv,
        nombreProv,
        telefonoProv,
        descripcionProv,
        documentoProv,
        direccionProv,
        emailProv
      });
      const data = {};
      data.id=id;
      data.estado = estadoProv.estado.label;
      data.nombre = nombreProv;
      data.telefono = telefonoProv;
      data.descripcion = descripcionProv;
      data.documento = documentoProv;
      data.direccion = direccionProv;
      data.email = emailProv;
      console.log( data);

      axios.put(PROVEEDORID_ENDPOINT, data).then(response => {
          console.log(response);
          history("/proveedores")
      }).catch(e => {
          console.log(e);
      })
    };
    const estadoChanges = (estado) => {
      setEstado({estado});
    };
  return (
    <Form onSubmit={submitForm} method="POST">
      <Form.Group control="nombreProv">
        <Form.Label> Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombreProv}
          onChange={(e) => setNombre(e.target.value)}
          isInvalid={errors.nombreProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombreProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="descripcionProv">
        <Form.Label> Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          value={descripcionProv}
          onChange={(e) => setDescripcion(e.target.value)}
          isInvalid={errors.descripcionProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.descripcionProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="telefonoProv">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={telefonoProv}
          onChange={(e) => setTelefono(e.target.value)}
          isInvalid={errors.telefonoProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefonoProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="documentoProv">
        <Form.Label> Nit</Form.Label>
        <Form.Control
          type="text"
          value={documentoProv}
          onChange={(e) => setDocumento(e.target.value)}
          isInvalid={errors.documentoProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.documentoProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="direccionProv">
        <Form.Label> Direccion</Form.Label>
        <Form.Control
          type="text"
          value={direccionProv}
          onChange={(e) => setDireccion(e.target.value)}
          isInvalid={errors.direccionProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.direccionProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="emailProv">
        <Form.Label> Email</Form.Label>
        <Form.Control
          type="text"
          value={emailProv}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={errors.emailProv}
        />
        <Form.Control.Feedback type="invalid">
          {errors.emailProv}
        </Form.Control.Feedback>
      </Form.Group>
      <Col md="6" xs="12">
                <Form.Group control="estado">
                    <Form.Label> Estado del proveedor</Form.Label>
                        <Select options={listOption} defaultValue={selectEst} onChange={estadoChanges} ></Select>
                </Form.Group>
            </Col>
      <Button variant="primary mt-2 " type="submit">
        Editar Proveedor
      </Button>
    </Form>
  )
}
