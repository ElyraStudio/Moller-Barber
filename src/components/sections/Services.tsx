import { Clock, MessageSquare } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  { name: "Corte", price: "35,00", time: "30 min" },
  { name: "Corte Máquina", price: "25,00", time: "30 min" },
  { name: "Barba", price: "25,00", time: "30 min" },
  { name: "Barba Expressa", price: "15,00", time: "15 min" },
  { name: "Corte + Barba", price: "55,00", time: "40 min" },
  { name: "Corte máquina + Barba expressa", price: "35,00", time: "45 min" },
  { name: "Sobrancelha", price: "5,00", time: "10 min" },
  { name: "Corte + Sobrancelha + Bigode e Cavanhaque", price: "50,00", time: "45 min" },
];

export function Services() {
  const getWhatsAppLink = (serviceName: string) => {
    // Número formatado apenas com dígitos para evitar o erro 404
    const phone = "555191316024"; 
    const message = encodeURIComponent(`Olá! Gostaria de reservar o serviço: ${serviceName}. Quais horários disponíveis?`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section id="servicos" className="py-24 bg-background text-foreground px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Tabela de Preços</span>
            <h2 className="font-display text-5xl lg:text-6xl mt-4 tracking-tighter">
              MENU DE <span className="text-gradient-gold italic">SERVIÇOS</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-6" />
          </div>
        </Reveal>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((s) => (
            <motion.div 
              key={s.name} 
              variants={itemVariants}
              className="group relative bg-card/20 p-5 rounded-sm border border-transparent hover:border-gold/20 hover:bg-card/40 transition-all duration-500"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base lg:text-lg font-display uppercase tracking-tight group-hover:text-gold transition-colors">
                  {s.name}
                </h3>
                <div className="flex-1 border-b border-border border-dotted group-hover:border-gold/20 transition-colors" />
                <div className="text-lg lg:text-xl font-display text-gold">
                  <span className="text-[10px] mr-1 opacity-50 font-sans font-normal">R$</span>
                  {s.price}
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-muted-foreground/40">
                  <Clock className="w-3 h-3" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">{s.time}</span>
                </div>

                <motion.a 
                  href={getWhatsAppLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
                    backgroundColor: "var(--gold)",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-gold/30 text-gold text-[9px] uppercase font-bold tracking-widest transition-all duration-300 rounded-sm"
                >
                  <MessageSquare className="w-3 h-3" />
                  Reservar Horário
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-[9px] uppercase tracking-[0.4em] opacity-60">
              Atendimento em Gravataí • Agende via WhatsApp
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}