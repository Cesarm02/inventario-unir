import React, {useEffect, useState} from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SigninForm from '../../components/forms/SigninForm'
import { useDispatch } from 'react-redux' 
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'
import { loginUser } from '../../actions/authActions'

export default function Signin() {

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Se monte el componente (iniciar)
  });

  const login = ({email, password}) => {
    const errors = {};
    setErrors(errors);

    if(!validator.isEmail(email)){
      errors.email = "El correo electronico es incorrecto";
    }

    if(validator.isEmpty(password)){
      errors.password = "La contraseña no puede ir vacia";
    }

    if(!isObjectEmpty(errors)){
      setErrors(errors);
      return;
    }

    dispatch(loginUser({email, password}))
      .then(response => {

      })
      .catch(error => {

      });
    //llamar nuestra función loggin que vamos a crear en actions

  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
          <Card body>
            <h3> Iniciar sesión</h3><hr></hr>
            <SigninForm errors={errors} onSubmitCallback={login}></SigninForm>
            <div className="mt-4">
              <Link to={"/signup"}>Registrate aquí</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>    
  )
}
