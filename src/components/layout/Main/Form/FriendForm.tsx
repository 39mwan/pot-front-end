import React, { useState } from 'react'
import './Form.css'
import type { FieldsProps, ArrayFields } from 'types/fields'
import { useLocation } from 'react-router-dom'

/*    function FormField(props: FieldsProps) {
        return (
            <div>
                <label>{props.nombre}</label>
                <input type={props.tipo}  onChange={onChangeFunction(props.nombre)}/>
            </div>
        )
    }*/

/*    function click() {
        const t = (document.getElementById('submit') as HTMLInputElement).value
        console.log(t)
    }*/

/*    return (
        <form id="text">
            {propsPrincipal.campos.map((field: FieldsProps) => (
                <>
                    {' '}
                    <FormField nombre={field.nombre} tipo={field.tipo} />{' '}
                </>
            ))}

            <div className="boton">
                <input
                    type="submit"
                    value={propsPrincipal.boton}
                    id="submit"
                    onClick={click}
                />
            </div>
        </form>
    )*/

function FriendForm(propsPrincipal: ArrayFields) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onSurnameChange = (e: React.FormEvent<HTMLInputElement>) =>
        setSurname(e.currentTarget.value)

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const data = { name, surname }
        const requestOptions = {
            method: 'POST',
            RequesMode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
        fetch('http://localhost:8080/api/v1/friend', requestOptions)
            .then((response) => {
                if (response.ok) alert('Añadido correctamente')
                else alert('Ha ocurrido un error por favor inténtalo de nuevo')
                response.json()
            })
            .then((res) => console.log(res))
        console.log(JSON.stringify(data))
    }
    return (
        <>
            <form id="text" action="http://localhost:8080/api/v1/friend">
                <div>
                    <label>Nombre</label>
                    <input type="text" onChange={onNameChange} />
                </div>

                <div>
                    <label>Apellidos</label>
                    <input type="text" onChange={onSurnameChange} />
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

export default FriendForm
