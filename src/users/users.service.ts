import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserProfileDto } from './dto/update-user-profile.dto';

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
      throw e;
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
    return this.prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        userData: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUniqueOrThrow({
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

  async updateProfile(id: string, userProfileDto: UserProfileDto) {
    // Create user data within the transaction
    const { userData } = await this.findOne(id);

    // const birthDate = new Date(userProfileDto.birth_date);

    const data = await this.prisma.userData.update({
      where: {
        id: userData?.id,
      },
      data: {
        // birth_date: birthDate,
        age: userProfileDto.age,
        gender: userProfileDto.gender,
        height: userProfileDto.height,
        weight: userProfileDto.weight,
        recommended_calorie: userProfileDto.recommended_calorie,
      },
    });
    return data;
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
