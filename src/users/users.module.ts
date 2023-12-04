import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { LocalStrategy } from '../auth/local.strategy';

@Module({
  imports: [PassportModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService, LocalStrategy],
})
export class UsersModule {}
