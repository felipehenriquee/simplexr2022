import mongoose from "mongoose"

export class CreateSiteDto {
    arModel: mongoose.Schema.Types.ObjectId
    nome: string 
    url: string
    tipo: string
    clique: number
    ultimoClique: Date
}
