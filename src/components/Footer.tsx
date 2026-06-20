import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Gamepad2 className="w-6 h-6 text-emerald-500" />
          <span className="font-display font-bold text-xl tracking-tight text-white">Aetheria</span>
        </div>
        <div className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Aetheria Minecraft Server. Не является официальным продуктом Minecraft.
        </div>
        <div className="flex space-x-6 mt-6 md:mt-0 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Правила</a>
          <a href="#" className="hover:text-white transition-colors">Дискорд</a>
          <a href="#" className="hover:text-white transition-colors">Донат</a>
        </div>
      </div>
    </footer>
  );
}
