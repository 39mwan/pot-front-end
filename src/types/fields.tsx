export interface FieldsProps {
    nombre: string
    tipo: string
}

export interface ArrayFields {
    campos: FieldsProps[]
    input_names: string[]
    url: string
    boton: string
}
