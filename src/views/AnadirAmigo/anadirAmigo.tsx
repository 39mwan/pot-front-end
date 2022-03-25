import React from 'react'
import FriendForm from '../../components/layout/Main/Form/FriendForm'
import type { FieldsProps } from 'types/fields'

function AnadirAmigo() {
    const campos: FieldsProps[] = [
        { nombre: 'Nombre', tipo: 'text' },
        { nombre: 'Apellidos', tipo: 'text' },
    ]
    const field_input: string[] = ['name', 'surname']

    return (
        <FriendForm
            campos={campos}
            url="hola"
            input_names={field_input}
            boton="Añadir amigo/a"
        />
    )
}

export default AnadirAmigo
