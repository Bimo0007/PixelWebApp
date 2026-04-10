import { motion } from 'framer-motion';
import CountUp from '../components/CountUp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function StatsSection() {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const stats = [
    { value: 200, suffix: '+', label: t.labels.countries },
    { value: 33000, suffix: '+', label: t.labels.apps },
    { value: 66000, suffix: '+', label: t.labels.partners },
    { value: 240, suffix: 'M+', label: t.labels.downloads },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t.headline1}<br />
            <span className="text-orange-500">{t.headline2}</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-l border-white/10 pl-6"
            >
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-600 mt-12"
        >
          {t.footnote}
        </motion.p>
      </div>
    </section>
  );
}
