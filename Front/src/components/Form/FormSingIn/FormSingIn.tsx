import React, { useState } from "react";
import InputForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import useApi from "../../../helpers/ComprasAPI";
import { doLogin } from "../../../helpers/AuthHandler";

const FormSingIn = () => {
  const api = useApi();
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState<string | null>(null); // Corrigido para receber uma string de erro ou null
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [password, setPassword] = useState(""); // Estado para armazenar a senha
  const [rememberPassword, setRememberPassword] = useState(false); // Adiciona estado para lembrar de mim

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);

    const json = await api.login(email, password);
    if (json?.error) {
      // Verifica se json possui a propriedade error
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      //   window.location.href = "/";
    }
    setDisable(false);
  };

  return (
    <form className="w-full px-4 md:px-20" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}{" "}
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

export default FormSingIn;
