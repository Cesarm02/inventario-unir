import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function Navegacion() {
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={NavLink} to={'/'}>Inventario Unir</Navbar.Brand>
            <Navbar.Toggle aria-controls='main-menu'>

            </Navbar.Toggle>
            <Navbar.Collapse id="main-menu">
                <Nav className="mr-auto">
                    <NavDropdown title="Productos" id="menu-dropdown">
                        <NavDropdown.Item as={NavLink} to={'/categorias'}>Categorias</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={'/productos'}>Productos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Personas" id="menu-dropdown">
                        <NavDropdown.Item as={NavLink} to={'/clientes'}>Clientes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={'/proveedores'}>Proveedores</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tienda" id="menu-dropdown">
                        <NavDropdown.Item>Venta</NavDropdown.Item>
                        <NavDropdown.Item>Compra</NavDropdown.Item>
                        <NavDropdown.Item>Cotización</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Acciones" id="menu-dropdown">
                        <NavDropdown.Item>Inventario</NavDropdown.Item>
                        <NavDropdown.Item>Reportes</NavDropdown.Item>
                        <NavDropdown.Item>Ajustes</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Admin" id="menu-dropdown">
                        <NavDropdown.Item>Auditoria</NavDropdown.Item>
                        <NavDropdown.Item>Usuarios</NavDropdown.Item>
                        <NavDropdown.Item>Facturas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={'/signup'}>Crear Cuenta</Nav.Link>
                    <Nav.Link as={NavLink} to={'/signin'}>Iniciar sesion</Nav.Link>
                    <NavDropdown title="Cesar Mesa" id="menu-dropdown">
                        <NavDropdown.Item>Cerrar sesion</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
