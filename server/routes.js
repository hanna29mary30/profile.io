import express,{Router} from "express";
const router = express.Router();
import {addNewTodo,getAllTodos,updateTodoComp,remdone} from "./usercontroller.js";

// router.get('/image', getImages);
router.post('/todos', addNewTodo);
router.get('/todos',getAllTodos);
router.put('/:id', updateTodoComp);
router.delete('/:id', remdone);

export default router 