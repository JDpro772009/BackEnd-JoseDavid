import { Router } from "express";
import Casa from "../models/Casa.js"
import {allCasas,jardinCasas} from "../controllers/casas/read.js";


const router = Router()

router.get("/all",allCasas  )
router.get("/jardin/:n", jardinCasas )

   export default router