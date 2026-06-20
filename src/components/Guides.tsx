import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, ShieldAlert, Sparkles, TerminalSquare } from "lucide-react";

const guides = [
  {
    id: "claim",
    icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
    title: "Как приватить территорию?",
    content: `Для привата используйте золотую лопату. 
    1. Возьмите золотую лопату в руки.
    2. Кликните ПКМ по одному углу вашей будущей территории.
    3. Кликните ПКМ по противоположному углу по диагонали.
    Для расширения привата кликните ПКМ палкой по вашему привату ПКМ лопатой по светящемуся углу и переместите его.
    Базовый размер привата: до 50 000 блоков.`
  },
  {
    id: "commands",
    icon: <TerminalSquare className="w-5 h-5 text-emerald-500" />,
    title: "Основные команды",
    content: `/spawn - Телепортация на спавн
/home - Телепортация домой
/sethome - Установить точку дома
/tpa [ник] - Отправить запрос на телепортацию к игроку
/msg [ник] [текст] - Отправить личное сообщение игроку
/kits - Получить стартовые наборы`
  },
  {
    id: "vip",
    icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    title: "Привилегии и донат",
    content: `На сервере нет вещей, ломающих баланс игры (Pay2Win).
Привилегии дают косметические эффекты: цветной чат, уникальные титулы, возможность заходить на переполненный сервер и дополнительные точки дома.`
  }
];

export function Guides() {
  const [openGuideId, setOpenGuideId] = useState<string | null>(guides[0].id);

  return (
    <section id="guides" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Руководство по <span className="text-emerald-500">игре</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Всё, что вам нужно знать перед началом
          </motion.p>
        </div>

        <div className="space-y-4">
          {guides.map((guide, idx) => (
             <motion.div 
               key={guide.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden"
             >
                <button
                 onClick={() => setOpenGuideId(openGuideId === guide.id ? null : guide.id)}
                 className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
               >
                 <div className="flex items-center space-x-4">
                   <div className="bg-zinc-950 p-2 rounded-lg border border-white/5">
                     {guide.icon}
                   </div>
                   <h3 className="text-xl font-medium text-white">{guide.title}</h3>
                 </div>
                 <ChevronDown 
                   className={`w-6 h-6 text-zinc-500 transition-transform duration-300 ${openGuideId === guide.id ? 'rotate-180' : ''}`} 
                 />
               </button>
               
               <AnimatePresence>
                 {openGuideId === guide.id && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     className="px-6 pb-6"
                   >
                     <div className="pt-4 border-t border-white/5 text-zinc-400 whitespace-pre-wrap font-sans text-sm md:text-base leading-relaxed">
                       {guide.content}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
