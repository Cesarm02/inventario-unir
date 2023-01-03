import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";

export default function EditarCategoriaForm({errors, onSubmitCallback, id}) {
    
 
    const [categoria, setCategoria] = useState(id);
    const [descripcion, setDescripcion] = useState(id);

    const submitForm = (e) => {
        e.preventDefault();
        onSubmitCallback({ categoria, descripcion});
    }

  return (
   
    <Form onSubmit={submitForm}>

        <Form.Group control="categoria">
            <Form.Label> Nombre categoria</Form.Label>
            <Form.Control 
                type="text" 
                value={categoria}
                onChange={e => setCategoria(e.target.value )}
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
                isInvalid={errors.descripcion}
            />
            <Form.Control.Feedback type="invalid">
                    {errors.descripcion}
            </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary mt-2 " type="submit">
            Editar Categoria
        </Button>
    </Form>
  )
}
