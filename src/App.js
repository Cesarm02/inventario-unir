import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Layouts/Navegacion";
import Sigin from "./pages/Login/Signin";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/General/Home";
import NotFound from "./pages/General/NotFound";
import Categorias from "./pages/Categorias/Categorias"
import Productos from "./pages/Productos/Productos";
import ListaProductos from "./pages/Categorias/ListaProductos";
import Clientes from "./pages/Personas/Clientes";
import Proveedores from "./pages/Personas/Proveedores";
import store from "./store";
import { Provider } from "react-redux";
import Footer from "./pages/General/Footer";
import EditProducto from "./pages/Productos/EditProducto";
import AgregarCategoria from "./pages/Categorias/AgregarCategoria";
import EditarCategoria from "./pages/Categorias/EditarCategoria";
import AgregarProductos from "./pages/Productos/AgregarProductos";
import AgregarCliente from "./pages/Personas/AgregarCliente";
import EditarCliente from "./pages/Personas/EditarCliente";
import AgregarProveedor from "./pages/Personas/AgregarProveedor";
import EditarProveedor from "./pages/Personas/EditarProveedor";
import Inventario from "./pages/Inventario/Inventario";
import VerProveedores from "./pages/Personas/VerProveedores";
import Reporte from "./pages/Reportes/Reporte";
import Venta from "./pages/Venta/Venta"
import Compra from "./pages/Venta/Compra"
import Cotizacion from "./pages/Venta/Cotizacion";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
            <Navegacion></Navegacion>   
        </>
        <Container >
          <Routes> 
              <Route exact path="/" element = {<Home/>}></Route>
              <Route exact path="/signin" element={<Sigin/>} ></Route>
              <Route exact path="/signup" element={<SignUp/>} ></Route>
              <Route exact path="/categorias" element={<Categorias/>} ></Route>
              <Route exact path="/categorias/agregar" element={<AgregarCategoria/>} ></Route>
              <Route exact path="/categorias/:id" element={<ListaProductos/>} ></Route>
              <Route exact path="/categorias/editar/:id" element={<EditarCategoria/>} ></Route>
              <Route exact path="/productos" element={<Productos/>} ></Route>
              <Route exact path="/productos/agregar" element={<AgregarProductos/>} ></Route>
              <Route exact path="/productos/editar/:id" element={<EditProducto/>} ></Route>
              <Route exact path="/clientes" element={<Clientes/>} ></Route>
              <Route exact path="/clientes/agregar" element={<AgregarCliente/>} ></Route>
              <Route exact path="/clientes/editar/:id" element={<EditarCliente/>} ></Route>
              <Route exact path="/proveedores" element={<Proveedores/>} ></Route>
              <Route exact path="/proveedores/:id" element={<VerProveedores/>} ></Route>
              <Route exact path="/proveedores/agregar" element={<AgregarProveedor/>} ></Route>
              <Route exact path="/proveedores/editar/:id" element={<EditarProveedor/>} ></Route>
              <Route exact path="/inventario" element={<Inventario/>} ></Route>
              <Route exact path="/ventas" element={<Venta/>} ></Route>
              <Route exact path="/compras" element={<Compra/>} ></Route>
              <Route exact path="/cotizacion" element={<Cotizacion/>} ></Route>
              <Route exact path="/reportes" element={<Reporte/>} ></Route>
              <Route path="*" element = {<NotFound/>}></Route>
          </Routes>
        </Container>
        <>
          <Footer></Footer>
        </>
      </BrowserRouter>
      
    </Provider>
    
  );
}

export default App;
