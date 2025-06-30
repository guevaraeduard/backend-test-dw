import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.entity";
@Schema({ _id: false })
export class ShippingAddress {
    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    zipCode: string;

    @Prop({ required: true })
    phone: string;
}

@Schema({ _id: false })
export class OrderItem {
    @Prop({ type: Types.ObjectId, required: true })
    id: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    quantity: number;
    @Prop({ required: true })
    image: string;
}

@Schema()
export class Pedido extends Document {
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: User.name,
        index: true,
    })
    user: string;
    @Prop({ type: ShippingAddress, required: true })
    shippingAddress: ShippingAddress;
    @Prop({ type: [OrderItem], required: true })
    items: OrderItem[];
    @Prop({ required: true })
    subtotal: number;
    @Prop({ required: true })
    savings: number;
    @Prop({ required: true })
    shippingCost: number;
    @Prop({ required: true })
    taxes: number;
    @Prop({ required: true })
    total: number;
    @Prop({
        default: Date.now
    })
    createdAt: Date;
    @Prop({
        default: Date.now
    })
    updatedAt: Date;
    @Prop({
        default: 'Entregado'
    })
    status: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);

