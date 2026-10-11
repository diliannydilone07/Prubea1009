import { AppDataSource } from "../../config/db.config.js";
import User from "../model/user.model.js";

class UserService {
  getRepository() {
    return AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    const repository = this.getRepository();
    return await repository.find();
  }

  async save(data: Partial<User>): Promise<User> {
    const repository = this.getRepository();
    const user = repository.create(data);
    return await repository.save(user);
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const repository = this.getRepository();
    const user = await repository.findOneBy({ id: Number(id) });
    if (!user) throw new Error("Usuario no encontrado");
    Object.assign(user, data);
    return await repository.save(user);
  }

  async delete(id: number): Promise<User> {
    const repository = this.getRepository();
    const user = await repository.findOneBy({ id: Number(id) });
    if (!user) throw new Error("Usuario no encontrado");
    await repository.remove(user);
    return user;
  }
}

export default new UserService();