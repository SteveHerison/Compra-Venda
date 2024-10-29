import React from "react";

type Props = {
  title: string;
  value: string;
  id: string;
  type?: string;
  place?: string;
  disabled: boolean;
  required?: boolean;
  onChange: (value: string) => void;
};

const InputForm = ({
  title,
  id,
  type,
  place,
  disabled,
  value,
  required,
  onChange,
}: Props) => {
  return (
    <label htmlFor={id} className="">
      <p> {title} </p>
      <input
        id={id}
        type={type}
        placeholder={place}
        disabled={disabled}
        value={value}
        required={required}
        onChange={({ target }) => onChange(target.value)}
        className="w-full p-2 mb-2 border border-orange-900 outline-none rounded-xl"
      />
    </label>
  );
};

export default InputForm;
