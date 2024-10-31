import { LoginResponse } from "../services/apiService";

export const mockLogin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  if (email === "user@example.com" && password === "password") {
    return {
      token: "seu-token-aqui",
      user: {
        id: 1,
        name: "Nome do Usuário",
        email: "user@example.com",
      },
    };
  } else {
    return {
      error: true,
      message: "Credenciais inválidas",
    };
  }
};
