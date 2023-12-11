import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserFoodDto } from './dto/create-user-food.dto';

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

  async findAll() {
    return this.prisma.userFood.findMany({
      include: {
        user: true,
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

  async remove(id: string) {
    return this.prisma.userFood.delete({
      where: {
        id: id,
      },
    });
  }
}
