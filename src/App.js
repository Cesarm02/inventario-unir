import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Layouts/Navegacion";
import Sigin from "./pages/Login/Signin";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/General/Home";
import NotFound from "./pages/General/NotFound";
import Categorias from "./pages/Productos/Categorias"
import Productos from "./pages/Productos/Productos";
import ListaProductos from "./pages/Productos/ListaProductos";
import Clientes from "./pages/Personas/Clientes";
import Proveedores from "./pages/Personas/Proveedores";
import store from "./store";
import { Provider } from "react-redux";
import Footer from "./pages/General/Footer";
import EditProducto from "./pages/Productos/EditProducto";
import AgregarCategoria from "./pages/Productos/AgregarCategoria";
import EditarCategoria from "./pages/Productos/EditarCategoria";

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
              <Route exact path="/productos/:id" element={<EditProducto/>} ></Route>
              <Route exact path="/clientes" element={<Clientes/>} ></Route>
              <Route exact path="/proveedores" element={<Proveedores/>} ></Route>
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
