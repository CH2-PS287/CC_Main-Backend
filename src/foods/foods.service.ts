import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Food, UserFood } from '@prisma/client';

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

  async recommendation(userId: string) {
    const data = await this.prisma.userFood.findMany({
      where: {
        userId: userId,
      },
      include: {
        food: true, // Menambahkan informasi terkait dengan tabel food
      },
    });
    const totalFood: CreateFoodDto = {
      mineral: 0,
      fiber: 0,
      calorie: 0,
      label: '',
      name: '',
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
        console.log(food.a_karoten);
        totalFood.a_karoten += +food.a_karoten || 0;
        totalFood.air += +food.air || 0;
        return food;
      }),
    );

    return totalFood;
  }
}
