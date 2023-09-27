// import Image from "./Schema.js";
import Todo from "./Schema.js"
// export const getImages = async (request, response) => {
//     try {
//         const image = await Image.find();
//         response.status(200).json(image);
//     } catch (error) {
//       response.status(404).json({ message: error.message });
//     }
//   };
  export const addNewTodo = async (request, response) => {
    const user = request.body;
    console.log(request.body);
    const newtodo = new Todo(user);
    try {
      await newtodo.save();
      response.status(201).json(newtodo);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  export const getAllTodos = async (request, response) => {
    try {
      const users = await Todo.find();
      response.status(200).json(users);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };