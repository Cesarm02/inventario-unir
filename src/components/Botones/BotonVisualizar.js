import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BotonVisualizar({ id, ruta }) {
  const [numero, setNumero] = useState(id);
  return (
    <Link to={ruta + numero}>
      <button type="button" className="btn btn-light mr-2">
        Visualizar
      </button>
    </Link>
  );
}
