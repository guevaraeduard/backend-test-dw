
import { IsNotEmpty,  IsString, IsOptional } from "class-validator";

export class CreateCategoryDto {
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'El nombre es requerido'})
    name: string;

    @IsOptional()
    description: string;

    @IsString({message: 'La imagen debe ser un texto valido'})
    @IsNotEmpty({message: 'La imagen es requerida'})
    image: string;

    @IsOptional()
    order: number;

    @IsOptional()
    status: boolean;
}
