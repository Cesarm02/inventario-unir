import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Form } from "react-bootstrap";
import { PROVEEDORID_ENDPOINT } from "../../../Helpers/endpoints";
export default function VerProveedorForm({ id }) {
  const [estadoProv, setEstado] = useState("");
    const [nombreProv, setNombre] = useState("");
    const [telefonoProv, setTelefono] = useState("");
    const [descripcionProv, setDescripcion] = useState("");
    const [documentoProv, setDocumento] = useState("");
    const [direccionProv, setDireccion] = useState("");
    const [emailProv, setEmail] = useState("");
    const [proveedorActual, setProveedorActual] = useState({});
    useEffect( () => {
      axios.get(PROVEEDORID_ENDPOINT+id).then(response => {
          const data = response.data;
          console.log(data);
          setProveedorActual(data);
          setNombre(data.nombre);
          setTelefono(data.telefono);
          setDescripcion(data.descripcion);
          setDocumento(data.documento);
          setDireccion(data.direccion);
          setEmail(data.email);
          setEstado(data.estado);
          
      }).catch(e => {
          console.error(e);
      })
  },[]);
  return (
    <Form>
      <Form.Group control="nombre">
        <Form.Label> Nombre </Form.Label>
        <Form.Control
          disabled
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          value={nombreProv}
        />
      </Form.Group>
      <Form.Group control="descripcion">
        <Form.Label> Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          disabled
          type="text"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcionProv}
        />
      </Form.Group>
      <Form.Group control="estado">
        <Form.Label> Estado</Form.Label>
        <Form.Control
          type="text"
          disabled
          onChange={(e) => setEstado(e.target.value)}
          value={estadoProv}
        />
      </Form.Group>
      <Form.Group control="telefono">
        <Form.Label> Telefono</Form.Label>
        <Form.Control
          disabled
          type="number"
          value={telefonoProv}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </Form.Group>
      <Form.Group control="documento">
        <Form.Label> Nit</Form.Label>
        <Form.Control
          disabled
          type="number"
          value={documentoProv}
          onChange={(e) => setDocumento(e.target.value)}
        />
      </Form.Group>
      <Form.Group control="direccion">
        <Form.Label> Direccion</Form.Label>
        <Form.Control
          disabled
          type="text"
          value={direccionProv}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </Form.Group>
      <Form.Group control="email">
        <Form.Label> Email</Form.Label>
        <Form.Control
          disabled
          type="text"
          value={emailProv}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
