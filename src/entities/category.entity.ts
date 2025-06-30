import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Category extends Document {
    @Prop({
        index:true,
        unique: true,
    })
    name: string;
    @Prop({
        unique: true,
        index:true
    })
    slug: string;
    @Prop()
    description: string;
    @Prop()
    image: string;
    @Prop()
    order: number;
    @Prop({
        default: true
    })
    active: boolean;
    @Prop({
        default: Date.now
    })
    createdAt: Date;
    @Prop({
        default: Date.now
    })
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

