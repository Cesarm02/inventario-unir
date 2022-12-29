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
import Clientes from "./pages/Personas/Clientes";
import Proveedores from "./pages/Personas/Proveedores";
import store from "./store";
import { Provider } from "react-redux";
import Footer from "./pages/General/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
            <Navegacion></Navegacion>   
        </>
        <Container>
          <Routes> 
              <Route exact path="/" element = {<Home/>}></Route>
              <Route exact path="/signin" element={<Sigin/>} ></Route>
              <Route exact path="/signup" element={<SignUp/>} ></Route>
              <Route exact path="/categorias" element={<Categorias/>} ></Route>
              <Route exact path="/productos" element={<Productos/>} ></Route>
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
