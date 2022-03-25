import React from 'react'
import type { FieldsProps } from 'types/fields'
import Form from '../../components/layout/Main/Form/Form'

function AnadirGasto() {
    const campos: FieldsProps[] = [
        { nombre: 'De', tipo: 'text' },
        { nombre: 'Cantidad', tipo: 'number' },
        { nombre: 'Descripcion', tipo: 'text' },
        { nombre: 'Fecha', tipo: 'date' },
    ]
    const field_input: string[] = ['friend_id', 'amount', 'description', 'date']

    return (
        <Form
            campos={campos}
            input_names={field_input}
            url="localhost:8080/api/v1/expenses"
            boton="Añadir gasto"
        />
    )
}
export default AnadirGasto
