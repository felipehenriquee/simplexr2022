import { PartialType } from '@nestjs/mapped-types';
import { CreateArmodelDto } from './create-armodel.dto';

export class UpdateArmodelDto extends PartialType(CreateArmodelDto) {}
