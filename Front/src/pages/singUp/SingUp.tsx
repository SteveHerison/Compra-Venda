import React from "react";

import LottieAnimation from "../../components/Animation/SingIn";
import FormSingUp from "../../components/Form/FormSingUp";

const SingUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-5rem)]">
      <div className="flex flex-col justify-between w-full h-full md:flex-row">
        <LottieAnimation />
        <div className="flex items-center justify-center w-full h-full">
          <FormSingUp />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
