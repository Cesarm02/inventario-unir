import React from "react";
import { Link } from "react-router-dom";
import "../../Css/NotFound.css";

export default function NotFound() {
  return (
    <div className="box-text">
      <h3 className="notFound">404</h3>
      <p className="p">
        <Link to="/">
            La pagina que buscas no esta disponible
        </Link>
      </p>
    </div>
  );
}
