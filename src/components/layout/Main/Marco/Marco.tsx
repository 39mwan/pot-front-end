import React, { useEffect, useState } from 'react'
import './Marco.css'
import type { friendProps } from 'types/friendProps'

import type { MarcoFields, ListaMarcos } from 'types/marco'

export default function ListaMarco(propsPrincipal: ListaMarcos) {
    interface idProp {
        id: number
    }

    //friendList from server
    const [friendsList, setFriendsList] = useState<friendProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/api/v1/friend')
            const body = await result.json()
            if (body != null) setFriendsList(body)
        }
        fetchData()
    }, [])

    function ReturnFriendName(idProp: idProp) {
        const friend = friendsList.find(
            (element) => element.id === idProp.id
        ) as friendProps
        return (
            <>
                {' '}
                <span>
                    {' '}
                    {friend.name} {friend.surname}
                </span>
            </>
        )
    }

    function Marco(props: MarcoFields) {
        return (
            <div className="gasto">
                <div className="precioynombre">
                    <h3 className="labelprecio">{props.amount}</h3>
                    <h3>
                        {' '}
                        <ReturnFriendName id={props.friend} />{' '}
                    </h3>
                </div>
                <h3>{props.description}</h3>
                <h3>{props.date}</h3>
            </div>
        )
    }

    return (
        <>
            {propsPrincipal.listaMarcos.map((marco: MarcoFields) => (
                <Marco
                    key={Math.random()}
                    friend={marco.friend}
                    amount={marco.amount}
                    description={marco.description}
                    date={marco.date}
                />
            ))}
        </>
    )
}
