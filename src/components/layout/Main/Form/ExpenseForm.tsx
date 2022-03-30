import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2'
import './Form.css'
import type { ArrayFields } from 'types/fields'
import { friendProps } from '../../../../types/friendProps'

function ExpenseForm(propsPrincipal: ArrayFields) {
    const [friendId, setFriendId] = useState('2')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    //friendList from server
    const [friendsList, setFriendsList] = useState<friendProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/api/v1/friend')
            const body = await result.json()
            setFriendsList(body)
        }
        fetchData()
    }, [])

    const onFriendIdChange = (e: React.FormEvent<HTMLSelectElement>) => {
        setFriendId(e.currentTarget.value)
    }

    const onAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
        setAmount(e.currentTarget.value)
    }

    const onDescriptionChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const data = { friend: friendId, amount, description, date }
        const requestOptions = {
            method: 'POST',
            requestMode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        console.log(data)

        fetch('http://localhost:8080/api/v1/expenses', requestOptions)
            .then((response) => {
                if (response.ok) {
                    swalAlert('Gasto añadido correctamente')
                    response.json()
                } else alert('Ha ocurrido un error inténtalo de nuevo')
            })
            .then((response) => console.log(response))
            .then((res) => console.log(res))

        console.log(JSON.stringify(data))
    }

    console.log(friendsList)

    return (
        <>
            <form id="text">
                <div>
                    <label>De:</label>
                    <select onChange={onFriendIdChange}>
                        {friendsList.map((f: friendProps) => (
                            <option value={f.id} key={f.id}>
                                {f.name} {f.surname}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Cantidad</label>
                    <input type="number" onChange={onAmountChange} />
                </div>

                <div>
                    <label>Descripcion</label>
                    <input type="text" onChange={onDescriptionChange} />
                </div>

                <div>
                    <label>Fecha</label>
                    <input type="date" onChange={onDateChange} />
                </div>

                <div className="boton">
                    <input
                        type="submit"
                        value={propsPrincipal.boton}
                        id="submit"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </>
    )
}
function swalAlert(message: string) {
    swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadido correctamente',
        showConfirmButton: false,
        timer: 1500,
    })
}

export default ExpenseForm
