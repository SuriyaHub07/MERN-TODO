import exp from "express";
import {registerController,loginController} from "../controller/userController.js"

const router =exp.Router()


router.post("/register",registerController);
router.post("/login",loginController)


export default router;
