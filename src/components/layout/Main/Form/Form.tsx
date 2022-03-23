import React from 'react'
import './Form.css'
import type { FieldsProps, ArrayFields } from 'types/fields'

function Form(propsPrincipal: ArrayFields) {
    function FormField(props: FieldsProps) {
        return (
            <div>
                <label>{props.nombre}</label>
                <input type={props.tipo} />
            </div>
        )
    }

    return (
        <form action="">
            {propsPrincipal.campos.map((field: FieldsProps) => (
                <>
                    {' '}
                    <FormField nombre={field.nombre} tipo={field.tipo} />{' '}
                </>
            ))}

            <div className="boton">
                <input type="submit" value={propsPrincipal.boton} id="submit" />
            </div>
        </form>
    )
}

export default Form
