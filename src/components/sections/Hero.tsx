import { Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/local1.jpg";

export function Hero() {
  const waLink = "https://wa.me/5551991316024?text=Olá André! Gostaria de agendar um horário premium.";

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Texto Gigante Estático - Ajustado para Mobile */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
        <h2 className="text-[40vw] font-display font-bold leading-none uppercase tracking-tighter text-white">
          FADE
        </h2>
      </div>

      {/* 2. Imagem de Fundo com Zoom Suave via Framer Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImg} 
          className="w-full h-full object-cover grayscale" 
          alt="H10 Barbearia" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* 3. AURA (Glow) - Reduzida para Mobile para evitar bugs de render */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] lg:w-[40vw] lg:h-[40vw] bg-gold/20 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none z-0" 
      />
      
      <div className="relative z-10 text-center px-6">
        
        {/* Badge de Localização */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/20 rounded-full mb-8 lg:mb-10"
        >
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
            Vila Branca • Gravataí
          </span>
        </motion.div>

        {/* Título com Animação de Revelação Robusta */}
        <h1 className="text-[18vw] lg:text-[10vw] font-display text-white leading-[0.8] tracking-tighter mb-10">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              ANDRÉ
            </motion.span>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gradient-gold italic ml-4 lg:ml-20"
            >
              MOLLER
            </motion.span>
          </div>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="text-zinc-500 text-[10px] lg:text-sm max-w-[250px] lg:max-w-sm uppercase tracking-[0.2em] leading-relaxed font-light">
            Especialista em degradê de alta performance <br className="hidden lg:block"/> e finalização técnica.
          </p>
          
          <a 
            href={waLink} 
            target="_blank" 
            className="group relative px-10 py-5 lg:px-12 lg:py-6 bg-gold text-black font-bold uppercase text-[10px] tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            {/* Brilho do Botão (Funciona no Touch) */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)] transition-transform">
              <div className="relative h-full w-12 bg-white/30" />
            </div>
            
            <span className="relative z-10">Reservar Cadeira</span>
          </a>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>

    </section>
  );
}