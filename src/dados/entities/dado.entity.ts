import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm: Date;
}
