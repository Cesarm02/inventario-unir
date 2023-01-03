import React, {useEffect, useState} from 'react'
import AgregarCategoriaForm from '../../components/forms/Categoria/AgregarCategoriaForm'
import { Container, Row, Card, Col } from 'react-bootstrap'
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'
import { Link } from 'react-router-dom'

export default function AgregarCategoria() {

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Se monte el componente (iniciar)
  });

  const addCategoria = ({categoria, descripcion}) => {
    const errors = {};
    setErrors(errors);

    if(validator.isEmpty(categoria)){
        errors.categoria = "La categoria es obligatoria";
    }

    if(validator.isEmpty(descripcion)){
        errors.descripcion = "La descripción es obligatoria";
    }

    if(!isObjectEmpty(errors)){
        setErrors(errors);
        return;
    }
    //llamar nuestra función
}

  return (
    <div>
    <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Categorias{" "}
        <Link to="/categorias">
          <button type="button" className="btn btn-outline-primary float-right mr-4 btn-volver">
            Atras
          </button>
        </Link>
    </h3>
    <Container className="mt-5">
            <Row>
                <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
                <Card body>
                    <h3> Crear Categoria</h3><hr></hr>
                    <AgregarCategoriaForm errors={errors} onSubmitCallback={addCategoria}></AgregarCategoriaForm>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    

  )
}
