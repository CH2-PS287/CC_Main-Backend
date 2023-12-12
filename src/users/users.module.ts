import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserWeightsService } from './user_weights.service';
import { UserFoodsService } from './user_foods.service';
import { UserExercisesService } from './user_exercises.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UserWeightsService,
    UserFoodsService,
    UserExercisesService,
  ],
})
export class UsersModule {}
