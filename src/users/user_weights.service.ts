import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserWeightDto } from './dto/create-user-weight.dto';
import { UpdateUserWeightDto } from './dto/update-user-weight.dto';

@Injectable()
export class UserWeightsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createUserWeightDto: CreateUserWeightDto) {
    return this.prisma.userWeight.create({
      data: {
        timestamp: createUserWeightDto.timestamp,
        weight: createUserWeightDto.weight,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.userWeight.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.userWeight.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateUserWeightDto: UpdateUserWeightDto) {
    return this.prisma.userWeight.update({
      where: {
        id: id,
      },
      data: {
        timestamp: updateUserWeightDto.timestamp,
        weight: updateUserWeightDto.weight,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.userWeight.delete({
      where: {
        id: id,
      },
    });
  }
}
