import axios from 'axios';
import React, {useState, useEffect, useParams} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap";
import { CLIENTEID_ENDPOINT, CLIENTES_ENDPOINT } from "../../../Helpers/endpoints";
import Select from 'react-select'
import { useNavigate } from "react-router";
import { toast } from "react-toastify"

export default function EditarClienteForm({ errors, onSubmitCallback, id }) {

  const [clienteActual, setClienteActual] = useState({});
  const [documento, setDocumentoCliente] = useState("");
  const [nombre, setNombreCliente] = useState("");
  const [apellido, setApellidoCliente] = useState("");
  const [tipoDocumento, setTipoDocumentoCliente] = useState("");
  const [estado, setEstadoCliente] = useState("ACTIVO");
  const [telefono, setTelefonoCliente] = useState("");
  const [direccion, setDireccionCliente] = useState("");
  const [email, setEmailCliente] = useState("");

  const [listOptionCate, setOptionCate] = useState([]);
  const [selectCat, setSelectCat] = useState([]);
  const [selectEst, setSelectEst] = useState([]);
  var aux2 = {};
  const history = useNavigate();

  useEffect( () => {
    axios.get(CLIENTEID_ENDPOINT+id).then(response => {
        setClienteActual(response.data);
        setNombreCliente(response.data.nombre)
        setDocumentoCliente(response.data.documento)
        setApellidoCliente(response.data.apellido)
        setTipoDocumentoCliente(response.data.tipoDocumento)
        setEstadoCliente(response.data.estado)
        setTelefonoCliente(response.data.telefono)
        setDireccionCliente(response.data.direccion)
        setEmailCliente(response.data.email)

        //Imprimir el cliente
       // const aux = {value: response.data.categoria.id, label:response.data.categoria.nombre};
       // setSelectCat(aux);
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
    axios.get(CLIENTEID_ENDPOINT).then(response => {
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
    onSubmitCallback({
      documento,
      nombre,
      apellido,
      tipoDocumento,
      estado,
      telefono,
      email,
      direccion
    });
 

  const data = {};
  data.id=id;
  data.documento = documento;
  data.nombre = nombre;
  data.apellido = apellido;
  data.tipoDocumento = tipoDocumento;
  data.estado = estado;
  data.telefono = telefono;
  data.direccion=direccion;
  data.email=email;
  console.log( data);
////////////API PUT
  axios.put(CLIENTES_ENDPOINT, data).then(response => {
    toast.success("Cliente modificado correctamente", {
      position: toast.POSITION.TOP_CENTER
    })

    history("/clientes")
  }).catch(e => {
    console.log(e);
  })
};

const changeNombre= (nombre) => {
    let nombreCliente = nombre.target.value;
    setNombreCliente(nombreCliente);
}

const changeDocumento= (documento) => {
    let documentoCliente = documento.target.value;
    setDocumentoCliente(documentoCliente);
}

const changeApellido= (apellido) => {
  let apellidoCliente = apellido.target.value;
  setApellidoCliente(apellidoCliente);
}

const changeTipoDocumento= (tipoDocumento) => {
  let tipoDocumentoCliente = tipoDocumento.target.value;
  setTipoDocumentoCliente(tipoDocumentoCliente);
}

  const estadoChanges = (estado) => {
    setEstadoCliente({estado});
  };

  const changeTelefono= (telefono) => {
    let telefonoCliente = telefono.target.value;
    setTelefonoCliente(telefonoCliente);
  }

  const changeDireccion= (direccion) => {
    let direccionCliente = direccion.target.value;
    setDireccionCliente(direccionCliente);
  }

  const changeEmail= (email) => {
    let emailCliente = email.target.value;
    setEmailCliente(emailCliente);
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
              onChange={changeDocumento}
              isInvalid={errors.documento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.documento}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6" xs="12">
          <Form.Group control="tipoDocumento">
            <Form.Label> Tipo de documento</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Cedula de ciudadania</option>
              <option value="2">Tarjeta de identidad</option>
              <option value="3">Cedula de extranjeria</option>
            </Form.Select>
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
              onChange={changeNombre}
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
              onChange={changeApellido}
              isInvalid={errors.apellido}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          type="number"
          value={telefono}
          onChange={changeTelefono}
          placeholder="Telefono o Celular"
          isInvalid={errors.telefono}
        />
        <Form.Control.Feedback type="invalid">
          {errors.telefono}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="email">
        <Form.Label> Email</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={changeEmail}
          placeholder="Email"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group control="direccion">
        <Form.Label> Direccion</Form.Label>
        <Form.Control
          type="text"
          value={direccion}
          onChange={changeDireccion}
          placeholder="direccion"
          isInvalid={errors.direccion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.direccion}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary mt-2 " type="submit">
        Editar cliente
      </Button>
    </Form>
  );
}