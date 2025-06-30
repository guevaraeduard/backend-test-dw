import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interface/jwt-payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(createAuthDto: CreateUserDto) {
    const { email, password, ...userData } = createAuthDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new BadRequestException('Ya existe un usuario con este email');
    }
    const newUser = await this.userModel.create({
      ...userData,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    return {
      user: userWithoutPassword,
      access_token: this.getJwtToken({ id: newUser._id as string, email: newUser.email })
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password, type = 'admin' } = loginDto;
    const user = await this.userModel.findOne({ email, role: type });
    if (!user) {
      throw new BadRequestException('Usuario o contraseña incorrectos');
    }

    const isPasswordValid =  bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Usuario o contraseña incorrectos');
    }

    const { password: _, ...userWithoutPassword } = user.toObject();
    return {
      user: userWithoutPassword,
      access_token: this.getJwtToken({ id: user._id as string, email: user.email })
    };
  }


  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async getUsers() {

    const users = await this.userModel.find({role: 'user'});
    
    return users
  }

}
