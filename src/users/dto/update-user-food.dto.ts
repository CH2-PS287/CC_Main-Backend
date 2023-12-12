import { PartialType } from '@nestjs/mapped-types';
import { CreateUserFoodDto } from './create-user-food.dto';

export class UpdateUserFoodDto extends PartialType(CreateUserFoodDto) {}
