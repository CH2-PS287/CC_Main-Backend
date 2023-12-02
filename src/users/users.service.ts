import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { error } from 'ps-logger';

import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    let transactionResult;

    try {
      transactionResult = await this.prisma.$transaction(async (prisma) => {
        const hashedPassword = await argon.hash(createUserDto.password);

        // Create user within the transaction
        const user = await prisma.user.create({
          data: {
            email: createUserDto.email,
            password: hashedPassword,
          },
        });

        // Create user data within the transaction
        const birthDate = new Date(createUserDto.birth_date);

        const userData = await prisma.userData.create({
          data: {
            birth_date: birthDate,
            full_name: createUserDto.full_name,
            gender: createUserDto.gender,
            height: createUserDto.height,
            weight: createUserDto.weight,
            recommended_calorie: createUserDto.recommended_calorie,
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        });

        return {
          user,
          userData,
        };
      });

      // If all operations within the transaction are successful, commit the transaction
      return transactionResult;
    } catch (e) {
      // If any operation fails, the transaction will be rolled back
      error(`Transaction failed: ${e}`);

      throw new Error('Transaction failed');
    }
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        userData: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        userData: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        userData: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: updateUserDto.email,
        password: updateUserDto.password,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
