import mongoose from "mongoose";

// const carousel = new mongoose.Schema({
//   src: String,
//   alt: String,
// });

// const Image = mongoose.model('carousel_image', carousel);

// export default Image
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
