import React, {useEffect, useState} from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/forms/SignupForm'
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'

export default function Signin() {

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Se monte el componente (iniciar)
  });

  const login = ({email, password, firstName, lastName}) => {
    const errors = {};
    setErrors(errors);

    if(!validator.isEmail(email)){
      errors.email = "El correo electronico es incorrecto";
    }

    if(!validator.isLength(password, {min:8, max:30})){
      errors.password = "La contraseña debe tener mas de 8 caracteres y menos de 30";
    }

    if(validator.isEmpty(firstName)){
        errors.firstName = "El nombre es obligatorio";
    }

    if(validator.isEmpty(lastName)){
        errors.lastName = "El apellido es obligatorio";
    }

    if(!isObjectEmpty(errors)){
      setErrors(errors);
      return;
    }

    // dispatch(loginUser({email, password}))
    //   .then(response => {
        
    //   })
    //   .catch(error => {

    //   });
    //llamar nuestra función loggin que vamos a crear en actions

  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
          <Card body>
            <h3> Crear cuenta</h3><hr></hr>
            <SignupForm errors={errors} onSubmitCallback={login}></SignupForm>
            <div className="mt-4">
              <Link to={"/signin"}>Ya tienes una cuenta? Inicia sesión aquí</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>    
  )
}
