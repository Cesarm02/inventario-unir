import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Form, Button} from "react-bootstrap";
import { useNavigate } from 'react-router';
import Select from 'react-select'
import { CATEGORIA_ENDPOINT } from '../../../Helpers/endpoints';

export default function EditarCategoriaForm({errors, onSubmitCallback, id}) {
    
    const listOption = 
    [
        { label : "ACTIVO", value : 1}, 
        { label : "INACTIVO", value : 0}
    ];   

    const estadoChanges = (estado) => {
        setEstado({estado});
    };

    const [categoriaActual, setCategoriaActual] = useState();

    useEffect(() => {
        axios.get(CATEGORIA_ENDPOINT+id).then(response => {
            setCategoriaActual(response.data);
            setNombre(response.data.nombre);
            setDescripcion(response.data.descripcion);
        }).catch(e => {
            console.log(e);
        })
    }, []);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");

    const history = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ nombre, descripcion, estado});
        const data = {};
        data.id = id;
        data.nombre= nombre;
        data.descripcion = descripcion;
        data.estado = estado.estado.value;

        axios.put(CATEGORIA_ENDPOINT, data).then(response => {
            history("/categorias/")
        }).catch(e => {
            console.log(e);
        })

    }

    const changeNombre = (nombre) => {
        let nombreCategoria= nombre.target.value;
        setNombre(nombreCategoria);
    }

    const changeDescripcion = (descripcion) => {
        let descripcionNueva = descripcion.target.value;
        setDescripcion(descripcionNueva);
    }

  return (
   
    <Form onSubmit={submitForm}>

        <Form.Group control="nombre">
            <Form.Label> Nombre categoria</Form.Label>
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
        <Form.Group control="descripcion">
            <Form.Label> Descripción</Form.Label>
            <Form.Control 
                type="text" 
                value={descripcion}
                onChange={changeDescripcion}
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
            Editar Categoria
        </Button>
    </Form>
  )
}
