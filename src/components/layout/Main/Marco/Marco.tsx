import React from 'react'
import './Marco.css'

import type { MarcoFields, ListaMarcos } from 'types/marco'

export default function ListaMarco(propsPrincipal: ListaMarcos) {
    function Marco(props: MarcoFields) {
        return (
            <div className="gasto">
                <div className="precioynombre">
                    <h3 className="labelprecio">{props.precio}</h3>
                    <h3>{props.nombre}</h3>
                </div>
                <h3>{props.descripcion}</h3>
                <h3>{props.fecha}</h3>
            </div>
        )
    }

    return (
        <>
            {propsPrincipal.listaMarcos.map((marco: MarcoFields) => (
                <>
                    <Marco
                        nombre={marco.nombre}
                        precio={marco.precio}
                        descripcion={marco.descripcion}
                        fecha={marco.fecha}
                    />{' '}
                </>
            ))}
        </>
    )
}
