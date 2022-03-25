import React from 'react'
import Form from '../../components/layout/Main/Form/Form'
import type { FieldsProps } from 'types/fields'

function AnadirAmigo() {
    const campos: FieldsProps[] = [
        { nombre: 'Nombre', tipo: 'text' },
        { nombre: 'Apellidos', tipo: 'text' },
    ]
    const field_input: string[] = ['name', 'surname']

    return (
        <Form
            campos={campos}
            url="hola"
            input_names={field_input}
            boton="Añadir amigo/a"
        />
    )
}

export default AnadirAmigo
