import axios from "axios";

// URL base do backend
const API_URL = "http://localhost:3000";

// Interfaces para tipos de dados de respostas
export interface LoginResponse {
  token?: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
  error?: boolean;
  message?: string;
}

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

// Função para login
export const login = async (loginData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
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
