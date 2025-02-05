import { PartialType } from '@nestjs/mapped-types';
import { CreateDadoDto } from './create-dado.dto';

export class UpdateDadoDto extends PartialType(CreateDadoDto) {}
