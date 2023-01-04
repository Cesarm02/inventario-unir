import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";

export default function AgregarCategoriaForm({errors, onSubmitCallback}) {
 
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ categoria, descripcion});
    }

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

        <Button variant="primary mt-2 " type="submit">
            Crear categoria
        </Button>
    </Form>
  )
}
