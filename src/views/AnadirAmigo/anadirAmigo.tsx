import React from 'react'
import Form from '../../components/layout/Main/Form/Form'
import type { FieldsProps } from 'types/fields'

function AnadirAmigo() {
    const campos: FieldsProps[] = [
        { nombre: 'Nombre', tipo: 'text' },
        { nombre: 'Apellidos', tipo: 'text' },
    ]

    return <Form campos={campos} boton="Añadir amigo/a" />
}

export default AnadirAmigo
