import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DadosService } from './dados.service';
import { DadosController } from './dados.controller';
import { Dado } from './entities/dado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dado])],
  controllers: [DadosController],
  providers: [DadosService],
})
export class DadosModule {}
