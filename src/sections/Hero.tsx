import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function DistributorPoster() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-orange-500 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-orange-500/30">
          <span className="text-white font-black text-[80px] md:text-[110px] lg:text-[130px] leading-none tracking-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>P</span>
        </div>
      </motion.div>

      {/* Wordmark beneath the badge */}
      <motion.div
        className="mt-5 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
      >
        <span
          className="text-white text-[2.8rem] md:text-[3.6rem] font-black leading-none tracking-tight"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Pixel
        </span>
      </motion.div>

      {/* Text below logo */}
      <motion.div
        className="mt-6 text-center z-10 px-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <p className="text-white/60 text-sm md:text-base uppercase tracking-widest mb-2">
          {t.proudToBe}
        </p>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {t.title}
        </h2>
        <div className="mt-4 w-16 h-0.5 bg-orange-500 mx-auto" />
        <p className="mt-4 text-white/50 text-sm md:text-base max-w-md mx-auto">
          {t.subtitle}
        </p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <DistributorPoster />
    </section>
  );
}
