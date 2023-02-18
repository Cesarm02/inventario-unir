import axios from 'axios';
import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";
import { useNavigate } from 'react-router';
import Select from 'react-select'
import { CATEGORIA_ENDPOINT } from '../../../Helpers/endpoints';

export default function AgregarCategoriaForm({errors, onSubmitCallback}) {
 
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");
    const history = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ categoria, descripcion, estado});

        const data = {};
        data.nombre= categoria;
        data.descripcion= descripcion;
        data.estado=estado.estado.value;
        axios.post(CATEGORIA_ENDPOINT, data).then(response => {
            history("/categorias");
        }).catch(e => {
            console.log(e);
        })

    }

    const listOption = 
    [
        { label : "ACTIVO", value : "ACTIVO"}, 
        { label : "INACTIVO", value : "INACTIVO"}
    ];
  
    const estadoChanges = (estado) => {
        setEstado({estado});
      };
  
  return (
   
    <Form onSubmit={submitForm}>

        <Form.Group control=    "categoria">
            <Form.Label> Nombre categoria</Form.Label>
            <Form.Control 
                type="text" 
                value={categoria}
                onChange={e => setCategoria(e.target.value )}
                placeholder="Nombre de la categoria"
                isInvalid={errors.categoria}
            />
            <Form.Control.Feedback type="invalid">
                    {errors.categoria}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group control="descripcion">
            <Form.Label> Descripción</Form.Label>
            <Form.Control 
                type="text" 
                value={descripcion}
                onChange={e => setDescripcion(e.target.value )}
                placeholder="Descripción"
                isInvalid={errors.descripcion}
            />
            <Form.Control.Feedback type="invalid">
                    {errors.descripcion}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group control="estado">
        <Form.Label> Estado del producto</Form.Label>
        <Select
            options={listOption} onChange={estadoChanges} />
        </Form.Group>

        <Button variant="primary mt-2 " type="submit">
            Crear categoria
        </Button>
    </Form>
  )
}
