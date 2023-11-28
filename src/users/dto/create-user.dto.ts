import { Gender } from '@prisma/client';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  full_name: string;

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

/**
 * model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt


  userData UserData?
  userFood UserFood[]
  userExcerise UserExcerise[]
  userWeight UserWeight[]
}

model UserData {
  id Int @id @default(autoincrement())
  full_name String
	birth_date DateTime
	height Float
	weight Float
	gender Gender
	recommended_calorie Int

  user User @relation(fields: [userId], references: [id])
  userId Int @unique
}
 */
