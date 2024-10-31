// Defina o tipo de resposta esperado do login
export interface LoginResponse {
  token?: string; // O token pode não estar presente em caso de erro
  user?: {
    id: number;
    name: string;
    email: string;
  };
  error?: boolean; // Se a API retornar um erro, pode haver um campo de erro
  message?: string; // Mensagem de erro opcional
}

const ComprasAPI = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    // Simulação de uma chamada à API
    if (email === "user@example.com" && password === "password") {
      return {
        token: "seu-token-aqui",
        user: {
          id: 1,
          name: "Nome do Usuário",
          email: "user@example.com",
        },
      }; // Retorna um objeto de exemplo com usuário
    } else {
      return {
        error: true,
        message: "Credenciais inválidas",
      };
    }
  },
};

export default () => ComprasAPI;
