import { Instagram as InstagramIcon, Scissors, Zap } from 'lucide-react';
import fotoAndre from "@/assets/barbeiro.jpg"; 
import { Reveal } from "./Reveal"; 

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card px-6 overflow-hidden border-t border-border">
      <Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Container da Foto com Animação de Entrada e Flutuação */}
          <div className="relative group justify-self-center md:justify-self-start">
            
            {/* Moldura Industrial que reage ao Hover */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/10 rounded-sm transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-gold/40"></div>
            
            {/* Wrapper da Foto com efeito de flutuação contínua */}
            <div className="relative z-10 animate-float">
              <img 
                src={fotoAndre} 
                className="w-64 lg:w-80 rounded-sm grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-105 shadow-elegant" 
                alt="André Moller" 
              />
              
              {/* Overlay de Brilho no Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Conteúdo de Texto com Animação de Revelação */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">The Barber</span>
              <h2 className="text-5xl lg:text-7xl font-display text-foreground leading-none tracking-tighter">
                DOMÍNIO DO <br />
                <span className="text-gradient-gold italic">FADE.</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Esqueça o conceito gourmet. André Moller foca na técnica bruta do **degradê de alta performance** e no acabamento técnico. Atendimento prático na Vila Branca para quem busca precisão sem perda de tempo.
            </p>

            {/* Cards de Especialidade com Border-Glow no Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-border">
              <div className="flex gap-4 items-start group/item">
                <div className="p-2 border border-gold/20 rounded-sm group-hover/item:border-gold/60 transition-colors">
                  <Scissors className="text-gold w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-xs uppercase tracking-widest">Técnica Superior</h4>
                  <p className="text-muted-foreground text-[10px] mt-1 italic leading-tight">Especialista em degradê limpo e duradouro.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group/item">
                <div className="p-2 border border-gold/20 rounded-sm group-hover/item:border-gold/60 transition-colors">
                  <Zap className="text-gold w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-xs uppercase tracking-widest">Agilidade Real</h4>
                  <p className="text-muted-foreground text-[10px] mt-1 italic leading-tight">Ritmo de bancada otimizado para o seu dia.</p>
                </div>
              </div>
            </div>

            {/* Link Social com Micro-interação */}
            <a 
              href="https://www.instagram.com/andremollerr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-foreground text-[10px] font-bold uppercase tracking-[0.3em] hover:text-gold transition-all duration-300"
            >
              <div className="p-2 rounded-full border border-border group-hover:border-gold group-hover:rotate-12 transition-all">
                  <InstagramIcon className="w-5 h-5"/>
              </div>
              <span>Portfólio @andremollerr</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}