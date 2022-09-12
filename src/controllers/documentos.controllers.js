import { Document } from 'mongoose';
import Documento from '../models/documentos'

export const CreateDocumento = async (req, res) => {
    
    const {Titulo, Autor, ISBN, Genero, descripcion, ISSN} = req.body

    const newDocumento = new Documento({Titulo, Autor, ISBN, Genero, descripcion, ISSN});

    const documentoSaved = await newDocumento.save()

    res.status(201).json(documentoSaved)
}

export const getDocumento = async (req, res) => {
    const documentos = await Documento.find();
    res.json(documentos)
    
}

export const getDocumentoById = async (req, res) => {
    const documentos = await Documento.findById(req.params.documentosId); 
    res.status(200).json(documentos)
}

export const updateDocumentoById = async (req, res) => {
    const updatedDocumentos = await Documento.findByIdAndUpdate(req.params.documentosId, req.body, {
        new: true
       })
    res.status(200).json(updatedDocumentos)
}

export const deleteDocumentoById = async (req, res) => {
    const {documentosId} = req.params;
    await Documento.findByIdAndDelete(documentosId)
    res.status(204).json()
};