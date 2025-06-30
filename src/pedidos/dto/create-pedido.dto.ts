import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class ShippingAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}

export class OrderItemDto {
  @IsString()
  @IsNotEmpty()
  id: string; // MongoDB ObjectId as string

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  image: string;
}

export class CreatePedidoDto {
  @IsNotEmpty({message: 'El usuario es requerido'})
  @IsMongoId({message: 'Usuario no valido'})
  user: string; // MongoDB ObjectId as string

  @ValidateNested()
  @Type(() => ShippingAddressDto)
  shippingAddress: ShippingAddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNumber()
  subtotal: number;

  @IsNumber()
  savings: number;

  @IsNumber()
  shippingCost: number;

  @IsNumber()
  taxes: number;

  @IsNumber()
  total: number;
}
