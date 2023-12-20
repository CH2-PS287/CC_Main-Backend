import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as argon from 'argon2';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    const data = await this.authService.signIn(signInDto);
    return {
      error: false,
      message: 'success',
      result: data,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    let transactionResult;
    try {
      transactionResult = await this.prisma.$transaction(async (prisma) => {
        const hashedPassword = await argon.hash(signUpDto.password);

        // Create user within the transaction
        const user = await prisma.user.create({
          data: {
            email: signUpDto.email,
            password: hashedPassword,
          },
        });

        await prisma.userData.create({
          data: {
            full_name: signUpDto.full_name,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });

        return {
          error: false,
          message: 'User Created',
        };
      });

      // If all operations within the transaction are successful, commit the transaction
      return transactionResult;
    } catch (e) {
      // If any operation fails, the transaction will be rolled back
      throw e;
    }
  }
}
