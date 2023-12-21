/*
  Warnings:

  - You are about to drop the column `sessionTime` on the `user_foods` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_data" ADD COLUMN     "age" INTEGER;

-- AlterTable
ALTER TABLE "user_foods" DROP COLUMN "sessionTime";

-- DropEnum
DROP TYPE "SessionTime";
