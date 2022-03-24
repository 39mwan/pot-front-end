import React from 'react'
import './MarcoBalance.css'

import type { balanceProps, ArrayBalance } from 'types/balanceProps'

export default function ListaBalance(propsPrincipal: ArrayBalance) {
    function MarcoBalance(props: balanceProps) {
        return (
            <div className="balance">
                <h3 className="nombre">{props.nombre}</h3>
                <h3 className="balanceTag">{props.balance}</h3>
            </div>
        )
    }

    return (
        <>
            {propsPrincipal.campos.map((balance: balanceProps) => (
                <>
                    <MarcoBalance
                        nombre={balance.nombre}
                        balance={balance.balance}
                    />{' '}
                </>
            ))}
        </>
    )
}
