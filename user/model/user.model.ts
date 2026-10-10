import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { status } from "../enum/enum";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type :'varchar' , nullable: true})
  name!: string;

  @Column({ type :'varchar' , nullable: true})
  edad!: string;

  @Column({ type: 'varchar' , nullable: true})
  status!: status;

  @Column({ type: 'varchar', nullable: true 
  })
  telefono!: string;
}