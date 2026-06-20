import { motion } from "motion/react";
import { Copy, Gamepad2, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-emerald-500" />
            <span className="font-display font-bold text-2xl tracking-tight">Aetheria</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">О сервере</a>
            <a href="#guides" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Команды</a>
            <a href="#news" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Новости</a>
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Техработы</span>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 border-b border-white/5 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#about" className="block text-white/70 hover:text-white py-2">О сервере</a>
          <a href="#guides" className="block text-white/70 hover:text-white py-2">Команды</a>
          <a href="#news" className="block text-white/70 hover:text-white py-2">Новости</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
