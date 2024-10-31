import React, { useState } from "react";
import InputForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import useApi, { LoginResponse } from "../../../helpers/ComprasAPI";
import { doLogin } from "../../../helpers/AuthHandler";

const FormSignIn = () => {
  const api = useApi();
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);
    setError(null); // Resetar erro antes de enviar a solicitação

    try {
      console.log("Fazendo login com:", { email, password });
      const json: LoginResponse = await api.login(email, password);
      console.log("Resposta da API:", json);

      if (json.error) {
        console.log("Erro ao fazer login:", json.message); // Log de erro detalhado
        setError(json.message || "Erro desconhecido");
      } else {
        doLogin(json.token!, rememberPassword); // Usar o token com '!'

        // Armazenar informações do usuário no localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: json.user?.id,
            name: json.user?.name,
            email: json.user?.email,
          })
        );

        // Limpar os campos após login
        setEmail("");
        setPassword("");

        window.location.href = "/"; // Redirecionar após login
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      setError("Erro ao realizar login. Tente novamente.");
    } finally {
      setDisable(false);
    }
  };

  return (
    <form className="w-full px-4 md:px-20" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <InputForm
        title="E-mail"
        id="email"
        place="Exemplo@email.com"
        type="text"
        disabled={disable}
        value={email}
        required
        onChange={setEmail}
      />
      <InputForm
        title="Senha"
        id="password"
        place="Senha"
        type="password"
        disabled={disable}
        value={password}
        required
        onChange={setPassword}
      />
      <label htmlFor="checked" className="flex items-center my-2 space-x-2">
        <input
          type="checkbox"
          id="checked"
          className="w-4 h-4"
          disabled={disable}
          checked={rememberPassword}
          onChange={(e) => setRememberPassword(e.target.checked)}
        />
        <p>Lembrar de mim</p>
      </label>
      <ButtonForm type="submit" disabled={disable} />
    </form>
  );
};

export default FormSignIn;
