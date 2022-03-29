import React, { useState, useEffect } from 'react'
import Marco from '../../components/layout/Main/Marco/Marco'
import type { MarcoFields } from 'types/marco'

function ExpenseList() {
    const [data, setData] = useState<MarcoFields[]>([])
    const [friends, setFriends] = useState<MarcoFields[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/api/v1/expenses')
            const body = await result.json()
            setData(body)
        }
        fetchData()
    }, [])

    console.log(data[0])

    return (
        <div>
            <Marco listaMarcos={data} />
        </div>
    )
}

export default ExpenseList
