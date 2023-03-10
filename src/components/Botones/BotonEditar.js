import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Boton({ id, ruta }) {
  const [numero, setNumero] = useState(id);
  return (
    <Link to={ruta + numero}>
      <button type="button" className="btn btn-info mr-2">
        Editar
      </button>
    </Link>
  );
}
