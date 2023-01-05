import React from 'react'
import { Link } from 'react-router-dom'
import ReporteForm from '../../components/forms/Reportes/ReporteForm'

export default function Reporte() {
  return (
    <div>
      <h3 className="alert alert-info mt-4 mr-auto">
        {" "}
        Reportes{" "}
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-primary float-right mr-4 btn-volver"
          >
            Home
          </button>
        </Link>
      </h3>
      <ReporteForm></ReporteForm>
    </div>
  )
}
