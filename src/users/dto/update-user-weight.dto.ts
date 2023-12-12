import { PartialType } from '@nestjs/mapped-types';
import { CreateUserWeightDto } from './create-user-weight.dto';

export class UpdateUserWeightDto extends PartialType(CreateUserWeightDto) {}
