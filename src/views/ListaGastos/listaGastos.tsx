import React from 'react'
import Marco from '../../components/layout/Main/Marco/Marco'
import type { MarcoFields } from 'types/marco'

function ListaGastos() {
    const listaMarcos: MarcoFields[] = [
        {
            nombre: 'Sonia Zhang',
            precio: 30,
            descripcion: 'taxi',
            fecha: new Date('2022-11-12').toLocaleDateString('es-ES'),
        },
        {
            nombre: 'Sonia  Zhang',
            precio: 30,
            descripcion: 'taxi',
            fecha: new Date('2022-11-12').toLocaleDateString('es-ES'),
        },
        {
            nombre: 'Sonia  Zhang',
            precio: 30,
            descripcion: 'taxi',
            fecha: new Date('12-11-2022').toLocaleDateString('es-ES'),
        },
    ]

    return (
        <div>
            <Marco listaMarcos={listaMarcos} />
        </div>
    )
}

export default ListaGastos
