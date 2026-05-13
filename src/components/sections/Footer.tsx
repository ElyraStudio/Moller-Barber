export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-white font-display text-3xl mb-2">ANDRÉ MOLLER</h2>
          <p className="text-zinc-600 text-xs uppercase tracking-widest">Gravataí • RS</p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-zinc-700 text-[10px] uppercase tracking-[0.4em]">Built with intention by</span>
          <a href="https://elyras.vercel.app/" target="_blank" className="text-white font-display text-xl hover:text-gold transition-colors tracking-tighter">
            ELYRA
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[9px] text-zinc-800 uppercase tracking-[0.5em] text-center lg:text-left">
        © 2026 All Rights Reserved
      </div>
    </footer>
  );
}