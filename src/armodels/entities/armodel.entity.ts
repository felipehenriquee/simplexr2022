import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose"

export type ArmodelDocument = Armodel & Document;

@Schema()
export class Armodel {
    @Prop()
    link: string
    @Prop()
    nome: string
    @Prop()
    idModel: string
    @Prop()
    clique: number
    @Prop()
    ultimoClique: Date
}

export const ArmodelSchema = SchemaFactory.createForClass(Armodel);
