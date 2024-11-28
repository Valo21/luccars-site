import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../auth/roles/roles.enum';

export class User {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column()
  private email: string;

  @Column()
  private fullName: string;

  @Column()
  private password: string;

  private roles: Role[];

  @CreateDateColumn()
  private createdAt: Date;

  @UpdateDateColumn()
  private updatedAt: Date;
}
