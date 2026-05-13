import { MessageSquare, ArrowRight, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function CTA() {
  const phone = "55XXXXXXXXXXX";
  const message = encodeURIComponent("Olá André! Vi seu site e quero agendar um horário na Vila Branca.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  // Ajuste na animação para mobile: se for tela pequena, usamos um efeito mais seguro
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden border-t border-gold/10">
      
      {/* Background radial mais contido para não estourar no mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <div className="space-y-6 lg:space-y-8">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5"
          >
            <Zap className="w-3 h-3 text-gold animate-pulse" />
            <span className="text-gold uppercase tracking-[0.2em] lg:tracking-[0.4em] text-[9px] font-bold">Últimas vagas da semana</span>
          </motion.div>

          {/* Ajuste de tamanho de fonte responsivo: text-4xl no mobile, text-8xl no desktop */}
          <motion.h2 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-4xl sm:text-5xl lg:text-8xl font-display text-white tracking-tighter leading-[0.9]"
          >
            DOMINE SUA <br />
            <span className="text-gradient-gold italic">PRESENÇA.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 text-base lg:text-lg font-light max-w-[280px] sm:max-w-md mx-auto"
          >
            A estética de elite que você busca, no coração de Gravataí.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="mt-12 lg:mt-16 flex flex-col items-center gap-8"
        >
          {/* Botão com largura adaptável (w-full no mobile com max-w) */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-[320px] sm:max-w-none sm:inline-flex items-center justify-center px-8 lg:px-16 py-6 lg:py-8 bg-gold overflow-hidden rounded-sm transition-transform active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            {/* Efeito Shine */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[35deg] group-hover:animate-shine" />
            </div>

            <div className="relative z-10 flex items-center justify-center gap-3 lg:gap-4">
              <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 text-black fill-black/10" />
              <span className="text-black font-black uppercase tracking-widest text-xs lg:text-sm whitespace-nowrap">
                Garantir meu horário
              </span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-black group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </a>

          <div className="flex flex-col items-center gap-2">
            <span className="h-[1px] w-8 bg-gold/30" />
            <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] lg:tracking-[0.8em] font-bold">
              Vila Branca • Gravataí
            </p>
          </div>
        </motion.div>
      </div>

      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
    </section>
  );
}