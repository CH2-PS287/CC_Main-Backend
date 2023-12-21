import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsNotEmpty()
  @IsString()
  activity: string;

  @IsNotEmpty()
  @IsNumber()
  calorie: number;

  @IsNotEmpty()
  @IsNumber()
  label: number;
}
