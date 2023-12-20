-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_data" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "gender" "Gender" NOT NULL,
    "recommended_calorie" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "calorie" DOUBLE PRECISION NOT NULL,
    "mineral" DOUBLE PRECISION NOT NULL,
    "fiber" DOUBLE PRECISION NOT NULL,
    "air" DOUBLE PRECISION NOT NULL,
    "energi" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "lemak" DOUBLE PRECISION NOT NULL,
    "abu" DOUBLE PRECISION NOT NULL,
    "karbohidrat" DOUBLE PRECISION NOT NULL,
    "serat_total" DOUBLE PRECISION NOT NULL,
    "gula_total" DOUBLE PRECISION NOT NULL,
    "kalsium_ca" DOUBLE PRECISION NOT NULL,
    "besi_fe" DOUBLE PRECISION NOT NULL,
    "magnesium_mg" DOUBLE PRECISION NOT NULL,
    "fosfor_p" DOUBLE PRECISION NOT NULL,
    "kalium_k" DOUBLE PRECISION NOT NULL,
    "natrium_na" DOUBLE PRECISION NOT NULL,
    "seng_zn" DOUBLE PRECISION NOT NULL,
    "tembaga_cu" DOUBLE PRECISION NOT NULL,
    "mangan_mn" DOUBLE PRECISION NOT NULL,
    "selenium_se" DOUBLE PRECISION NOT NULL,
    "vitamin_c" DOUBLE PRECISION NOT NULL,
    "tiamina_b1" DOUBLE PRECISION NOT NULL,
    "riboflavin_b2" DOUBLE PRECISION NOT NULL,
    "niasin" DOUBLE PRECISION NOT NULL,
    "pantotenat_b5" DOUBLE PRECISION NOT NULL,
    "vitamin_b6" DOUBLE PRECISION NOT NULL,
    "folat_total_b9" DOUBLE PRECISION NOT NULL,
    "kolina" DOUBLE PRECISION NOT NULL,
    "vitamin_b12" DOUBLE PRECISION NOT NULL,
    "vitamin_a_iu" DOUBLE PRECISION NOT NULL,
    "vitamin_a_rae" DOUBLE PRECISION NOT NULL,
    "retinol" DOUBLE PRECISION NOT NULL,
    "a_karoten" DOUBLE PRECISION NOT NULL,
    "b_karoten" DOUBLE PRECISION NOT NULL,
    "b_kriptosantin" DOUBLE PRECISION NOT NULL,
    "likopen" DOUBLE PRECISION NOT NULL,
    "zeaksantin_lutein" DOUBLE PRECISION NOT NULL,
    "vitamin_e" DOUBLE PRECISION NOT NULL,
    "vitamin_d" DOUBLE PRECISION NOT NULL,
    "vitamin_d_iu" DOUBLE PRECISION NOT NULL,
    "vitamin_k" DOUBLE PRECISION NOT NULL,
    "lemak_jenuh" DOUBLE PRECISION NOT NULL,
    "lemak_tunggal" DOUBLE PRECISION NOT NULL,
    "lemak_ganda" DOUBLE PRECISION NOT NULL,
    "kolesterol" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "calorie" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_foods" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,

    CONSTRAINT "user_foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_exercises" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,

    CONSTRAINT "user_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_weights" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "user_weights_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_userId_key" ON "user_data"("userId");

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_foods" ADD CONSTRAINT "user_foods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_foods" ADD CONSTRAINT "user_foods_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_exercises" ADD CONSTRAINT "user_exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_exercises" ADD CONSTRAINT "user_exercises_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_weights" ADD CONSTRAINT "user_weights_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
