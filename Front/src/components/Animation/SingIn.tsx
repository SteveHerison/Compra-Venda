// src/components/LottieAnimation.tsx
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/animation/login.json"; // Altere para o caminho do seu arquivo JSON

const LottieAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current!, // Referência do contêiner
      animationData, // Dados da animação
      renderer: "svg",
      loop: true, // Se deseja que a animação fique em loop
      autoplay: true, // Se deve começar a reproduzir automaticamente
    });

    return () => anim.destroy(); // Limpeza
  }, []);

  return <div ref={containerRef} className="w-full h-full " />; // Você pode adicionar classes Tailwind aqui
};

export default LottieAnimation;
