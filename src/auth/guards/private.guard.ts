import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PrivateGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const userObj = request.user as { id: string; role: string } | undefined;
    const userId = request.params.userId as string;

    if (!userId || !userObj) {
      return false;
    }

    return userObj.id === userId;
  }
}
