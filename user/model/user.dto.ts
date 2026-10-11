import { Exclude, Expose } from "class-transformer";
import { Status } from "../enum/enum.js";

export class UserDto {
  @Expose()
  name!: string;

  @Exclude()
  edad!: number;

  @Expose()
  status!: Status;

  @Expose()
  telefono?: string;
}