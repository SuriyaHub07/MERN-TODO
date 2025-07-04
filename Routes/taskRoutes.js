import exp from "express";
import {addController} from "../controller/taskController.js"

const router =exp.Router()


router.post("/add",addController)

export default router;