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
import { UserProfileDto } from './dto/update-user-profile.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserWeightsService } from './user_weights.service';
import { UserFoodsService } from './user_foods.service';
import { UserExercisesService } from './user_exercises.service';
import { PrivateGuard } from 'src/auth/guards/private.guard';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

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

  @Get('profile')
  @UseGuards(new JwtAuthGuard(['admin', 'user']))
  getProfile(@Request() req: any) {
    const { id } = req.user;
    return this.usersService.findOne(id);
  }

  @Patch('profile')
  @UseGuards(JwtGuard)
  async updateProfile(
    @Body() userProfileDto: UserProfileDto,
    @Request() req: any,
  ) {
    const { id } = req.user;

    const data = await this.usersService.updateProfile(id, userProfileDto);
    return {
      error: false,
      message: 'User Updated',
      result: data,
    };
  }

  @Get()
  @UseGuards(JwtGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  // relations (weights)
  @Get(':userId/weights')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserWeights(@Param('userId') userId: string) {
    return this.userWeightsService.findAll(userId);
  }

  @Post(':userId/weights')
  @UseGuards(JwtGuard, PrivateGuard)
  createUserWeight(
    @Param('userId') userId: string,
    @Body() createUserWeightDto: any,
  ) {
    return this.userWeightsService.create(userId, createUserWeightDto);
  }

  @Get(':userId/weights/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserWeight(@Param('id') id: string) {
    return this.userWeightsService.findOne(id);
  }

  @Patch(':userId/weights/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  updateUserWeight(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserWeightDto: any,
  ) {
    return this.userWeightsService.update(id, updateUserWeightDto);
  }

  @Delete(':userId/weights/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  removeUserWeight(@Param('id') id: string) {
    return this.userWeightsService.remove(id);
  }

  // relations (foods)
  @Get(':userId/foods')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserFoods(@Param('userId') userId: string) {
    return this.userFoodsService.findAll(userId);
  }

  @Post(':userId/foods')
  @UseGuards(JwtGuard, PrivateGuard)
  createUserFood(
    @Param('userId') userId: string,
    @Body() createUserFoodDto: any,
  ) {
    return this.userFoodsService.create(userId, createUserFoodDto);
  }

  @Get(':userId/foods/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserFood(@Param('id') id: string) {
    return this.userFoodsService.findOne(id);
  }

  @Patch(':userId/foods/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  updateUserFood(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserFoodDto: any,
  ) {
    return this.userFoodsService.update(id, updateUserFoodDto);
  }

  @Delete(':userId/foods/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  removeUserFood(@Param('id') id: string) {
    return this.userFoodsService.remove(id);
  }

  // relations (exercises)
  @Get(':userId/exercises')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserExercises(@Param('userId') userId: string) {
    return this.userExercisesService.findAll(userId);
  }

  @Post(':userId/exercises')
  @UseGuards(JwtGuard, PrivateGuard)
  createUserExercise(
    @Param('userId') userId: string,
    @Body() createUserExerciseDto: any,
  ) {
    return this.userExercisesService.create(userId, createUserExerciseDto);
  }

  @Get(':userId/exercises/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  getUserExercise(@Param('id') id: string) {
    return this.userExercisesService.findOne(id);
  }

  @Patch(':userId/exercises/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  updateUserExercise(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() updateUserExerciseDto: any,
  ) {
    return this.userExercisesService.update(id, updateUserExerciseDto);
  }

  @Delete(':userId/exercises/:id')
  @UseGuards(JwtGuard, PrivateGuard)
  removeUserExercise(@Param('id') id: string) {
    return this.userExercisesService.remove(id);
  }
}
