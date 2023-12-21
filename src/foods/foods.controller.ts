import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  async findAll() {
    const data = await this.foodsService.findAll();
    console.log(data);
    return {
      error: false,
      message: 'success',
      result: data,
    };
  }

  @UseGuards(JwtGuard)
  @Get('/recomendation')
  async recomendation(@Request() req: any) {
    const { user } = req;

    const data = await this.foodsService.recommendation(user.id);

    return {
      error: false,
      message: 'success',
      result: data,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(id, updateFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsService.remove(id);
  }
}
