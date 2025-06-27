import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuardP } from '../guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';

export function Auth() {
  return applyDecorators(
    UseGuards(AuthGuard(), AuthGuardP)
  );
}
