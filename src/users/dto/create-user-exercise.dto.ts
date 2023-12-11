import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserExerciseDto {
  @IsOptional()
  @IsDateString()
  timestamp: Date;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  exerciseId: string;
}

/**
 * model UserExercise {
  id String @id @default(uuid())
  timestamp DateTime
  amount Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id])
  userId String

  exercise Exercise @relation(fields: [exerciseId], references: [id])
  exerciseId String

  @@map("user_exercises")
}
 */
