import axios from "axios";

const API_URL = "http://localhost:3000"; // URL base do backend

// Função para criar um novo usuário
export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`${API_URL}/createUser`, userData);
    return res.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

// Função para criar um novo post

export const createPost = async (postData: {
  content: string;
  title: string;
  userId: number;
}) => {
  try {
    const response = await axios.post(`${API_URL}/createPost`, postData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw error;
  }
};
