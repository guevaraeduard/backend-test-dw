import { IsNotEmpty,  IsString, IsOptional, IsMongoId, IsNumber, IsArray } from "class-validator";

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
    description: string;

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

    @IsOptional()
    price_original: number;

    @IsNumber()
    @IsNotEmpty({message: 'El stock es requerido'})
    stock: number;
    
    @IsOptional()
    warranty: string;

    @IsOptional()
    weight: number;

    @IsOptional()
    dimensions: string; 

    @IsOptional()
    @IsArray({message: 'Las características deben ser un array'})
    characteristics: string[];

    @IsOptional()
    @IsArray({message: 'Los tags deben ser un array'})
    tags: string[];

    @IsOptional()
    active: boolean;

    @IsOptional()
    outstanding: boolean;

    @IsOptional()
    status: boolean;       
}
