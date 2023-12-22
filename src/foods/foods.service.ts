import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { NutritionFoodDto } from './dto/nutrition-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Food } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodDto: CreateFoodDto) {
    return this.prisma.food.create({
      data: {
        calorie: createFoodDto.calorie,
        fiber: createFoodDto.fiber,
        mineral: createFoodDto.mineral,
        name: createFoodDto.name,
        protein: createFoodDto.protein,
        label: createFoodDto.label,
        air: createFoodDto.air,
        lemak: createFoodDto.lemak,
        energi: createFoodDto.energi,
        abu: createFoodDto.abu,
        karbohidrat: createFoodDto.karbohidrat,
        serat_total: createFoodDto.serat_total,
        gula_total: createFoodDto.gula_total,
        kalsium_ca: createFoodDto.kalsium_ca,
        besi_fe: createFoodDto.besi_fe,
        magnesium_mg: createFoodDto.magnesium_mg,
        fosfor_p: createFoodDto.fosfor_p,
        kalium_k: createFoodDto.kalium_k,
        natrium_na: createFoodDto.natrium_na,
        seng_zn: createFoodDto.seng_zn,
        tembaga_cu: createFoodDto.tembaga_cu,
        mangan_mn: createFoodDto.mangan_mn,
        selenium_se: createFoodDto.selenium_se,
        vitamin_c: createFoodDto.vitamin_c,
        tiamina_b1: createFoodDto.tiamina_b1,
        riboflavin_b2: createFoodDto.riboflavin_b2,
        niasin: createFoodDto.niasin,
        pantotenat_b5: createFoodDto.pantotenat_b5,
        vitamin_b6: createFoodDto.vitamin_b6,
        folat_total_b9: createFoodDto.folat_total_b9,
        kolina: createFoodDto.kolina,
        vitamin_b12: createFoodDto.vitamin_b12,
        vitamin_a_iu: createFoodDto.vitamin_a_iu,
        vitamin_a_rae: createFoodDto.vitamin_a_rae,
        retinol: createFoodDto.retinol,
        a_karoten: createFoodDto.a_karoten,
        b_karoten: createFoodDto.b_karoten,
        b_kriptosantin: createFoodDto.b_kriptosantin,
        likopen: createFoodDto.likopen,
        zeaksantin_lutein: createFoodDto.zeaksantin_lutein,
        vitamin_e: createFoodDto.vitamin_e,
        vitamin_d: createFoodDto.vitamin_d,
        vitamin_d_iu: createFoodDto.vitamin_d_iu,
        vitamin_k: createFoodDto.vitamin_k,
        lemak_jenuh: createFoodDto.lemak_jenuh,
        lemak_tunggal: createFoodDto.lemak_tunggal,
        lemak_ganda: createFoodDto.lemak_ganda,
        kolesterol: createFoodDto.kolesterol,
      },
    });
  }

  async findAll() {
    return this.prisma.food.findMany();
  }

  async findOne(id: string) {
    return this.prisma.food.findUniqueOrThrow({ where: { id: id } });
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    return this.prisma.food.update({
      where: { id: id },
      data: {
        calorie: updateFoodDto.calorie,
        fiber: updateFoodDto.fiber,
        mineral: updateFoodDto.mineral,
        name: updateFoodDto.name,
        protein: updateFoodDto.protein,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.food.delete({ where: { id: id } });
  }

  async recommendation(userId: string, jwtToken: string) {
    const data = await this.getNutrition(userId);

    const dataSend = {
      input_data: [Object.values(data)],
    };

    try {
      const response = await axios.post(
        'https://cc-food-recommendation-deployment-sl2ou7b2aa-et.a.run.app/predict',
        dataSend,
        {
          headers: {
            Authorization: jwtToken, // Sertakan token JWT di sini
            'Content-Type': 'application/json', // Sesuaikan dengan tipe konten yang sesuai
          },
        },
      );
      const foodNames = response.data.map(
        (food: { name: string }) => food.name,
      );
      const foods = await this.prisma.food.findMany({
        where: {
          name: {
            in: foodNames,
          },
        },
        select: {
          id: true,
          name: true,
        },
      });

      return foods;
    } catch (error) {
      // Handle errors
      console.error('Error posting data:', error.message);
      throw error;
    }
  }

  async getNutrition(userId: string) {
    const data = await this.prisma.userFood.findMany({
      where: {
        userId: userId,
      },
      include: {
        food: true, // Menambahkan informasi terkait dengan tabel food
      },
    });

    const totalFood: NutritionFoodDto = {
      air: 0,
      energi: 0,
      protein: 0,
      lemak: 0,
      abu: 0,
      karbohidrat: 0,
      serat_total: 0,
      gula_total: 0,
      kalsium_ca: 0,
      besi_fe: 0,
      magnesium_mg: 0,
      fosfor_p: 0,
      kalium_k: 0,
      natrium_na: 0,
      seng_zn: 0,
      tembaga_cu: 0,
      mangan_mn: 0,
      selenium_se: 0,
      vitamin_c: 0,
      tiamina_b1: 0,
      riboflavin_b2: 0,
      niasin: 0,
      pantotenat_b5: 0,
      vitamin_b6: 0,
      folat_total_b9: 0,
      kolina: 0,
      vitamin_b12: 0,
      vitamin_a_iu: 0,
      vitamin_a_rae: 0,
      retinol: 0,
      a_karoten: 0,
      b_karoten: 0,
      b_kriptosantin: 0,
      likopen: 0,
      zeaksantin_lutein: 0,
      vitamin_d_iu: 0,
      vitamin_k: 0,
      lemak_jenuh: 0,
      lemak_tunggal: 0,
      lemak_ganda: 0,
      kolesterol: 0,
      vitamin_e: 0,
      vitamin_d: 0,
    };

    await Promise.all(
      data.map(async (record: any) => {
        const food: Food = record.food;

        totalFood.protein += +food.protein || 0;
        totalFood.air += +food.air || 0;
        totalFood.lemak += +food.lemak || 0;
        totalFood.energi += +food.energi || 0;
        totalFood.abu += +food.abu || 0;
        totalFood.karbohidrat += +food.karbohidrat || 0;
        totalFood.serat_total += +food.serat_total || 0;
        totalFood.gula_total += +food.gula_total || 0;
        totalFood.kalsium_ca += +food.kalsium_ca || 0;
        totalFood.besi_fe += +food.besi_fe || 0;
        totalFood.magnesium_mg += +food.magnesium_mg || 0;
        totalFood.fosfor_p += +food.fosfor_p || 0;
        totalFood.kalium_k += +food.kalium_k || 0;
        totalFood.natrium_na += +food.natrium_na || 0;
        totalFood.seng_zn += +food.seng_zn || 0;
        totalFood.tembaga_cu += +food.tembaga_cu || 0;
        totalFood.mangan_mn += +food.mangan_mn || 0;
        totalFood.selenium_se += +food.selenium_se || 0;
        totalFood.vitamin_c += +food.vitamin_c || 0;
        totalFood.tiamina_b1 += +food.tiamina_b1 || 0;
        totalFood.riboflavin_b2 += +food.riboflavin_b2 || 0;
        totalFood.niasin += +food.niasin || 0;
        totalFood.pantotenat_b5 += +food.pantotenat_b5 || 0;
        totalFood.vitamin_b6 += +food.vitamin_b6 || 0;
        totalFood.folat_total_b9 += +food.folat_total_b9 || 0;
        totalFood.kolina += +food.kolina || 0;
        totalFood.vitamin_b12 += +food.vitamin_b12 || 0;
        totalFood.vitamin_a_iu += +food.vitamin_a_iu || 0;
        totalFood.vitamin_a_rae += +food.vitamin_a_rae || 0;
        totalFood.retinol += +food.retinol || 0;
        totalFood.a_karoten += +food.a_karoten || 0;
        totalFood.b_karoten += +food.b_karoten || 0;
        totalFood.b_kriptosantin += +food.b_kriptosantin || 0;
        totalFood.likopen += +food.likopen || 0;
        totalFood.zeaksantin_lutein += +food.zeaksantin_lutein || 0;
        totalFood.vitamin_e += +food.vitamin_e || 0;
        totalFood.vitamin_d += +food.vitamin_d || 0;
        totalFood.vitamin_d_iu += +food.vitamin_d_iu || 0;
        totalFood.vitamin_k += +food.vitamin_k || 0;
        totalFood.lemak_jenuh += +food.lemak_jenuh || 0;
        totalFood.lemak_tunggal += +food.lemak_tunggal || 0;
        totalFood.lemak_ganda += +food.lemak_ganda || 0;
        totalFood.kolesterol += +food.kolesterol || 0;
        return food;
      }),
    );

    return totalFood;
  }
}
