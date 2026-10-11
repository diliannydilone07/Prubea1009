import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import userService from "../service/user.service.js";
import { UserDto } from "../model/user.dto.js";
import { Status } from "../enum/enum.js";

// Pasa los datos por el DTO: solo salen los campos con @Expose()
const toDto = (data: unknown) =>
  plainToInstance(UserDto, data, { excludeExtraneousValues: true });

// Revisa que el status sea uno de los valores del enum
const isValidStatus = (value: unknown): value is Status =>
  Object.values(Status).includes(value as Status);

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      res.json({ success: true, data: toDto(users) });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, edad, status, telefono } = req.body;

      if (status !== undefined && !isValidStatus(status)) {
        res.status(400).json({
          success: false,
          message: `status inválido. Valores permitidos: ${Object.values(Status).join(", ")}`,
        });
        return;
      }

      const user = await userService.save({
        name,
        edad: edad !== undefined ? Number(edad) : undefined,
        status,
        telefono,
      });

      res.status(201).json({ success: true, data: toDto(user) });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, edad, status, telefono } = req.body;

      if (status !== undefined && !isValidStatus(status)) {
        res.status(400).json({
          success: false,
          message: `status inválido. Valores permitidos: ${Object.values(Status).join(", ")}`,
        });
        return;
      }

      const user = await userService.update(id, {
        name,
        edad: edad !== undefined ? Number(edad) : undefined,
        status,
        telefono,
      });

      res.json({ success: true, data: toDto(user) });
    } catch (error: any) {
      const code = error.message === "Usuario no encontrado" ? 404 : 500;
      res.status(code).json({ success: false, message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await userService.delete(Number(req.params.id));
      res.json({ success: true, data: toDto(user) });
    } catch (error: any) {
      const code = error.message === "Usuario no encontrado" ? 404 : 500;
      res.status(code).json({ success: false, message: error.message });
    }
  }
}

export default new UserController();