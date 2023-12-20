/*
  Warnings:

  - You are about to drop the column `name` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `exercises` table. All the data in the column will be lost.
  - Added the required column `activity` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "name",
DROP COLUMN "unit",
ADD COLUMN     "activity" TEXT NOT NULL,
ADD COLUMN     "label" INTEGER NOT NULL;
