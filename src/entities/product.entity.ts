import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Category } from "./category.entity";
@Schema()
export class Product extends Document {
    @Prop({
        index:true,
    })
    name: string;
    @Prop({
        unique: true,
        index:true
    })
    sku: string;
    @Prop({
        default: null
    })
    description_short: string;
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: Category.name,
        index: true,
    })
    category: string;
    @Prop({
        default: null
    })
    description: string;
    @Prop()
    price: number;
    @Prop()
    price_original: number;
    @Prop()
    stock: number;
    @Prop({
        default: null
    })
    warranty: string;
    @Prop({
        default: null
    })
    weight: number;
    @Prop({
        default: null
    })
    dimensions: string;
    @Prop({
        default: null
    })
    characteristics: string[];
    @Prop()
    image: string;
    @Prop({
        default: null
    })
    tags: string[];
    @Prop({
        default: true
    })
    active: boolean;
    @Prop({
        default: false
    })
    outstanding: boolean;
    @Prop({
        default: true
    })
    status: boolean;
    @Prop({
        default: Date.now
    })
    createdAt: Date;
    @Prop({
        default: Date.now
    })
    updatedAt: Date;
    @Prop({
        default: null
    })
    slug: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

