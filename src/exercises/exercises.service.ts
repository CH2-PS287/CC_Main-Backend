import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExerciseDto: CreateExerciseDto) {
    return this.prisma.exercise.create({
      data: {
        calorie: createExerciseDto.calorie,
        activity: createExerciseDto.activity,
        label: createExerciseDto.label,
      },
    });
  }

  async findAll() {
    return this.prisma.exercise.findMany();
  }

  async findOne(id: string) {
    return this.prisma.exercise.findUniqueOrThrow({ where: { id: id } });
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    return this.prisma.exercise.update({
      where: { id: id },
      data: {
        calorie: updateExerciseDto.calorie,
        activity: updateExerciseDto.activity,
        label: updateExerciseDto.label,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.exercise.delete({ where: { id: id } });
  }
}
