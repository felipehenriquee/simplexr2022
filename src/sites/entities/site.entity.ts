import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type SiteDocument = Site & Document;

@Schema()
export class Site {
    @Prop()
    nome: string
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Armodel'})
    arModel: mongoose.Schema.Types.ObjectId
    @Prop()
    url: string
    @Prop()
    tipo: string 
    @Prop()
    clique: number
    @Prop()
    ultimoClique: Date
}

export const SiteSchema = SchemaFactory.createForClass(Site);