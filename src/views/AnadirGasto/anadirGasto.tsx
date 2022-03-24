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

    return <Form campos={campos} boton="Añadir gasto" />
}
export default AnadirGasto
