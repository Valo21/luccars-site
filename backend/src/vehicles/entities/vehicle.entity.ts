import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column()
  private brand: string;

  @Column()
  private model: string;

  @Column()
  private category: string;

  @Column()
  private price: number;

  @Column()
  private year: number;

  @Column()
  private mileage: number;

  @CreateDateColumn()
  private createdAt: Date;

  @UpdateDateColumn()
  private updatedAt: Date;
}
