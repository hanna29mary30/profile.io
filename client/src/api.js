import axios from "axios";

const URL = "http://localhost:8001";

export const getImage = async () => {
  const response = await axios.get(`${URL}/image`);
};

export const addNewTodo = async (data) => {
  const res = await axios.post(`${URL}/todos`, data);
};

export const getTodos = async () => {
  return await axios.get(`${URL}/todos`);
};

export const updateTodoCompletion = async (id, updatedtodo) => {
  return await axios.put(`${URL}/${id}`, updatedtodo);
};

export const remdone = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};
