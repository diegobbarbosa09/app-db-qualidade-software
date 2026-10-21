import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">
        {/* Logo Centralizado */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
            <img src="logo.png" alt="Logo DB Qualidade de Software" className="w-full h-full object-cover mt-1 ml-0.5" />
          </div>
          <span className="font-semibold tracking-wide text-lg sm:text-xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            DB Qualidade de Software
          </span>
        </a>
      </div>
    </motion.header>
  );
}