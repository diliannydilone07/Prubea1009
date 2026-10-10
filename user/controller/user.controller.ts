import userService from '../service/user.service.js'
import { Request, Response } from 'express'

class UserController {
    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userService.findAll()
            return res.status(200).json({ success: true, data: users })
        } catch (error) {
            console.log(error)
            const message = error instanceof Error ? error.message : 'Error desconocido'
            return res.status(500).json({ success: false, message })
        }
    }

    saveUsers = async (req: Request, res: Response) => {
        try {
            const user = await userService.save(req.body)
            return res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            const message = error instanceof Error ? error.message : 'Error desconocido'
            return res.status(500).json({ success: false, message })
        }
    }

    updateUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const user = await userService.update(Number(id), req.body)
            return res.status(200).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            const message = error instanceof Error ? error.message : 'Error desconocido'
            return res.status(500).json({ success: false, message })
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const user = await userService.delete(Number(id))
            return res.status(200).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            const message = error instanceof Error ? error.message : 'Error desconocido'
            return res.status(500).json({ success: false, message })
        }
    }
}

export default new UserController()