import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Status } from "../enum/enum.js";
import { IUser } from "../interface/user.interface.js";

@Entity("users")
export default class User implements IUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", nullable: true })
  name!: string;

  @Column({ type: "int", nullable: true })
  edad!: number;

  @Column({ type: "enum", enum: Status, default: Status.ACTIVE })
  status!: Status;

  @Column({ type: "varchar", nullable: true })
  telefono?: string;
}