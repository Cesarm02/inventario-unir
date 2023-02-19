import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BotonVis({id}) {
    const [numero, setNumero] = useState(id);
    
return (
    <div>
        <Link to={`/proveedores/`+numero}>
            <button type="button" className="btn btn-primary mr-2">
            visualizar
            </button>
        </Link>
    </div>
) 
}


