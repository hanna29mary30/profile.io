import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {
  addNewTodo,
  getTodos,
  updateTodoCompletion,
  remdone,
  remall,
} from "../api";

const Todo = () => {
  const val = { data: "", completed: false };
  const [text, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(val);
  const [activeTab, setActiveTab] = useState("All");

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

  const addtodo = async (e) => {
    e.preventDefault();
    await addNewTodo(newTodo);
    setNewTodo(val);
    getAlltodos();
  };

  const markasdone = async (id) => {
    const updatedTodos = text.map((todo) => {
      if (todo._id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodo(updatedTodos);
    const todoToUpdate = updatedTodos.find((todo) => todo._id === id);
    await updateTodoCompletion(id, todoToUpdate);
  };

  const removedone = async () => {
    text
      .filter((todo) => todo.completed)
      .map(async (todo) => {
        await remdone(todo._id);
      });
  };

  const removeall = async () => {
    text.map(async (todo) => {
      await remdone(todo._id);
    });
  };

  useEffect(() => {
    getAlltodos();
  }, [removedone, addtodo, removeall]);

  const filterTodos = () => {
    switch (activeTab) {
      case "All":
        return text;
      case "Active":
        return text.filter((todo) => !todo.completed);
      case "Completed":
        return text.filter((todo) => todo.completed);
      default:
        return text;
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-80 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card">
                <div
                  className="card-body p-5"
                  style={{ border: "2px solid black", borderRadius: "10px" }}
                >
                  <div
                    className="upper-half"
                    style={{
                      backgroundColor: "black",
                      color: "#fff",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <h1 className="mb-4 text-center">Todo App</h1>
                  </div>

                  <form
                    className="d-flex justify-content-center align-items-center mb-4 mt-4"
                    onSubmit={addtodo}
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        name="data"
                        className="form-control"
                        value={newTodo.data}
                        onChange={onInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark ms-2">
                      <FontAwesomeIcon icon={faPlus} className="ms-2" />
                    </button>
                  </form>

                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          activeTab === "All" ? "active" : ""
                        }`}
                        id="ex1-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected={activeTab === "All" ? "true" : "false"}
                        onClick={() => setActiveTab("All")}
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          activeTab === "Active" ? "active" : ""
                        }`}
                        id="ex1-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected={
                          activeTab === "Active" ? "true" : "false"
                        }
                        onClick={() => setActiveTab("Active")}
                      >
                        Active
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          activeTab === "Completed" ? "active" : ""
                        }`}
                        id="ex1-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected={
                          activeTab === "Completed" ? "true" : "false"
                        }
                        onClick={() => setActiveTab("Completed")}
                      >
                        Completed
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <ul className="list-group mb-0">
                        {filterTodos().map((todo) => (
                          <li
                            key={todo._id}
                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              placeholder="Input Todo"
                              checked={todo.completed}
                              onChange={() => markasdone(todo._id)}
                            />
                            {todo.completed ? <s>{todo.data}</s> : todo.data}
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="text-primary ms-auto"
                              style={{ cursor: "pointer" }}
                              onClick={() => remdone(todo._id)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button
                      type="button"
                      className="btn btn-dark mt-3"
                      onClick={removeall}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
