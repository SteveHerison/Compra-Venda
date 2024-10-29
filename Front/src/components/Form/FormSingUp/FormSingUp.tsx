import React, { useState } from "react";
import InputForm from "../InputForm";
import ButtonForm from "../ButtonForm";

const FormSingUp = () => {
  const [disable, setDisable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);
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
