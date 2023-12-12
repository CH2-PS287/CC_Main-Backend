import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserFoodDto } from './dto/create-user-food.dto';
import { UpdateUserFoodDto } from './dto/update-user-food.dto';

@Injectable()
export class UserFoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createUserFoodDto: CreateUserFoodDto) {
    return this.prisma.userFood.create({
      data: {
        timestamp: createUserFoodDto.timestamp,
        amount: createUserFoodDto.amount,
        food: {
          connect: {
            id: createUserFoodDto.foodId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.userFood.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.userFood.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateUserFoodDto: UpdateUserFoodDto) {
    return this.prisma.userFood.update({
      where: {
        id: id,
      },
      data: {
        timestamp: updateUserFoodDto.timestamp,
        amount: updateUserFoodDto.amount,
        foodId: updateUserFoodDto.foodId,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.userFood.delete({
      where: {
        id: id,
      },
    });
  }
}
