import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Boton({id}) {
    const [numero, setNumero] = useState(id);
return (
    <div>
        <Link to={`/proveedores/editar/`+numero}>
            <button type="button" className="btn btn-info mr-2">
            Editar
            </button>
        </Link>
    </div>
) 
}


