import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsNumber()
  calorie: number;

  @IsNotEmpty()
  @IsNumber()
  fiber: number;

  @IsNotEmpty()
  @IsNumber()
  mineral: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  protein: number;
}

/**
 * model Food {
  id String @id @default(uuid())
  name String
  calorie Float
  mineral Float
  protein Float
  fiber Float

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userFood UserFood[]
}
 */
