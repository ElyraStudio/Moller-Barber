import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Reveal({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Começa invisível e abaixo
      whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela, sobe e aparece
      viewport={{ once: true, margin: "-100px" }} // Ativa uma vez só, um pouco antes de chegar no meio
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Curva de velocidade "Premium"
    >
      {children}
    </motion.div>
  );
}