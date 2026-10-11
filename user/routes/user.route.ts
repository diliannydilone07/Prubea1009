import { Router } from "express";
import userController from "../controller/user.controller.js";

const router = Router();

router.get("/all", (req, res) => userController.getAll(req, res));
router.post("/create", (req, res) => userController.create(req, res));
router.put("/update/:id", (req, res) => userController.update(req, res));
router.delete("/delete/:id", (req, res) => userController.delete(req, res));

export default router;
