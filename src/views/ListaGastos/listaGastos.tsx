import React, { useState, useEffect } from 'react'
import Marco from '../../components/layout/Main/Marco/Marco'
import type { MarcoFields } from 'types/marco'

function ListaGastos() {
    const [data, setData] = useState<MarcoFields[]>([])

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/expenses')
            .then((response) => {
                return response.json()
            })
            .then((data1) => setData(data1))
    })

    if (data) {
        console.log(data[0])
    }

    return (
        <div>
            <Marco listaMarcos={data} />
        </div>
    )
}

export default ListaGastos
