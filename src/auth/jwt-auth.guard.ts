import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly requiredRoles: string[]) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // // Access the user object through `context.switchToHttp().getRequestx().user`
    // const user = context.switchToHttp().getRequest().user;
    // console.log(user);
    // if (!user) {
    //   return false;
    // }

    // // Check if the user has at least one of the required roles
    // const hasRequiredRole = this.requiredRoles.some((role) =>
    //   user.roles.includes(role),
    // );

    // return super.canActivate(context) && hasRequiredRole;

    // call AuthGuard in order to ensure user is injected in request
    const baseGuardResult = await super.canActivate(context);
    if (!baseGuardResult) {
      // unsuccessful authentication return false
      return false;
    }

    // successfull authentication, user is injected
    const { user } = context.switchToHttp().getRequest();
    user.roles = 'user';
    const hasRequiredRole = this.requiredRoles.some((role) =>
      user.roles.includes(role),
    );

    // return super.canActivate(context) && hasRequiredRole;
    console.log(hasRequiredRole);
    return hasRequiredRole;
  }
}
