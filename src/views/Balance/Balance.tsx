import React from 'react'
import type { balanceProps } from '../../types/balanceProps'
import MarcoBalance from '../../components/layout/Main/MarcoBalance/MarcoBalance'

function Balance() {
    const listaMarcos: balanceProps[] = [
        {
            nombre: 'Sonia Zhang',
            balance: 30,
        },
        {
            nombre: 'Sonia ',
            balance: 31,
        },
        {
            nombre: 'Sonia  Zhang',
            balance: 42,
        },
    ]

    return (
        <div>
            <MarcoBalance campos={listaMarcos} />
        </div>
    )
}

export default Balance
