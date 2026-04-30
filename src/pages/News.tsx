import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const allNews = [
  {
    id: 1,
    category: 'Events',
    title: 'Pixel is set to shine at EuroShop 2026: Launching a New Dialogue on the Future of Retail',
    date: '3 February 2026',
    image: '/images/news-1.jpg',
    excerpt: "Pixel's global journey continues in 2026. We are heading to Europe to attend EuroShop — the world's largest retail trade fair — to showcase SUNMI's latest hardware innovations and connect with retail technology leaders.",
  },
  {
    id: 2,
    category: 'Product',
    title: 'Pixel Cuts Clutter and Boosts Speed with New All-in-One Mobile Terminal & Scanner-Printer',
    date: '15 January 2026',
    image: '/images/news-2.jpg',
    excerpt: 'Our latest addition to the portfolio combines a high-performance mobile terminal with an integrated 2D barcode scanner and compact receipt printer — purpose-built for logistics, retail, and field service teams.',
  },
  {
    id: 3,
    category: 'Events',
    title: 'Pixel 2026 Kick-off: CPad Launch at CES & 8th NRF Showcase',
    date: '8 January 2026',
    image: '/images/news-3.jpg',
    excerpt: 'We kicked off 2026 with a strong presence at CES Las Vegas and the NRF Big Show in New York — unveiling the new CPad to international retail and technology audiences.',
  },
  {
    id: 4,
    category: 'Company',
    title: 'Pixel Expands Regional Footprint with New Singapore Office',
    date: '15 November 2025',
    image: '/images/news-1.jpg',
    excerpt: 'Pixel Hardware Trading has opened its Singapore office to better serve clients across Southeast Asia. The new office will house our regional business development and technical support teams.',
  },
  {
    id: 5,
    category: 'Product',
    title: 'SUNMI D3 Pro Now Available in Cambodia and Thailand',
    date: '3 October 2025',
    image: '/images/news-2.jpg',
    excerpt: 'The powerful SUNMI D3 Pro dual-screen desktop POS terminal is now available through Pixel in Cambodia and Thailand. Purpose-built for high-volume retail and F&B environments.',
  },
  {
    id: 6,
    category: 'Events',
    title: 'Pixel at Retail Asia Summit 2025: Connecting with SE Asia\'s Leading Retailers',
    date: '20 August 2025',
    image: '/images/news-3.jpg',
    excerpt: 'We were proud to exhibit at Retail Asia Summit 2025 in Singapore, where we connected with leading retailers, system integrators, and payment technology providers from across the region.',
  },
];

const categoryColors: Record<string, string> = {
  Events: 'bg-blue-50 text-blue-600',
  Product: 'bg-orange-50 text-orange-600',
  Company: 'bg-green-50 text-green-600',
};

export default function News() {
  const [featured, ...rest] = allNews;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-[72px] pb-20 overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4"
          >
            News & Events
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Latest from Pixel.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Product launches, trade shows, company updates, and insights from the world of smart business hardware.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white pt-20 pb-8 sm:pt-28 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-8"
          >
            Featured
          </motion.p>
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-center border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div className="relative h-56 sm:h-72 lg:h-full bg-gray-100 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight">{featured.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5" />{featured.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((article) => (
              <motion.article
                key={article.id}
                variants={item}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3 ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <h3 className="text-base font-black text-gray-900 mb-3 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />{article.date}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Stay Informed</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Follow Pixel's progress.</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Follow us on social media or contact our team to be added to our distribution list for product announcements, trade event schedules, and regional updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/share/15mQgF2vh7b/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Follow on Facebook
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-8 border border-white/20 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Subscribe to Updates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
