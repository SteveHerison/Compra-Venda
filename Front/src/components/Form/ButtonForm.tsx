import React from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const ButtonForm = ({ type, disabled }: Props) => {
  return (
    <button
      className="w-full p-2 my-4 text-white bg-red-800 rounded-xl"
      type={type}
      disabled={disabled}
    >
      Login
    </button>
  );
};

export default ButtonForm;
