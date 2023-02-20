import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { CLIENTES_ENDPOINT} from "../../../Helpers/endpoints";
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from "react-router";
import Select from "react-select";

export default function AgregarCliente({ errors, onSubmitCallback }) {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [estado, setEstado] = useState("ACTIVO");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
   const listadocumento= [
    
    { label : "CEDULA", value : "CC"}, 
    { label : "NIT", value : "NIT"},
    { label : "PASAPORTE", value : "PT"},
    { label : "TARJETA IDENTIDAD", value : "TI"}
  ]

  const history = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({
      documento,
      nombre,
      apellido,
      tipoDocumento,
      estado,
      telefono,
      direccion,
      email,
    });

    const data = {};
    data.documento = documento;
    data.nombre = nombre;
    data.apellido = apellido;
    data.tipoDocumento = tipoDocumento.opcion.value;
    data.estado = estado;
    data.telefono = telefono;
    data.direccion=direccion;
    data.email=email;
    console.log( data);

      axios.post(CLIENTES_ENDPOINT, data).then(response => {
        toast.success("Cliente creado correctamente", {
          position: toast.POSITION.TOP_CENTER
        })
    
        history("/clientes")
      }).catch(e => {
        console.log(e);
      })
  
  };
  const llenardocumento= (opcion)=>{
    setTipoDocumento({opcion})
    console.log({opcion});
  }

  return (
    <Form onSubmit={submitForm}>
      <Row>
        <Col md="6" xs="12">
          <Form.Group control="documento">
            <Form.Label> Documento</Form.Label>
            <Form.Control
              type="number"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Documento"
              isInvalid={errors.documento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.documento}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md="6" xs="12">
          <Form.Group control="tipoDocumento">
            <Form.Label> Tipo de Documento</Form.Label>
            <Select options={listadocumento} onChange={llenardocumento}>


            </Select>
            <Form.Control.Feedback type="invalid">
              {errors.tipoDocumento}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md="6" xs="12">
          <Form.Group control="nombre">
            <Form.Label> Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              isInvalid={errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="apellido">
            <Form.Label> Apellido</Form.Label>
            <Form.Control
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Apellido"
              isInvalid={errors.apellido}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="direccion">
            <Form.Label> Direccion</Form.Label>
            <Form.Control
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Direccion"
              isInvalid={errors.direccion}
            />
            <Form.Control.Feedback type="invalid">
              {errors.direccion}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="email">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Telefono o Celular"
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Agregar Cliente
      </Button>
    </Form>
  );

}
