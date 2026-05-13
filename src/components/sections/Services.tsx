import { Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
// Importando o tipo necessário para corrigir o erro
import { Variants } from "framer-motion";

const services = [
  { name: "Corte Signature", price: "35", time: "45 min", description: "Degradê de alta performance com finalização técnica." },
  { name: "Barba & Toalha Quente", price: "30", time: "30 min", description: "Alinhamento com navalha e terapia de toalha quente." },
  { name: "Experience (Corte + Barba)", price: "55", time: "85 min", description: "O combo completo para renovação total do visual." },
  { name: "Acabamento Máquina", price: "20", time: "20 min", description: "Limpeza de contorno e ajuste rápido de pezinho." },
];

export function Services() {
  const getWhatsAppLink = (serviceName: string) => {
    const phone = "55XXXXXXXXXXX"; // Coloque o número do André aqui
    const message = encodeURIComponent(`Olá! Gostaria de reservar o serviço: ${serviceName}. Quais horários disponíveis?`);
    return `https://wa.me/${phone}?text=${message}`;
  };

  // Correção: Aplicando o tipo Variants explicitamente
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Correção: Aplicando o tipo Variants explicitamente
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        // Com a tipagem Variants, o TS aceita o array de Bezier
        ease: [0.22, 1, 0.36, 1] 
      }
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
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((s) => (
            <motion.div 
              key={s.name} 
              variants={itemVariants}
              className="group relative bg-card/30 p-6 rounded-sm border border-transparent hover:border-gold/20 hover:bg-card/50 transition-all duration-500"
            >
              {/* Layout Superior: Nome e Preço */}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg lg:text-xl font-display uppercase tracking-tight group-hover:text-gold transition-colors">
                  {s.name}
                </h3>
                <div className="flex-1 border-b border-border border-dotted group-hover:border-gold/30 transition-colors" />
                <div className="text-xl lg:text-2xl font-display text-gold">
                  <span className="text-[10px] mr-1 opacity-50 font-sans">R$</span>
                  {s.price}
                </div>
              </div>

              {/* Layout Inferior: Descrição e Botão */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs lg:text-sm font-light italic leading-relaxed max-w-md">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-muted-foreground/50">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{s.time}</span>
                  </div>
                </div>

                <a 
                  href={getWhatsAppLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gold/50 text-gold text-[10px] uppercase font-bold tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <MessageSquare className="w-3 h-3" />
                  Reservar
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="mt-20 text-center">
            <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
              Agendamentos rápidos via WhatsApp
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}