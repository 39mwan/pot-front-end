import React from 'react'
import './Marco.css'

import type { MarcoFields, ListaMarcos } from 'types/marco'

export default function ListaMarco(propsPrincipal: ListaMarcos) {
    function Marco(props: MarcoFields) {
        return (
            <div className="gasto">
                <div className="precioynombre">
                    <h3 className="labelprecio">{props.amount}</h3>
                    <h3>{props.friend}</h3>
                </div>
                <h3>{props.description}</h3>
                <h3>{props.date}</h3>
            </div>
        )
    }

    return (
        <>
            {propsPrincipal.listaMarcos.map((marco: MarcoFields) => (
                <>
                    <Marco
                        friend={marco.friend}
                        amount={marco.amount}
                        description={marco.description}
                        date={marco.date}
                    />{' '}
                </>
            ))}
        </>
    )
}
