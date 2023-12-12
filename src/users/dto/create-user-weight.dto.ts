import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateUserWeightDto {
  @IsOptional()
  @IsDateString()
  timestamp: Date;

  @IsNotEmpty()
  @IsNumber()
  weight: number;
}

/**
 * model UserWeight {
  id String @id @default(uuid())
  timestamp DateTime
  weight Float
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id])
  userId String

  @@map("user_weights")
}
 */
