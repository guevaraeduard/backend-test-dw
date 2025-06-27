import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { Auth } from './decorators/auth.decorator';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../entities/user.entity';
import { Request } from 'express';
  

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('validate-token')
  @Auth()
  validateToken(@GetUser() user: User, @Req() req: Request) {
    const { password, ...userWithoutPassword } = user.toObject();
    const token = req.headers.authorization?.split(' ')[1];
    return {
      user: userWithoutPassword,
      token
    };
  }

}
