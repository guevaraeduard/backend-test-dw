import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop({
        index:true
    })
    name: string;
    @Prop({
        unique: true,
        index:true
    })
    email: string;
    @Prop()
    password: string;
    @Prop({
        default: Date.now
    })
    createdAt: Date;
    @Prop({
        default: Date.now
    })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Hook para operaciones de guardado
UserSchema.pre('save', function(next) {
    if (this.email) {
        this.email = this.email.toLowerCase().trim();
    }
    next();
});

// Hook para operaciones de actualización
UserSchema.pre('findOneAndUpdate', function(next) {
    const update = this.getUpdate() as any;
    if (update.email) {
        update.email = update.email.toLowerCase().trim();
    }
    next();
});


