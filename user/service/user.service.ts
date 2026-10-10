import { AppDataSource } from '../../config/db.config.js'
import User from '../model/user.model.js'
import { DeleteResult, UpdateResult } from 'typeorm'

class UserService {
    getRepository() {
        return AppDataSource.getRepository(User)
    }

    async findAll() {
        const repository = this.getRepository()
        return await repository.find()
    }

    async save (data:User): Promise<User> {
        const user = this.getRepository().create(data)
        return await this.getRepository().save(user)
    }

    async update(id: number, data: Partial<User>): Promise<User> {
        const repository = this.getRepository()
        const user = await repository.findOneBy({ id: Number(id) })
        if (!user) throw new Error('Usuario no encontrado')
        await repository.update(id, data)
        return await repository.save(user)
    }

    async delete(id:number): Promise<User> {
        const repository = this.getRepository()
        const user = await repository.findOneBy({ id: Number(id) })
        if (!user) throw new Error('Usuario no encontrado')
        await repository.remove(user)
        return user
    }
}

export default new UserService()