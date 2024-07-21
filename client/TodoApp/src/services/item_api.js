import axios from "axios";

const API_URL = "http://localhost:8080/api/items";

export const fetchList = async () => {
  try {
    const response = await axios.get(`${API_URL}/itemList`);
    return response.data;
  } catch (error) {
    console.log("List fetching error " + error);
  }
};

export const addItemPost = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/addItem`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneItem = async (data) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteItem/${data}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
