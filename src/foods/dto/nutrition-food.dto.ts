import { IsNotEmpty, IsNumber } from 'class-validator';

export class NutritionFoodDto {
  @IsNotEmpty()
  @IsNumber()
  protein: number;

  @IsNotEmpty()
  @IsNumber()
  air: number;

  @IsNotEmpty()
  @IsNumber()
  energi: number;

  @IsNotEmpty()
  @IsNumber()
  lemak: number;

  @IsNotEmpty()
  @IsNumber()
  abu: number;

  @IsNotEmpty()
  @IsNumber()
  karbohidrat: number;

  @IsNotEmpty()
  @IsNumber()
  serat_total: number;

  @IsNotEmpty()
  @IsNumber()
  gula_total: number;

  @IsNotEmpty()
  @IsNumber()
  kalsium_ca: number;

  @IsNotEmpty()
  @IsNumber()
  besi_fe: number;

  @IsNotEmpty()
  @IsNumber()
  magnesium_mg: number;

  @IsNotEmpty()
  @IsNumber()
  fosfor_p: number;

  @IsNotEmpty()
  @IsNumber()
  kalium_k: number;

  @IsNotEmpty()
  @IsNumber()
  natrium_na: number;

  @IsNotEmpty()
  @IsNumber()
  seng_zn: number;

  @IsNotEmpty()
  @IsNumber()
  tembaga_cu: number;

  @IsNotEmpty()
  @IsNumber()
  mangan_mn: number;

  @IsNotEmpty()
  @IsNumber()
  selenium_se: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_c: number;

  @IsNotEmpty()
  @IsNumber()
  tiamina_b1: number;

  @IsNotEmpty()
  @IsNumber()
  riboflavin_b2: number;

  @IsNotEmpty()
  @IsNumber()
  niasin: number;

  @IsNotEmpty()
  @IsNumber()
  pantotenat_b5: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_b6: number;

  @IsNotEmpty()
  @IsNumber()
  folat_total_b9: number;

  @IsNotEmpty()
  @IsNumber()
  kolina: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_b12: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_a_iu: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_a_rae: number;

  @IsNotEmpty()
  @IsNumber()
  retinol: number;

  @IsNotEmpty()
  @IsNumber()
  a_karoten: number;

  @IsNotEmpty()
  @IsNumber()
  b_karoten: number;

  @IsNotEmpty()
  @IsNumber()
  b_kriptosantin: number;

  @IsNotEmpty()
  @IsNumber()
  likopen: number;

  @IsNotEmpty()
  @IsNumber()
  zeaksantin_lutein: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_e: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_d: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_d_iu: number;

  @IsNotEmpty()
  @IsNumber()
  vitamin_k: number;

  @IsNotEmpty()
  @IsNumber()
  lemak_jenuh: number;

  @IsNotEmpty()
  @IsNumber()
  lemak_tunggal: number;

  @IsNotEmpty()
  @IsNumber()
  lemak_ganda: number;

  @IsNotEmpty()
  @IsNumber()
  kolesterol: number;
}

/**
 * model Food {
  id String @id @default(uuid())
  name String
  calorie Float
  mineral Float
  protein Float
  fiber Float

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userFood UserFood[]
}
 */
