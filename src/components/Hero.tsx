import { motion, AnimatePresence } from "motion/react";
import { Copy, CheckCircle2, Monitor, Smartphone, RefreshCw, AlertTriangle, Play } from "lucide-react";
import { useState } from "react";
import heroImg from "../assets/images/minecraft_hero_bg_1781562162929.jpg";

type Tab = "java" | "bedrock";

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("java");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const javaIp = "engine-briefing.gl.joinmc.link";
  const bedrockIp = "france-sbjct.gl.at.ply.gg";
  const bedrockPort = "2658";
  const bedrockBackupIp = "147.185.221.19";

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Minecraft Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="text-sm font-medium text-amber-300">Сервер на техработах / Запуск скоро!</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              AETHERIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                MINECRAFT
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed"
            >
              Современное выживание с умными механиками, уютным игровым процессом и дружной атмосферой. Мы временно отключили сервер для загрузки контентного обновления. Присоединяйтесь ближе к открытию!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-base sm:text-lg text-emerald-400/90 font-display font-medium border-l-2 border-emerald-500 pl-4 py-1 italic"
            >
              "Построй свой дом, исследуй мир, развивайся вместе с друзьями и стань частью нашего сервера!"
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-3 text-sm text-zinc-400 font-sans"
            >
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <span>Версия сервера: <strong className="text-zinc-200">1.21.1</strong> (поддерживается <strong className="text-emerald-400">ViaVersion</strong>)</span>
            </motion.div>
          </div>

          {/* Interactive Server IPs Connect Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 bg-zinc-900/65 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center space-x-2">
              <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span>Адреса для подключения</span>
            </h3>

            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 bg-black/40 p-1.5 rounded-xl border border-white/5 mb-6">
              <button
                onClick={() => setActiveTab("java")}
                className={`flex items-center justify-center space-x-2 py-3 rounded-lg font-medium text-sm transition-all ${
                  activeTab === "java" 
                    ? "bg-emerald-500 text-emerald-950 shadow-md font-bold" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Java (ПК)</span>
              </button>
              <button
                onClick={() => setActiveTab("bedrock")}
                className={`flex items-center justify-center space-x-2 py-3 rounded-lg font-medium text-sm transition-all ${
                  activeTab === "bedrock" 
                    ? "bg-emerald-500 text-emerald-950 shadow-md font-bold" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Bedrock (Моб)</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[180px]">
              <AnimatePresence mode="wait">
                {activeTab === "java" ? (
                  <motion.div
                    key="java-tab"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="text-xs text-zinc-500 uppercase font-mono tracking-wider">Основной IP-адрес</div>
                      <div className="flex items-center justify-between bg-black/60 p-4 rounded-xl border border-white/5 group">
                        <span className="font-mono text-emerald-400 select-all break-all text-sm md:text-base">
                          {javaIp}
                        </span>
                        <button
                          onClick={() => handleCopy(javaIp, "java-ip")}
                          className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 p-2.5 rounded-lg transition-colors border border-emerald-500/20 shrink-0 ml-3"
                          title="Скопировать IP"
                        >
                          {copiedText === "java-ip" ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-scale" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-400 leading-relaxed font-sans bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/10 flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>Подходит для оригинальных клиентов и лаунчеров на компьютере. Порт вводить не нужно (стандартный).</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="bedrock-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Primary Bedrock */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      <div className="md:col-span-3 space-y-1.5">
                        <div className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Основной IP (Bedrock)</div>
                        <div className="flex items-center justify-between bg-black/60 px-3.5 py-3 rounded-xl border border-white/5">
                          <span className="font-mono text-cyan-400 text-xs select-all truncate">
                            {bedrockIp}
                          </span>
                          <button
                            onClick={() => handleCopy(bedrockIp, "bedrock-ip")}
                            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 p-1.5 rounded-md transition-colors border border-cyan-500/20 ml-2"
                          >
                            {copiedText === "bedrock-ip" ? (
                              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-1.5">
                        <div className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">Порт</div>
                        <div className="flex items-center justify-between bg-black/60 px-3.5 py-3 rounded-xl border border-white/5">
                          <span className="font-mono text-cyan-400 text-xs font-bold">
                            {bedrockPort}
                          </span>
                          <button
                            onClick={() => handleCopy(bedrockPort, "bedrock-port")}
                            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 p-1.5 rounded-md transition-colors border border-cyan-500/20 ml-2"
                          >
                            {copiedText === "bedrock-port" ? (
                              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Backup Bedrock */}
                    <div className="space-y-1.5 gap-2.5">
                      <div className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider flex items-center justify-between">
                        <span>Запасной IP (если не работает основной)</span>
                        <span className="text-rose-400 text-[9px] lowercase">backup</span>
                      </div>
                      <div className="flex items-center justify-between bg-black/60 px-3.5 py-3 rounded-xl border border-white/5">
                        <span className="font-mono text-amber-400 text-xs select-all">
                          {bedrockBackupIp} (Порт: {bedrockPort})
                        </span>
                        <button
                          onClick={() => handleCopy(bedrockBackupIp, "bedrock-backup-ip")}
                          className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 p-1.5 rounded-md transition-colors border border-amber-500/20 ml-2"
                        >
                          {copiedText === "bedrock-backup-ip" ? (
                            <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-400 leading-relaxed font-sans bg-cyan-500/5 px-3 py-2 rounded-xl border border-cyan-500/10 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>Для телефонов, планшетов, Minecraft Pocket Edition и консолей. Обязательно укажите порт <b>{bedrockPort}</b>!</span>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/15 p-3.5 rounded-xl space-y-1.5">
                      <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>💡 Pro-TIP для Android</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        Для любителей Java-версии Minecraft на Android рекомендуем <strong>MojoLauncher</strong>. Из протестированных нами лаунчеров он оказался одним из самых стабильных и простых в настройке. С его помощью можно запускать Fabric, Forge и NeoForge, устанавливать модификации, а на слабых устройствах использовать моды для оптимизации или уменьшить разрешение игры для повышения производительности. Для iPhone подобных решений пока нет (или мы их не нашли).
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prompt under Copy */}
            <div className="mt-6 pt-5 border-t border-white/5 text-center text-xs text-zinc-500">
              {copiedText ? (
                <span className="text-emerald-400 font-medium">Адрес скопирован в буфер обмена!</span>
              ) : (
                <span>Нажмите на кнопку справа от адреса, чтобы скопировать</span>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

