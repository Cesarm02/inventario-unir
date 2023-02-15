import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux' 
import { logOutUser } from "../../actions/authActions";

export default function Navegacion() {

  const loggedIn = useSelector(state => state.auth.loggedIn);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch(); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to={"/"}>
        Inventario Unir
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-menu"></Navbar.Toggle>
      <Navbar.Collapse id="main-menu">
        <Nav className="mr-auto">
        { !loggedIn ? (<React.Fragment>
             
          </React.Fragment>)
          :
            (<><NavDropdown title="Productos" id="menu-dropdown">
            <NavDropdown.Item as={NavLink} to={"/categorias"}>
              Categorias
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={"/productos"}>
              Productos
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Personas" id="menu-dropdown">
            <NavDropdown.Item as={NavLink} to={"/clientes"}>
              Clientes
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={"/proveedores"}>
              Proveedores
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tienda" id="menu-dropdown">
            <NavDropdown.Item as={NavLink} to={"/ventas"}>
              Venta
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={"/compras"}>
              Compra
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={"/cotizacion"}>
              Cotización
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Acciones" id="menu-dropdown">
            <NavDropdown.Item as={NavLink} to={"/inventario"}>
              Inventario
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to={"/reportes"}>
              Reportes
            </NavDropdown.Item>
          </NavDropdown>
          </>)
          }
        </Nav>
        <Nav>
          { !loggedIn ? (<React.Fragment>
              <Nav.Link as={NavLink} to={"/signup"}>
              Crear Cuenta
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/signin"}>
              Iniciar sesion
            </Nav.Link>
          </React.Fragment>)
          :
            (<NavDropdown title={user.sub} id="menu-dropdown">
              <NavDropdown.Item onClick={() => dispatch(logOutUser())}>
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>)
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
