import { Router } from "express";
import casasRouter from "./casas.js"

const router = Router()

router.use("/casas", casasRouter)

export default router