import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

export const doLogin = (token: string, rememberPassword = false) => {
  if (rememberPassword) {
    Cookies.set("token", token, { expires: 999 }); // Token armazenado por 999 dias
  } else {
    Cookies.set("token", token); // Token armazenado até o fechamento do navegador
  }
};
