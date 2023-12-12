import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as argon from 'argon2';
import { jwtConstants } from './constants';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (user && (await argon.verify(user.password, signInDto.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      const token = await this.signToken({
        userId: user.id,
        email: user.email,
      });

      return token;
    }
    throw new UnauthorizedException();
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await argon.verify(user.password, pass))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { id: user.id, email: user.email };
    return {
      jwt: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }

  async signToken(data: { userId: string; email: string }) {
    const payload = { id: data.userId, email: data.email };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '30d',
      secret: jwtConstants.secret,
    });

    return {
      access_token: token,
    };
  }
}
