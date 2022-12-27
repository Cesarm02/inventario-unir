import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Layouts/Navegacion";
import Sigin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <>
          <Navegacion></Navegacion>   
      </>
      <Container>
        <Routes> 
            <Route exact path="/" element = {<Home/>}></Route>
            <Route exact path="/signin" element={<Sigin></Sigin>} ></Route>
            <Route path="*" element = {<NotFound/>}></Route>
        </Routes>
      </Container>
      
    </BrowserRouter>
    
  );
}

export default App;
