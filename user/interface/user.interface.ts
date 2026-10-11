import { Status } from "../enum/enum.js";

export interface IUser {
  id: number;
  name: string;
  edad: number;
  status: Status;
  telefono?: string;
}