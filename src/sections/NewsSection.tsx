import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const newsItems = [
  {
    id: 1,
    title: 'Pixel is set to shine at EuroShop 2026: Launching a New Dialogue on the Future of Retail',
    date: '2026-2-3',
    image: '/images/news-1.jpg',
    excerpt: "Pixel's global journey continues in 2026! We are about to head to Europe and attend the global retail industry event - EuroShop.",
  },
  {
    id: 2,
    title: 'Pixel Cuts Clutter and Boosts Speed with New All-in-One Mobile Terminal & Scanner-Printer',
    date: '2026-1-15',
    image: '/images/news-2.jpg',
    excerpt: 'Introducing our latest innovation in mobile terminal technology.',
  },
  {
    id: 3,
    title: 'Pixel 2026 Kick-off: CPad Launch at CES & 8th NRF Showcase',
    date: '2026-1-8',
    image: '/images/news-3.jpg',
    excerpt: 'Join us at CES and NRF to experience our latest products.',
  },
];

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

export default function NewsSection() {
  const { language } = useLanguage();
  const t = translations[language].news;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t.title}
            </h2>
            <a
              href="#"
              className="hidden sm:inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
            >
              {t.more}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.excerpt}
                </p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile More Link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center text-orange-500 font-semibold"
          >
            {t.more}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
