import axios from "axios";

export const createResident = async (data) => {
  try {
    const response = await axios.post("http://localhost:8082/api/residents/create", data); // Thay URL phù hợp
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
