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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserWeightsService } from './user_weights.service';
import { UserFoodsService } from './user_foods.service';
import { UserExercisesService } from './user_exercises.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly userWeightsService: UserWeightsService,
    private readonly userFoodsService: UserFoodsService,
    private readonly userExercisesService: UserExercisesService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(new JwtAuthGuard(['admin', 'user']))
  @Get('profile')
  getProfile(@Request() req: any) {
    const { id } = req.user;
    return this.usersService.findOne(id);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  // relations (weights)
  @Get(':userId/weights')
  getUserWeights(@Param('userId') userId: string) {
    return this.userWeightsService.findAll(userId);
  }

  @Post(':userId/weights')
  createUserWeight(
    @Param('userId') userId: string,
    @Body() createUserWeightDto: any,
  ) {
    return this.userWeightsService.create(userId, createUserWeightDto);
  }

  @Get(':userId/weights/:id')
  getUserWeight(@Param('id') id: string) {
    return this.userWeightsService.findOne(id);
  }

  @Patch(':userId/weights/:id')
  updateUserWeight(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserWeightDto: any,
  ) {
    return this.userWeightsService.update(id, updateUserWeightDto);
  }

  @Delete(':userId/weights/:id')
  removeUserWeight(@Param('id') id: string) {
    return this.userWeightsService.remove(id);
  }

  // relations (foods)
  @Get(':userId/foods')
  getUserFoods(@Param('userId') userId: string) {
    return this.userFoodsService.findAll(userId);
  }

  @Post(':userId/foods')
  createUserFood(
    @Param('userId') userId: string,
    @Body() createUserFoodDto: any,
  ) {
    return this.userFoodsService.create(userId, createUserFoodDto);
  }

  @Get(':userId/foods/:id')
  getUserFood(@Param('id') id: string) {
    return this.userFoodsService.findOne(id);
  }

  @Patch(':userId/foods/:id')
  updateUserFood(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserFoodDto: any,
  ) {
    return this.userFoodsService.update(id, updateUserFoodDto);
  }

  @Delete(':userId/foods/:id')
  removeUserFood(@Param('id') id: string) {
    return this.userFoodsService.remove(id);
  }

  // relations (exercises)
  @Get(':userId/exercises')
  getUserExercises(@Param('userId') userId: string) {
    return this.userExercisesService.findAll(userId);
  }

  @Post(':userId/exercises')
  createUserExercise(
    @Param('userId') userId: string,
    @Body() createUserExerciseDto: any,
  ) {
    return this.userExercisesService.create(userId, createUserExerciseDto);
  }

  @Get(':userId/exercises/:id')
  getUserExercise(@Param('id') id: string) {
    return this.userExercisesService.findOne(id);
  }

  @Patch(':userId/exercises/:id')
  updateUserExercise(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserExerciseDto: any,
  ) {
    return this.userExercisesService.update(id, updateUserExerciseDto);
  }

  @Delete(':userId/exercises/:id')
  removeUserExercise(@Param('id') id: string) {
    return this.userExercisesService.remove(id);
  }
}
