import { AppDataSource } from '../../config/db.config.js'
import User from '../model/user.model.js'

class UserService {
    getRepository() {
        return AppDataSource.getRepository(User)
    }

    async findAll() {
        const repository = this.getRepository()
        return await repository.find()
    }

    async save(data) {
        const repository = this.getRepository()
        const user = repository.create(data)
        return await repository.save(user)
    }

    async update(id, data) {
        const repository = this.getRepository()
        const user = await repository.findOneBy({ id: Number(id) })
        if (!user) throw new Error('Usuario no encontrado')
        await repository.update(id, data)
        return await repository.findOneBy({ id: Number(id) })
    }

    async delete(id) {
        const repository = this.getRepository()
        const user = await repository.findOneBy({ id: Number(id) })
        if (!user) throw new Error('Usuario no encontrado')
        await repository.remove(user)
        return user
    }
}

export default new UserService()