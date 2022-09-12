import { Schema, model } from 'mongoose'

const documentosSchema = new Schema({
    Titulo: String,
    Autor: String,
    ISBN: String,
    Genero: String,
    descripcion: String,
    ISSN: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Documento', documentosSchema);