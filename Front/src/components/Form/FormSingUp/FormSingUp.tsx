import React, { useState } from "react";
import InputForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import { createUser } from "../../../services/apiService";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios"; // Importando o tipo AxiosError

// Definindo a interface para os dados de erro da resposta
interface ErrorResponse {
  error: boolean;
  message: string;
}

const FormSingUp = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfir) {
      alert("As senhas não coincidem");
      return;
    }
    setDisable(true);

    // Verificando os dados a serem enviados
    console.log("Dados do usuário a serem enviados:", {
      name,
      email,
      password,
    });

    try {
      const res = await createUser({ name, email, password }); // Incluindo a senha
      console.log("Usuário criado com sucesso:", res);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      alert("Usuário criado com sucesso!");

      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.data) {
        const data = axiosError.response.data as ErrorResponse;
        console.error("Erro ao criar usuário:", axiosError.response.data); // Logando o erro
        if (data.error) {
          alert(data.message);
        }
      } else {
        alert("Erro ao criar usuário. Tente novamente.");
      }
    } finally {
      setDisable(false);
    }
  };

  return (
    <form action="" className="w-full px-4 md:px-20" onSubmit={handleSubmit}>
      <InputForm
        title="Nome"
        id="name"
        place="Exemplo@email.com"
        type="text"
        value={name}
        required
        onChange={setName}
        disabled={disable}
      />
      <InputForm
        title="E-mail"
        id="email"
        place="Senha"
        type="email"
        value={email}
        required
        onChange={setEmail}
        disabled={disable}
      />
      <InputForm
        title="Senha"
        id="password"
        place="Exemplo@email.com"
        type="password"
        value={password}
        required
        onChange={setPassword}
        disabled={disable}
      />
      <InputForm
        title="Confirmação senha"
        id="passwordConfir"
        place="Senha"
        type="password"
        required
        value={passwordConfir}
        onChange={setPasswordConfirm}
        disabled={disable}
      />
      <ButtonForm disabled={disable} />
    </form>
  );
};

export default FormSingUp;
