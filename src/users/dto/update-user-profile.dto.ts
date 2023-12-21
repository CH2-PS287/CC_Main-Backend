import { Gender } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class UserProfileDto {
  // @IsNotEmpty()
  // @IsDateString()
  // birth_date: Date;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  height: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  weight: number;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  recommended_calorie: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  age: number;
}
