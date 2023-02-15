import React, {useEffect, useState} from 'react'
import { Container, Row, Card, Col, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import SigninForm from '../../components/forms/SigninForm'
import { useDispatch, useSelector } from 'react-redux' 
import validator from 'validator'
import { isObjectEmpty } from '../../Helpers/Helpers'
import { loginUser } from '../../actions/authActions'

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

    //llamar nuestra función loggin que vamos a crear en actions
      dispatch(loginUser({email, password}))
        .then(response => {

        })
        .catch(err => {
          setErrors({auth: "No se puede iniciar sesión con esas credenciales"});
        });
        
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md ={{ span:8, offset: 2}} lg={{span:6, offset:3}}>
          <Card body>

            {errors.auth && <Alert variant="danger">{errors.auth}</Alert>}

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
