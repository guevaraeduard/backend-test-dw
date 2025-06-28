import { IsNotEmpty,  IsString, IsOptional, IsMongoId, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'El nombre es requerido'})
    name: string;

    @IsString({message: 'El sku debe ser un texto'})
    @IsNotEmpty({message: 'El sku es requerido'})
    sku: string;

    @IsString({message: 'La descripcion corta debe ser un texto valido'})
    @IsNotEmpty({message: 'La descripcion corta es requerida'})
    description_short: string;

    @IsOptional()
    description_large: string;

    @IsString({message: 'La categoria debe ser un texto valido'})
    @IsNotEmpty({message: 'La categoria es requerida'})
    @IsMongoId({message: 'La categoria no es valida'})
    category: string;

    @IsString({message: 'La imagen debe ser un texto valido'})
    @IsNotEmpty({message: 'La imagen es requerida'})
    image: string;

    @IsNumber()
    @IsNotEmpty({message: 'El precio es requerido'})
    price: number;

    @IsNumber()
    @IsNotEmpty({message: 'El precio original es requerido'})
    price_original: number;

    @IsNumber()
    @IsNotEmpty({message: 'El stock es requerido'})
    stok: number;
    
    @IsOptional()
    warranty: string;

    @IsOptional()
    weight: number;

    @IsOptional()
    dimensions: string; 

    @IsOptional()
    characteristics: string;

    @IsOptional()
    tags: string;

    @IsOptional()
    active: boolean;

    @IsOptional()
    outstanding: boolean;

    @IsOptional()
    status: boolean;       
}
