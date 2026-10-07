import userService from '../service/user.service.js'

class UserController {
    getUsers = async (req, res) => {
        try {
            const users = await userService.findAll()
            return res.status(200).json({ success: true, data: users })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: error.message })
        }
    }

    saveUsers = async (req, res) => {
        try {
            const user = await userService.save(req.body)
            return res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: error.message })
        }
    }

    updateUser = async (req, res) => {
        try {
            const { id } = req.params
            const user = await userService.update(id, req.body)
            return res.status(200).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: error.message })
        }
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params
            const user = await userService.delete(id)
            return res.status(200).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ success: false, message: error.message })
        }
    }
}

export default new UserController()