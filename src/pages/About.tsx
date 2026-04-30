import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe2, Headphones, Handshake } from 'lucide-react';
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

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    title: 'Genuine Products',
    desc: 'Every device we sell is sourced directly from SUNMI. You get factory-authentic hardware, official firmware, and full manufacturer warranty — no grey-market risk.',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-orange-500" />,
    title: 'Regional Expertise',
    desc: 'Based in Phnom Penh with regional reach across Southeast Asia, we understand the local business landscape and deliver solutions that fit how merchants here actually operate.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-orange-500" />,
    title: 'End-to-End Support',
    desc: 'From pre-sales consultation to after-sales technical support, our team stays with you. We help you choose the right device, deploy it, and keep it running.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-orange-500" />,
    title: 'Reseller & Partner Network',
    desc: 'We work with resellers, system integrators, and ISVs across the region. If you are looking to bring SUNMI devices to your customers, we make it simple and profitable.',
  },
];

const stats = [
  { value: '8+', label: 'SUNMI Device Models' },
  { value: '3', label: 'Countries Served' },
  { value: '500+', label: 'Businesses Equipped' },
  { value: '2019', label: 'Year Established' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>About Us | Pixel Hardware</title>
        <meta name="description" content="Pixel Hardware is a leading SUNMI distributor across Southeast Asia, delivering smart POS and payment solutions since day one." />
      </Helmet>
      <Header forceLight />

      {/* ── HERO ── */}
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
            About Us
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Bringing SUNMI to<br className="hidden sm:block" /> the region.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Pixel Hardware Trading is the official authorised distributor of SUNMI smart business devices across Cambodia and Southeast Asia.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Our Mission</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
                Smart commerce tools for every business.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                We believe that world-class point-of-sale technology should be accessible to businesses of every size — from a single-counter café to a multi-branch retail chain. SUNMI builds some of the most reliable and elegant POS hardware on the market, and our job is to make sure businesses in this region can actually get their hands on it.
              </p>
              <p className="text-gray-500 leading-relaxed">
                As an official distributor, we bridge SUNMI's global manufacturing excellence with local service, local language support, and local knowledge of how business gets done here.
              </p>
            </motion.div>

            {/* Coded visual */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-56 h-56 bg-orange-500 rounded-[3rem] flex items-center justify-center shadow-2xl shadow-orange-500/25">
                  <span
                    className="text-white font-black text-[9rem] leading-none tracking-tight"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    P
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0a0a0a] rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-wider">SUNMI<br />Partner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#f7f7f7] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <p className="text-5xl font-black text-orange-500 mb-2">{s.value}</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Why Pixel</p>
            <h2 className="text-4xl font-black text-gray-900">What sets us apart.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={item}
                className="border border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to equip your business?</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Browse our full range of SUNMI devices or reach out to our team and we'll help you find the right fit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-8 border border-white/20 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Contact Us
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
