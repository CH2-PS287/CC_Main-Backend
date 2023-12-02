import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await argon.verify(user.password, pass))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
