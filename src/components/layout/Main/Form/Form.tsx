import React, { useState } from 'react'
import './Form.css'
import type { FieldsProps, ArrayFields } from 'types/fields'
import { useLocation } from 'react-router-dom'

function Form(propsPrincipal: ArrayFields) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const location = useLocation().pathname.toString()
    function FormField(props: FieldsProps) {
        return (
            <div>
                <label>{props.nombre}</label>
                <input type={props.tipo} id="input" />
            </div>
        )
    }
    function click() {
        const t = (document.getElementById('submit') as HTMLInputElement).value
        console.log(t)
    }
    return (
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
    )
}

export default Form
