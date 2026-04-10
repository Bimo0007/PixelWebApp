import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/images/experience-bg.jpg"
          alt="Digital Store Experience"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            {t.title}
          </h2>
          <motion.a
            href="#"
            className="inline-flex items-center mt-8 text-white font-semibold hover:text-orange-400 transition-colors group"
            whileHover={{ x: 5 }}
          >
            {t.more}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
