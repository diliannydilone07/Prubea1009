import { Exclude, Expose } from "class-transformer";
import { status } from "../enum/enum";

export class UserDto {
  @Expose()
  name!: string;

  @Exclude()
  edad!: number;

  status!: status;

  @Expose()
  telefono!: string;
}