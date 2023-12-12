import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserExerciseDto } from './dto/create-user-exercise.dto';
import { UpdateUserExerciseDto } from './dto/update-user-exercise.dto';

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

  async findAll(userId: string) {
    return this.prisma.userExercise.findMany({
      where: {
        userId: userId,
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

  async update(id: string, updateUserExerciseDto: UpdateUserExerciseDto) {
    return this.prisma.userExercise.update({
      where: {
        id: id,
      },
      data: {
        timestamp: updateUserExerciseDto.timestamp,
        amount: updateUserExerciseDto.amount,
        exerciseId: updateUserExerciseDto.exerciseId,
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
