import { CycleTime } from '@prisma/client';
import {
  IsDateString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserFoodDto {
  @IsOptional()
  @IsDateString()
  timestamp: Date;

  amount: number;

  @IsNotEmpty()
  @IsEnum(CycleTime)
  cycleTime: CycleTime;

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
