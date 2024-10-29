type LoginResponse = {
  token?: string; // Adiciona token como opcional
  error?: string; // Mantém a propriedade error
};

const ComprasAPI = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    // Simulação de uma chamada à API
    // Retorne um objeto de exemplo
    if (email === "user@example.com" && password === "password") {
      return { token: "seu-token-aqui" }; // Substitua pelo token real
    } else {
      return { error: "Credenciais inválidas" };
    }
  },
};

export default () => ComprasAPI;
