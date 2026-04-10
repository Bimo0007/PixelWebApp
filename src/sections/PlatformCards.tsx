import { motion } from 'framer-motion';
import { ArrowRight, Code, Store, Globe } from 'lucide-react';
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function PlatformCards() {
  const { language } = useLanguage();
  const tp = translations[language].platform;

  const platforms = [
    { id: 1, icon: Code,  href: '#', ...tp.developer },
    { id: 2, icon: Store, href: '#', ...tp.store },
    { id: 3, icon: Globe, href: '#', ...tp.global },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.id}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: '#FF6B00' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 border-2 border-transparent shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {platform.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                <a
                  href={platform.href}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
                >
                  {platform.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
