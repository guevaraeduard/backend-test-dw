

import { CanActivate, ExecutionContext, Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
@Injectable()
export class AuthGuardP implements CanActivate {
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization
    
    if (!authHeader) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const user = req.user as User;

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return true;

  }
}
