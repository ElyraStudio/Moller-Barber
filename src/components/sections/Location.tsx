import { MapPin, Clock, Navigation, ExternalLink, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Importação necessária
import l1 from "@/assets/local1.jpg";
import l2 from "@/assets/local2.jpg";
import l3 from "@/assets/local3.jpg";

export function Location() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d431.9048701048889!2d-51.0458768!3d-29.9287233!2m3!1f147.62!2f88.91!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1715560000000!5m2!1spt-BR!2sbr";

  // Variantes para o conteúdo que entra pela esquerda
  const leftSideVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Variantes para o mapa que entra pela direita
  const rightSideVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="local" className="py-24 bg-black relative overflow-hidden">
      
      {/* Feixes de Luz verticais no fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse delay-700" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: Informações */}
          <motion.div 
            className="space-y-12"
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 animate-bounce-subtle">
                <Zap className="w-3 h-3 text-gold fill-gold" />
                <span className="text-gold uppercase tracking-[0.4em] text-[9px] font-black">Localização Premium</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-display text-white leading-[0.8] tracking-tighter">
                H10 <br />
                <span className="animate-text-shimmer italic">BARBEARIA</span>
              </h2>
              
              <p className="text-zinc-500 text-lg max-w-sm font-light leading-relaxed border-l border-gold/50 pl-6">
                A excelência de André Moller agora em um ponto estratégico da Vila Branca.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Navigation, title: "Endereço", desc: "Av. dos Estados, 625 — Gravataí" },
                { icon: Clock, title: "Horário", desc: "Seg a Sáb: 09h — 19h" }
              ].map((item, i) => (
                <div key={i} className="border-beam-container p-6 bg-zinc-900/50 backdrop-blur-md group overflow-hidden">
                  <div className="border-beam-light" />
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="p-3 bg-gold/10 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.3em]">{item.title}</h4>
                      <p className="text-white text-lg font-display uppercase tracking-tight">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://www.google.com/maps/dir//Av.+dos+Estados,+625+-+Vila+Branca,+Gravata%C3%AD+-+RS" 
              target="_blank"
              className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white uppercase tracking-[0.3em] text-[10px] transition-all duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold to-amber-600 group-hover:from-white group-hover:to-white transition-all duration-500"></span>
              <span className="relative text-black group-hover:text-gold transition-colors duration-500">Abrir GPS</span>
              <ExternalLink className="relative w-4 h-4 ml-2 text-black group-hover:text-gold transition-colors" />
            </a>
          </motion.div>

          {/* LADO DIREITO: Mapa */}
          <motion.div 
            className="relative group p-1 bg-zinc-800/50 rounded-sm overflow-hidden border-beam-container h-[500px] lg:h-[650px]"
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="border-beam-light opacity-100 group-hover:opacity-100" style={{'--gold': '#D4AF37'} as any} />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
            
            <iframe
              title="Mapa H10 Barbearia"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.5) brightness(0.6)' }}
              allowFullScreen
              loading="lazy"
              src={mapUrl}
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}