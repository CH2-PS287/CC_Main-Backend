-- AlterTable
ALTER TABLE "user_data" ALTER COLUMN "birth_date" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "recommended_calorie" DROP NOT NULL;