import express,{Router} from "express";
const router = express.Router();
import {addNewTodo,getAllTodos} from "./usercontroller.js";

// router.get('/image', getImages);
router.post('/todos', addNewTodo);
router.get('/todos',getAllTodos);
export default router 