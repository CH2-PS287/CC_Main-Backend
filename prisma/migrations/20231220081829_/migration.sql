/*
  Warnings:

  - Added the required column `a_karoten` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `abu` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `air` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b_karoten` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b_kriptosantin` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `besi_fe` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energi` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folat_total_b9` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosfor_p` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gula_total` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kalium_k` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kalsium_ca` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `karbohidrat` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kolesterol` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kolina` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lemak` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lemak_ganda` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lemak_jenuh` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lemak_tunggal` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likopen` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `magnesium_mg` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mangan_mn` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natrium_na` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `niasin` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pantotenat_b5` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `retinol` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `riboflavin_b2` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selenium_se` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seng_zn` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serat_total` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tembaga_cu` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiamina_b1` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_a_iu` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_a_rae` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_b12` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_b6` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_c` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_d` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_d_iu` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_e` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vitamin_k` to the `foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zeaksantin_lutein` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foods" ADD COLUMN     "a_karoten" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "abu" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "air" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "b_karoten" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "b_kriptosantin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "besi_fe" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energi" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "folat_total_b9" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosfor_p" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "gula_total" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "kalium_k" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "kalsium_ca" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "karbohidrat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "kolesterol" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "kolina" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "lemak" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lemak_ganda" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lemak_jenuh" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lemak_tunggal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "likopen" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "magnesium_mg" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "mangan_mn" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "natrium_na" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "niasin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pantotenat_b5" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "retinol" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "riboflavin_b2" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "selenium_se" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "seng_zn" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "serat_total" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tembaga_cu" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tiamina_b1" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_a_iu" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_a_rae" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_b12" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_b6" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_c" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_d" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_d_iu" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_e" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vitamin_k" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zeaksantin_lutein" DOUBLE PRECISION NOT NULL;
