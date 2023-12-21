-- CreateEnum
CREATE TYPE "CycleTime" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- AlterTable
ALTER TABLE "user_foods" ADD COLUMN     "cycleTime" "CycleTime";

-- DropEnum
DROP TYPE "SessionTime";
