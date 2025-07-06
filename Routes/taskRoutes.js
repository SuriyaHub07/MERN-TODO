import exp from  "express";
import {taskController,getController} from "../controller/taskController.js"
import  authenticate from "../middleware/usermiddleware.js"

const router = exp.Router();



router.use(authenticate);
router.post("/add",taskController);
router.get("/get",getController);




export default router;

