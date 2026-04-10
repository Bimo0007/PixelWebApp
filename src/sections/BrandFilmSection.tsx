import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function BrandFilmSection() {
  const { language } = useLanguage();
  const t = translations[language].brandFilm;

  return (
    <section className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Thumbnail */}
          <ScrollReveal direction="left">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/brand-film.jpg"
                  alt="Brand Film - Time"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-50" />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
                  
                  {/* Play Icon */}
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {t.season}
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-white">
                {t.title}
              </h2>
              <p className="text-xl text-gray-300">
                {t.subtitle}
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href="#"
                  className="group inline-flex items-center text-white font-semibold hover:text-orange-400 transition-colors"
                >
                  {t.more}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center text-white font-semibold hover:text-orange-400 transition-colors"
                >
                  {t.moreVideos}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
