import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserWeightDto } from './dto/create-user-weight.dto';

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

  async findAll() {
    return this.prisma.userWeight.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.userWeight.findUnique({
      where: {
        id: id,
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
