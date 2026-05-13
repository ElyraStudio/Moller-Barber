import { motion, Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import cliente1 from "@/assets/cliente1.jpg";
import cliente2 from "@/assets/cliente2.jpg";
import cliente3 from "@/assets/cliente3.jpg";
import cliente4 from "@/assets/cliente4.jpg";
import cliente5 from "@/assets/cliente5.jpg";
import r1 from "@/assets/review1.jpg";
import r2 from "@/assets/review2.jpg";

export function Portfolio() {
  const leftSideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const rightSideVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Fotos secundárias dos clientes
  const secondaryClients = [cliente2, cliente3, cliente4, cliente5];

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
      
      {/* SVG Decorativo */}
      <svg className="absolute top-10 left-0 w-full h-32 opacity-20 pointer-events-none" preserveAspectRatio="none">
        <path d="M-50,50 C150,150 350,-50 550,80 C750,210 950,50 1200,100" fill="none" stroke="var(--gold)" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LADO ESQUERDO: Título, Clientes Menores e Reviews */}
          <motion.div 
            className="order-2 lg:order-1 space-y-12"
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="space-y-2">
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Galeria Exclusiva</span>
              <h3 className="text-4xl lg:text-6xl text-white font-display leading-tight tracking-tighter">
                RESULTADOS <br/> 
                <span className="text-gradient-gold italic">REAIS.</span>
              </h3>
            </div>

            {/* Grid 2x2 de Clientes (cliente 2 ao 5) */}
            <div className="grid grid-cols-2 gap-4">
              {secondaryClients.map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-sm border border-white/5 aspect-square group">
                  <img 
                    src={img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    alt={`Corte cliente ${i + 2}`} 
                  />
                </div>
              ))}
            </div>
            
            {/* Reviews (Voltam ao layout original de destaque) */}
            {/* Reviews com título contextual */}
<div className="space-y-6 pt-4">
  <div className="flex items-center gap-4">
    <div className="h-[1px] w-8 bg-gold/50" />
    <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-medium">O que dizem os clientes</span>
  </div>
  
  <div className="grid grid-cols-2 gap-6">
    <div className="relative group">
      <img 
        src={r1} 
        className="rounded-sm border border-white/10 opacity-70 group-hover:opacity-100 group-hover:border-gold/50 transition-all duration-500 animate-glow-loop" 
        alt="Feedback 1" 
      />
    </div>
    <div className="relative group mt-8">
      <img 
        src={r2} 
        className="rounded-sm border border-white/10 opacity-70 group-hover:opacity-100 group-hover:border-gold/50 transition-all duration-500 animate-glow-loop" 
        alt="Feedback 2" 
      />
    </div>
  </div>
</div>
          </motion.div>

          {/* LADO DIREITO: Foto Principal (cliente 1) */}
          <motion.div 
            className="order-1 lg:order-2 relative group"
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="absolute inset-0 bg-gold/5 blur-[100px] group-hover:bg-gold/15 transition-all duration-1000" />
            <div className="relative overflow-hidden rounded-sm border border-white/5">
              <img 
                src={cliente1} 
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                alt="Destaque André Moller" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black border border-gold/30 px-4 py-2 hidden lg:block">
               <span className="text-gold text-[8px] uppercase tracking-widest font-bold">Vila Branca | Gravataí</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}