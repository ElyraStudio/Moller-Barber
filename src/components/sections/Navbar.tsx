import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para mudar o fundo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Localização", href: "#local" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-gold/20 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <Scissors className="w-6 h-6 text-gold group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-display text-xl tracking-tighter text-white">
            ANDRÉ <span className="text-gold">MOLLER</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5551991316024"
            target="_blank"
            className="px-5 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-gold/20 flex flex-col p-6 gap-4 animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-zinc-300 border-b border-zinc-900 pb-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}