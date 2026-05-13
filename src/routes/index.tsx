import { createFileRoute } from '@tanstack/react-router';
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA"; // Importe a nova seção de agendamento
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main className="bg-black min-h-screen selection:bg-gold/30 selection:text-gold">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Location />
      
      {/* O CTA entra aqui como o "xeque-mate" antes do encerramento */}
      <CTA /> 
      
      <Footer />
    </main>
  );
}