import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
