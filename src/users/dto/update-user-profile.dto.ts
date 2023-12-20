import { Gender } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class UserProfileDto {
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsNumber()
  recommended_calorie: number;
}
