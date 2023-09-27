import axios from "axios";

const URL = "http://localhost:8001";

export const getImage = async () => {
    
    const response= await axios.get(`${URL}/image`);
    console.log(response.data)
  };

export const addNewTodo =async(data) =>{
    try {
        console.log(typeof(data))
        const res = await axios.post(`${URL}/todos`,data);
        
} catch (error) {
        console.log("errror", error.message);
    }
}
export const getTodos = async () => {
    return await axios.get(`${URL}/todos`);
  };


