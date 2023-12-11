import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserExerciseDto } from './dto/create-user-exercise.dto';

@Injectable()
export class UserExercisesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createUserExerciseDto: CreateUserExerciseDto) {
    return this.prisma.userExercise.create({
      data: {
        timestamp: createUserExerciseDto.timestamp,
        amount: createUserExerciseDto.amount,
        exercise: {
          connect: {
            id: createUserExerciseDto.exerciseId,
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
    return this.prisma.userExercise.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.userExercise.findUnique({
      where: {
        id: id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.userExercise.delete({
      where: {
        id: id,
      },
    });
  }
}
