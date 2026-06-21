import { motion, AnimatePresence } from "motion/react";
import newsImg from "../assets/images/minecraft_news_bg_1781562177225.jpg";
import { 
  Calendar, 
  ChevronRight, 
  X, 
  Clock, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Target, 
  Info, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { useState } from "react";

// Detailed interface to support rich modular content
interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  tag: string;
  type: "global_patch" | "fishing" | "optimization";
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Глобальное обновление",
    date: "20 Июня 2026",
    summary: "Переход на Purpur, полная переработка плагинов геймплея, оптимизации и новые механики взаимодействия.",
    tag: "Глобальное 🚀",
    type: "global_patch"
  },
  {
    id: 2,
    title: "Обновление рыбалки: EvenMoreFish!",
    date: "15 Июня 2026",
    summary: "Установлена новая система рыболовства с десятками видов рыб, турнирами и обменом редких уловов.",
    tag: "Геймплей 🎣",
    type: "fishing"
  },
  {
    id: 3,
    title: "Технические работы завершены",
    date: "10 Июня 2026",
    summary: "Мы улучшили производительность базы данных и настроили автоматическую чистку кэша.",
    tag: "Техническое ⚙️",
    type: "optimization"
  }
];

export function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Helper renderer to output custom rich content inside the Modal
  const renderModalContent = (type: string) => {
    switch (type) {
      case "global_patch":
        return (
          <div className="space-y-8 text-zinc-300">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl space-y-3">
              <h4 className="text-emerald-400 font-bold text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Краткое описание обновления</span>
              </h4>
              <p className="text-sm leading-relaxed text-zinc-200">
                Мы завершили крупное техническое обновление и полную переработку серверного ядра. Проект перешел на высокопроизводительную платформу <strong>Purpur (версия 1.21.1)</strong>, став стабильнее, быстрее и получив множество новых геймплейных возможностей.
              </p>
            </div>

            {/* Gameplay Section */}
            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg flex items-center gap-2 border-b border-white/10 pb-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span>Новые возможности геймплея</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Сохранение инвентаря</span>
                  </div>
                  <p className="text-xs text-zinc-400">Сохранение инвентаря теперь работает во всех 3 мирах одновременно.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Режим сессий AuthMe</span>
                  </div>
                  <p className="text-xs text-zinc-400">Сессия запоминается на 60 минут. При повторном входе в игру пароль вводить не нужно.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Активность мобов</span>
                  </div>
                  <p className="text-xs text-zinc-400">Криперы и другие классические мобы полностью активны во всех мирах.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Тайм-аут AFK</span>
                  </div>
                  <p className="text-xs text-zinc-400">Время автоматического кика при бездействии на сервере увеличено до 30 минут.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Система достижений</span>
                  </div>
                  <p className="text-xs text-zinc-400">Ваш прогресс теперь более заметен и награждается благодаря плагину <strong>AdvancedAchievements</strong>.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Умная рубка деревьев</span>
                  </div>
                  <p className="text-xs text-zinc-400">Плагин <strong>UTimber</strong> позволяет срубать дерево целиком в один клик.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Динамическое освещение</span>
                  </div>
                  <p className="text-xs text-zinc-400">Предметы и факелы в вашей руке теперь освещают пространство вокруг в реальном времени.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Сортировка сундуков</span>
                  </div>
                  <p className="text-xs text-zinc-400">Организация вашего инвентаря и сундуков в один клик с помощью <strong>ChestSort</strong>.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Визуализация взаимодействий</span>
                  </div>
                  <p className="text-xs text-zinc-400">Действия игроков (верстаки, наковальни, сундуки) стали видимыми с <strong>InteractionVisualizer</strong>.</p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Красивый список игроков</span>
                  </div>
                  <p className="text-xs text-zinc-400">Обновлен интерфейс TAB-меню с расширенными показателями онлайна и пинга.</p>
                </div>
              </div>
            </div>

            {/* Tech improvements */}
            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg flex items-center gap-2 border-b border-white/10 pb-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Технические улучшения и ядра</span>
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside">
                <li>Обновление до стабильного и быстрого ядра <strong className="text-zinc-200">Purpur 1.21.1</strong>.</li>
                <li>Предгенерация игрового мира с помощью <strong className="text-zinc-200">Chunky</strong> — бег и полеты теперь не вызывают серверных фризов.</li>
                <li>Оптимизатор жителей <strong className="text-zinc-200">VillagerOptimizer</strong> — снижает лаги от сложных ИИ ферм жителей.</li>
                <li>Полностью обновлен Античит — сведены к минимуму ложные кики за обычные полеты и лаги соединения.</li>
              </ul>
            </div>

            {/* Stability & Security */}
            <div className="space-y-4">
              <h4 className="text-white font-display font-bold text-lg flex items-center gap-2 border-b border-white/10 pb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Безопасность и стабильность</span>
              </h4>
              <p className="text-sm">
                Мы бережно сохранили и модернизировали наши основные системы безопасности: авторизация <strong>AuthMe</strong>, защита регионов и приватов <strong>WorldGuard</strong>, логгирование изменений блоков <strong>CoreProtect</strong> (для быстрого отката грифа) и кроссплатформенный коннектор <strong>Geyser + Floodgate</strong> для Bedrock игроков.
              </p>
            </div>
          </div>
        );

      case "fishing":
        return (
          <div className="space-y-6 text-zinc-300">
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-5 rounded-2xl">
              <p className="text-sm leading-relaxed text-zinc-200">
                Мы рады представить полноценную интеграцию плагина <strong>EvenMoreFish (версии 2.3.5)</strong>! Обычное сидение с удочкой теперь превратилось в глубокое, соревновательное и прибыльное ремесло.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold text-base">Ключевые особенности новой рыбалки:</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-zinc-950 p-2 rounded-lg border border-white/5 shrink-0 self-start">
                    <Target className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-zinc-100">Десятки новых видов рыб</h5>
                    <p className="text-xs text-zinc-400">Уникальные пресноводные, глубоководные и мифические морские существа со своими весовыми категориями.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-zinc-950 p-2 rounded-lg border border-white/5 shrink-0 self-start">
                    <Target className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-zinc-100">Автоматические турниры</h5>
                    <p className="text-xs text-zinc-400">Каждые несколько часов на сервере стартуют соревнования на самую длинную, самую тяжелую или самую редкую рыбу.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-zinc-950 p-2 rounded-lg border border-white/5 shrink-0 self-start">
                    <Target className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-zinc-100">Рыночный обмен у купцов</h5>
                    <p className="text-xs text-zinc-400">Сдавайте улов особому торговцу рыбой в обмен на ценные игровые ресурсы или декоративные награды.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "optimization":
        return (
          <div className="space-y-6 text-zinc-300">
            <p className="text-sm leading-relaxed">
              Мы завершили масштабное плановое обслуживание баз данных и оптимизировали алгоритм синхронизации чанков.
            </p>
            <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside">
              <li>Очищены устаревшие лог-файлы чанков энда.</li>
              <li>Проведена дефрагментация основной базы данных плагина приватов.</li>
              <li>Настроен автоматический крон-скрипт для перезагрузки неактивных плагинов контроля.</li>
              <li>Скорость отклика сервера в пиковые часы увеличилась на 20%.</li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

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
                    <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-emerald-500/30">
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
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
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
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/80 text-white/70 hover:text-white p-2.5 rounded-full border border-white/10 transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950">
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

                {/* Render styled custom content depending on patch type */}
                {renderModalContent(selectedNews.type)}

                <div className="pt-8 flex justify-end border-t border-white/5">
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
