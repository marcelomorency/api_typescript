import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { DadosService } from './dados.service';
import { Dado } from './entities/dado.entity';

@Controller('dados') // ✅ Correto!
export class DadosController {
  constructor(private readonly dadosService: DadosService) {}

  /*@Post('analisar-sentimento')
  async analisarSentimento(@Body('texto') texto: string) {
    return this.dadosService.analisarSentimento(text);
  }
*/
  @Get()
  async listar(): Promise<Dado[]> {
    return this.dadosService.listar();
  }

  @Get(':id') // ✅ Correto!
  async buscarPorId(@Param('id') id: number): Promise<Dado> {
    const dado = await this.dadosService.buscarPorId(id);

    if (!dado) {
      throw new NotFoundException(`Dado com ID ${id} não encontrado.`);
    }

    return dado;
  }
}
