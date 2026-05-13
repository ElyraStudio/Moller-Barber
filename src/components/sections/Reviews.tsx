import { Star } from "lucide-react";

const testimonials = [
  {
    text: "O André é extremamente detalhista. Melhor corte que já tive em Gravataí.",
    author: "Carlos Silva",
    tag: "Cliente VIP"
  },
  {
    text: "Ambiente nota 10 e pontualidade britânica. Recomendo muito.",
    author: "João Pedro",
    tag: "Cliente Fiel"
  },
  {
    text: "O degradê mais limpo da região. A técnica dele é diferenciada.",
    author: "Mateus Souza",
    tag: "Performance"
  },
  {
    text: "Finalmente um barbeiro que entende de visagismo na Vila Branca.",
    author: "Lucas Ferreira",
    tag: "Estilo"
  },
  {
    text: "Atendimento prático e resultado impecável. Não troco por nada.",
    author: "Ricardo Alves",
    tag: "Premium"
  }
];

export function Reviews() {
  // Duplicamos a lista para o scroll ser infinito e sem saltos
  const rollingList = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Feedback</span>
        <h2 className="font-display text-5xl lg:text-6xl mt-4 tracking-tighter">
          QUEM <span className="text-gradient-gold italic">CONFIA</span>
        </h2>
      </div>

      {/* Container da Roleta */}
      <div className="flex relative items-center">
        {/* Gradientes laterais para efeito de "fade" nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {rollingList.map((t, index) => (
            <div 
              key={index}
              className="w-[350px] lg:w-[450px] shrink-0 px-8 py-12 mx-4 bg-card/40 border border-border/50 rounded-sm group hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="mb-8">
                <p className="text-lg lg:text-xl text-foreground font-display leading-snug group-hover:text-gold transition-colors">
                  “{t.text}”
                </p>
              </blockquote>

              <div className="flex flex-col gap-1">
                <cite className="text-foreground not-italic font-bold uppercase tracking-[0.2em] text-[10px]">
                  {t.author}
                </cite>
                <span className="text-gold/60 text-[9px] uppercase tracking-[0.1em] font-medium">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Decorativo inferior atualizado */}
      <div className="mt-24 border-y border-border/30 py-6 overflow-hidden whitespace-nowrap select-none">
        <div className="flex animate-infinite-scroll gap-12 items-center uppercase text-[10px] tracking-[0.8em] text-muted-foreground/30">
          <span>Confiança</span> <span>•</span>
          <span>Estilo</span> <span>•</span>
          <span>Performance</span> <span>•</span>
          <span>André Moller</span> <span>•</span>
          <span>Gravataí</span> <span>•</span>
          <span>Vila Branca</span> <span>•</span>
          {/* Repetir para o scroll contínuo */}
          <span>Confiança</span> <span>•</span>
          <span>Estilo</span> <span>•</span>
          <span>Performance</span> <span>•</span>
          <span>André Moller</span> <span>•</span>
          <span>Gravataí</span> <span>•</span>
          <span>Vila Branca</span> <span>•</span>
        </div>
      </div>
    </section>
  );
}