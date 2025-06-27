import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class LoginDto {
    @IsEmail({}, {message: 'El correo electrónico no es válido'})
    @IsNotEmpty({message: 'El correo electrónico es requerido'})
    email: string;

    @IsString({message: 'La contraseña debe ser un string valido'})
    @IsNotEmpty({message: 'La contraseña es requerida'})
    password: string;
}


