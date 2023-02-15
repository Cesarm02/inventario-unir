import React, {useEffect, useState} from 'react'
import { Container, Row, Card, Col, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import SignupForm from '../../components/forms/SignupForm'
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'
import {loginUser, registerUser} from "../../actions/authActions"

export default function Signin() {

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const history = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      history("/");
    }
  });

  const register = ({email, password, firstName, lastName}) => {
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

    dispatch(registerUser({email, password, firstName, lastName}))
      .then(response => {
        //Logear el usuario
        dispatch(loginUser({email, password}))
      })
      .catch(error => {
          setErrors({registerError : error.response.data.mensaje})
      });
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
          <Card body>
            
          {errors.registerError && <Alert variant="danger">{errors.registerError}</Alert>}

            <h3> Crear cuenta</h3><hr></hr>
            <SignupForm errors={errors} onSubmitCallback={register}></SignupForm>
            <div className="mt-4">
              <Link to={"/signin"}>Ya tienes una cuenta? Inicia sesión aquí</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>    
  )
}
