import "./Todo.css";
import { useState, useEffect } from "react";
import { addNewTodo, getTodos,updateTodoCompletion,remdone,remall} from "../api";

const Todo = () => {
  const val = { data: "", completed: false };
  const [text, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(val);

  useEffect(() => {
    getAlltodos();
  }, []);

  const getAlltodos = async () => {
    try {
      let response = await getTodos();
      setTodo(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const onInputChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    
      await addNewTodo(newTodo);
      getAlltodos();
      setNewTodo(val);
    
  };

  const markasdone = async (id) => {
    const updatedTodos = text.map((todo) => {
      if (todo._id === id) {
        return { ...todo, completed: true };
      } else {
        return todo;
      }
    });
  
    
    setTodo(updatedTodos);
    const todoToUpdate = updatedTodos.find((todo) => todo._id === id);
    await updateTodoCompletion(id, todoToUpdate);
    
  };
  const removedone = async() =>{
    text.map(async(todo) => {
      if (todo.completed === true) {
        await remdone(todo._id);  };
      })
    
  };
  const removeall = async() =>{
    text.map(async(todo) => {
      await remdone(todo._id); 
      })
  }


  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <form className="form" onSubmit={onFormSubmit}>
          <input
            placeholder="Enter new todo..."
            className="input"
            onChange={onInputChange}
            name="data"
            value={newTodo.data}
          />
        </form>
      </div>
      <div className="text-center">
  <button type="button" className="btn btn-primary m-2" onClick={()=>removedone()}>
    Remove all Done Todos
  </button>
  <button type="button" className="btn btn-danger m-2" onClick={()=>removeall()} >
    Remove all Todos
  </button>
</div>
      <div className="row justify-content-center">
      <table
          className="table table-bordered table-hover table-striped text-center"
          style={{ width: "80%", margin: "0 auto" }}
        >
          <thead className="table-dark">
            <tr>
              <th style={{ height: "50px" }}>Todo</th>
              <th style={{ height: "50px" }} colSpan={2}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {text.map((user) => (
              <tr key={user._id}>
                <td>
                  <span
                    style={{
                      textDecoration: user.completed ? "line-through" : "none",
                    }}
                  >
                    {user.data}
                  </span>
                </td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-success m-2"
                      onClick={() => markasdone(user._id)}
                    >
                      Mark as Done
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
