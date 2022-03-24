import React from 'react'
import './Marco.css'

interface MarcoName {
    nombre: string
}

export default function Marco(props: MarcoName) {
    return (
        <div className="gasto">
            <h3>{props.nombre}</h3>
        </div>
    )
}
