import exp from  "express";
import {taskController,getController,updateController} from "../controller/taskController.js"
import  authenticate from "../middleware/usermiddleware.js"

const router = exp.Router();



router.use(authenticate);
router.post("/add",taskController);
router.get("/get",getController);
router.put("/update/:id",updateController)




export default router;

