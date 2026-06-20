import { motion, AnimatePresence } from "motion/react";
import newsImg from "../assets/images/minecraft_news_bg_1781562177225.jpg";
import { Calendar, ChevronRight, X, Clock, Newspaper } from "lucide-react";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Полный вайп и обновление мира",
    date: "15 Июня 2026",
    summary: "Мы провели полный вайп основного мира и обновили генерацию локаций. Заходи и занимай лучшие территории!",
    tag: "Глобальное",
    content: "Мы полностью перезапустили основной мир сервера Aetheria! Это отличный шанс для всех игроков начать с чистого листа, застолбить лучшие приватные территории и построить свои грандиозные постройки.\n\nОсновные изменения:\n• Мир Энда и Незера полностью пересоздан.\n• Добавлены новые еженедельные испытания и достижения.\n• Обновлена система генерации пещер и подземелий для версии 1.21+.\n• Улучшен спавн реликвий и редких сокровищ в заброшенных шахтах."
  },
  {
    id: 2,
    title: "Новые косметические предметы",
    date: "01 Июня 2026",
    summary: "Добавлены уникальные визуальные эффекты, титулы и аксессуары. Сделайте своего персонажа уникальным!",
    tag: "Косметика",
    content: "Мы рады представить крупное обновление системы косметики и кастомизации персонажа!\n\nЧто нового:\n• Множество уникальных косметических эффектов, доступных за активность на сервере.\n• Уникальные анимации ломания блоков и кастомные следы при ходьбе.\n• Новые кастомные шляпы: Цилиндр, Маска Дракона и Шлем Космонавта!\n• Возможность настроить индивидуальный вид вашего персонажа без сторонних модов.\n\nВся косметика доступна абсолютно всем игрокам бесплатно по команде /cosmetics!"
  },
  {
    id: 3,
    title: "Технические работы завершены",
    date: "28 Мая 2026",
    summary: "Сервер снова онлайн. Мы улучшили оптимизацию базы данных и исправили лаги в энде.",
    tag: "Техническое",
    content: "Мы провели глобальную оптимизацию серверной части, чтобы снизить пиковые задержки и исключить просадки TPS.\n\nПроделанные работы:\n• Произведена полная дефрагментация базы данных приватов игроков.\n• Оптимизирован обсчёт мобов на нагруженных фермах в Эндер-мире.\n• Модернизировано резервное копирование — теперь бэкапы создаются в облако мгновенно и без малейших зависаний сервера.\n• Исправлен баг со случайными дисконнектами при использовании лодок у барьеров мира."
  }
];

export function News() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <section id="news" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Последние <span className="text-emerald-500">новости</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-zinc-400 text-lg"
            >
              Будьте в курсе всех событий на сервере Аэтерия
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedNews(item)}
              className="group bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm cursor-pointer hover:shadow-lg hover:shadow-emerald-500/5 flex flex-col justify-between"
            >
              <div>
                {idx === 0 ? (
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={newsImg} 
                      alt="News Cover" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                    <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md border border-emerald-500/30">
                      {item.tag}
                    </div>
                  </div>
                ) : (
                  <div className="h-4 bg-zinc-800/30"></div>
                )}
                
                <div className="p-6 md:p-8 relative">
                  {idx !== 0 && (
                    <div className="absolute top-6 right-6 bg-zinc-800/50 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-white/5">
                      {item.tag}
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-zinc-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 flex justify-between items-center">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNews(item);
                  }}
                  className="text-emerald-500 font-medium text-sm flex items-center group-hover:text-emerald-400 transition-colors"
                >
                  Читать подробнее
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News Article Modal overlay */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/80 text-white/70 hover:text-white p-2.5 rounded-full border border-white/10 transition-all z-20 animate-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-wider">
                    {selectedNews.tag}
                  </span>
                  <div className="flex items-center space-x-1.5 text-zinc-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{selectedNews.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-tight">
                  {selectedNews.title}
                </h3>

                <div className="w-full h-[1px] bg-white/10 my-4" />

                <div className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed whitespace-pre-line space-y-4">
                  {selectedNews.content}
                </div>

                <div className="pt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors border border-white/5"
                  >
                    Закрыть новость
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
