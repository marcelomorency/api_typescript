import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dado } from './entities/dado.entity';
import axios from 'axios';

@Injectable()
export class DadosService {
  async analisarSentimento(texto: string): Promise<any> {
    const API_KEY = 'sua-chave-da-api-google';
    const url = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${API_KEY}`;

    const body = {
      document: {
        type: 'PLAIN_TEXT',
        content: texto,
      },
    };

    try {
      const response = await axios.post(url, body);
      return response.data; // Retorna o resultado da análise de sentimentos
    } catch (error) {
      console.error('Erro ao analisar o sentimento:', error);
      throw new Error('Erro na API externa');
    }
  }

  constructor(
    @InjectRepository(Dado)
    private readonly dadoRepository: Repository<Dado>,
  ) {}

  async criar(dado: Partial<Dado>): Promise<Dado> {
    return this.dadoRepository.save(dado);
  }

  async listar(): Promise<Dado[]> {
    return this.dadoRepository.find();
  }

  async buscarPorId(id: number): Promise<Dado | null> {
    return this.dadoRepository.findOne({ where: { id } }) || null;
  }

  async atualizar(id: number, dado: Partial<Dado>): Promise<void> {
    await this.dadoRepository.update(id, dado);
  }

  async deletar(id: number): Promise<void> {
    await this.dadoRepository.delete(id);
  }
}
