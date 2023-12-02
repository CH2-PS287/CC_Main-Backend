import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodDto: CreateFoodDto) {
    return this.prisma.food.create({
      data: {
        calorie: createFoodDto.calorie,
        fiber: createFoodDto.fiber,
        mineral: createFoodDto.mineral,
        name: createFoodDto.name,
        protein: createFoodDto.protein,
      },
    });
  }

  async findAll() {
    return this.prisma.food.findMany();
  }

  async findOne(id: string) {
    return this.prisma.food.findUniqueOrThrow({ where: { id: id } });
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    return this.prisma.food.update({
      where: { id: id },
      data: {
        calorie: updateFoodDto.calorie,
        fiber: updateFoodDto.fiber,
        mineral: updateFoodDto.mineral,
        name: updateFoodDto.name,
        protein: updateFoodDto.protein,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.food.delete({ where: { id: id } });
  }
}
