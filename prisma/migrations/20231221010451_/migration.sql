/*
  Warnings:

  - Added the required column `sessionTime` to the `user_foods` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SessionTime" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- AlterTable
ALTER TABLE "user_foods" ADD COLUMN     "sessionTime" "SessionTime" NOT NULL;
