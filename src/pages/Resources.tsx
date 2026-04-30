import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Cpu, BookOpen, ArrowRight } from 'lucide-react';
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

const datasheets = [
  { name: 'CPad', subtitle: 'Smart Commercial Pad', id: 'cpad', specs: 'Android 11 · 10.1" · NFC · 4G' },
  { name: 'V3H', subtitle: 'Handheld POS Terminal', id: 'v3h', specs: 'Android 11 · 5.99" · Built-in scanner' },
  { name: 'D3 Pro', subtitle: 'Desktop POS Terminal', id: 'd3-pro', specs: 'Android 11 · 15.6" · Dual screen' },
  { name: 'T3', subtitle: 'Desktop Terminal', id: 't3', specs: 'Android 11 · 8" · Payment-ready' },
  { name: 'L3', subtitle: 'Mobile Handheld Terminal', id: 'l3', specs: 'Android 11 · 4" · Rugged · 2D scanner' },
  { name: 'Flex-3', subtitle: 'Flexible Terminal', id: 'flex-3', specs: 'Android 11 · Detachable design' },
  { name: 'Receipt Printer', subtitle: '80mm Thermal Printer', id: 'printer', specs: '80mm · USB + LAN + BT · 250mm/s' },
  { name: 'Cash Drawer', subtitle: 'RJ11 Cash Drawer', id: 'cash-drawer', specs: '5-bill 8-coin · RJ11 · Metal alloy' },
];

const otherResources = [
  {
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
    title: 'Firmware & OTA Updates',
    desc: 'SUNMI devices receive Over-the-Air firmware updates automatically when connected to Wi-Fi. For manual firmware packages or version rollback, contact our technical support team.',
    cta: 'Request Firmware Package',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: 'Developer SDK & API Docs',
    desc: 'Building an application on SUNMI hardware? Access the SUNMI Developer Platform for device-specific SDKs, printer APIs, scanner APIs, and integration guides.',
    cta: 'Request SDK Access',
  },
  {
    icon: <FileText className="w-6 h-6 text-orange-500" />,
    title: 'Corporate Brochure',
    desc: 'Download our company and product overview brochure — ideal for sharing with procurement teams, executives, and decision-makers at your organisation.',
    cta: 'Request Brochure',
  },
];

export default function Resources() {
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
            Resources
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Everything you need<br className="hidden sm:block" /> to evaluate and deploy.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Technical datasheets, firmware documentation, SDK integration guides, and corporate collateral — consolidated for your evaluation and deployment needs.
          </motion.p>
        </div>
      </section>

      {/* Datasheets */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Product Datasheets</p>
            <h2 className="text-4xl font-black text-gray-900">Technical specifications.</h2>
            <p className="mt-3 text-gray-500 text-base max-w-xl">
              Full specification sheets for every SUNMI device in our portfolio. Request a PDF copy via the form or contact our team directly.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {datasheets.map((d) => (
              <motion.div
                key={d.id}
                variants={item}
                className="border border-gray-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-black text-gray-900 mb-1">{d.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{d.subtitle}</p>
                <p className="text-xs text-gray-500 mb-4">{d.specs}</p>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/purchase-inquiry?product=${encodeURIComponent(d.name + ' Datasheet')}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Request PDF <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-gray-200">|</span>
                  <Link
                    to={`/product/${d.id}`}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Resources */}
      <section className="bg-[#f7f7f7] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">More Resources</p>
            <h2 className="text-4xl font-black text-gray-900">Firmware, SDK & more.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {otherResources.map((r) => (
              <motion.div key={r.title} variants={item} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-300 hover:shadow-sm transition-all flex flex-col">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">{r.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{r.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  {r.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Additional Documentation</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Request a specific resource.</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              If you require a compliance certificate, regulatory approval document, or technical resource not listed above, please contact our team and we will source it for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
