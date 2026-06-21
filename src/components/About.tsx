import { motion } from "motion/react";
import { Server, Users, Shield, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-emerald-500" />,
      title: "Чистая оптимизация",
      description: "Никакого лишнего мусора и тяжелых плагинов. Сервер настроен вручную для максимально плавного и комфортного выживания."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Адекватное комьюнити",
      description: "Строгая, но справедливая модерация. Мы ценим дружественную атмосферу и взаимное уважение."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "Античит и защита",
      description: "Ваши постройки в безопасности. Надежный античит блокирует большинство читеров моментально."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: "Ванильный+",
      description: "Только нужные плагины, которые не ломают дух оригинальной игры, а лишь делают её удобнее."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Почему стоит <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                выбрать нас?
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              Мы создали сервер, на котором хотели бы играть сами. Никаких гриферских донатов, скрытых ловушек, бесконечных вайпов. Только чистое выживание и фокус на сообществе.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl"
            >
              <div className="text-amber-400 font-bold mb-2">Обновление: Идёт разработка!</div>
              <p className="text-zinc-300 text-sm">Сейчас мы проводим технические работы и перерабатываем плагины, чтобы улучшить оптимизацию и добавить новые интересные механики. Следите за новостями!</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:bg-zinc-800/80 transition-colors"
              >
                <div className="mb-4 bg-zinc-950 inline-block p-3 rounded-xl border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
