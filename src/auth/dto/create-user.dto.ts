import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'El nombre es requerido'})
    name: string;

    @IsEmail({}, {message: 'El correo electrónico no es válido'})
    @IsNotEmpty({message: 'El correo electrónico es requerido'})
    email: string;

    @IsString({message: 'La contraseña debe ser un texto'})
    @MinLength(6, {message: 'La contraseña debe tener al menos 6 caracteres'})
    @MaxLength(50, {message: 'La contraseña debe tener menos de 50 caracteres'})
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña debe tener una mayúscula, una minúscula y un número'
    })
    password: string;
}


