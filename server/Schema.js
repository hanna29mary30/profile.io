import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
       
    },
     completed: {
         type: Boolean,
         default: false
     },
})

const Todo = mongoose.model('todo', TodoSchema);

export default Todo;
