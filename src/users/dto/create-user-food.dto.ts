import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserFoodDto {
  @IsOptional()
  @IsDateString()
  timestamp: Date;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  foodId: string;
}

/**
 * model UserFood {
  id String @id @default(uuid())
  timestamp DateTime
  amount Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id])
  userId String

  food Food @relation(fields: [foodId], references: [id])
  foodId String

  @@map("user_foods")
}
 */
