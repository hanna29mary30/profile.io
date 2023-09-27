import { useState, useEffect } from "react";
import { addNewTodo, getTodos} from "../api";
import "./Todo.css";
const Todo = () => {
  const val = { data: "", completed: false };
  const [text, setTodo] = useState([val]);
  useEffect(() => {
    getAlltodos();
    
  }, []);

  const getAlltodos = async () => {
    let response = await getTodos();
    setTodo(response.data);
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setTodo({ ...val, [e.target.name]: e.target.value });
  };
  const onFormSubmit = async (e) => {
    await addNewTodo(text);
    getTodos();
  };
  const markasdone = (id) => {
    const updatedTodos = text.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodo(updatedTodos);
  };

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
          />
        </form>
      </div>
      <div>
        <table className="table table-bordered table-hover table-striped text-center">
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
              <tr
                key={user._id}
                style={{
                  
                  textDecoration: user.completed ? "line-through" : "none",
                }}
              >
                <td>{user.data}</td>
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
