import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/* ─── static data ─── */
const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all devices from a single dashboard.' },
  { title: 'Smart OTA Scheduling',       desc: 'Schedule over-the-air updates to run during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent battery optimisation.' },
  { title: 'Fully Open Ecosystem',       desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const highlights = [
  { title: 'Minimalist and durable,\nas all 3rd Gen Terminals.', desc: 'With its sleek aluminum body housing a 15.6" thin-bezel FHD screen, D3 PRO provides a tidy cable management solution with intentionally streamlined stand and base. This design not only ensures durability but also adds a touch of style, consistent with all 3rd generation products.' },
  { title: 'More powerful, not just\nin performance.', desc: 'D3 PRO, coming with a Qualcomm platform, 4GB RAM + 64GB ROM memory, and fingerprint login for Pixel One ID service, will offer you improved user experience.' },
];

/* 10 angle shots — label used as alt text */
const galleryViews = [
  { src: '/assets/D3/1-Front view.png',    label: 'Front View' },
  { src: '/assets/D3/2-Rear view.png',     label: 'Rear View' },
  { src: '/assets/D3/3-Right view.png',    label: 'Right View' },
  { src: '/assets/D3/4-Left view.png',     label: 'Left View' },
  { src: '/assets/D3/5-Top view.png',      label: 'Top View' },
  { src: '/assets/D3/6-Bottom view.png',   label: 'Bottom View' },
  { src: '/assets/D3/7-Front right.png',   label: 'Front Right' },
  { src: '/assets/D3/8-Front left.png',    label: 'Front Left' },
  { src: '/assets/D3/9-Back right.png',    label: 'Back Right' },
  { src: '/assets/D3/10-Back left.png',    label: 'Back Left' },
];

const accessories = [
  { src: '/assets/D3/acessories/Printer.png',    label: 'Receipt Printer' },
  { src: '/assets/D3/acessories/2nd screen.png', label: '2nd Screen' },
  { src: '/assets/D3/acessories/download.png',   label: '2D Handheld Scanner' },
];

const specCards: { label: string; value: string }[] = [
  { label: 'Product Model',    value: 'F3510' },
  { label: 'OS',               value: 'Pixel OS\n(based on Android 13)' },
  { label: 'Processor',        value: 'Qualcomm hexa-core\nup to 2.4GHz' },
  { label: 'Memory',           value: '4GB RAM\n64GB ROM' },
  { label: 'Display',          value: '15.6" FHD\n1920×1080\n10-point capacitive touch' },
  { label: 'Speaker',          value: '1×3W' },
  { label: 'Network',          value: 'LAN 1000M' },
  { label: 'Wi-Fi',            value: '2.4GHz & 5GHz\nIEEE 802.11 a/b/g/n/ac' },
  { label: 'Bluetooth',        value: 'BT 5.0\nBLE supported' },
  { label: 'Button',           value: '1×Power button\n(Fingerprint optional)' },
  { label: 'Power Adapter',    value: 'Input: AC 100~240V/1.5A\nOutput: DC 24V/1.5A/36W' },
  { label: 'External Memory',  value: '1×MicroSD (TF card)\nUp to 1TB' },
  { label: 'Ports',            value: '1×USB-A 3.0\n2×USB-A 2.0\n1×RJ11 serial\n1×RJ12 cash drawer\n1×RJ45 LAN\n1×Audio jack\n1×USB-C 2.0\n1×MicroUSB debug' },
  { label: 'Weight',           value: 'D3 PRO: 4.5kg\n10.1" monitor: 0.88kg' },
  { label: 'Environment',      value: 'Operating: 0°C~40°C\nStorage: -20°C~60°C' },
  { label: 'Indicator Light',  value: 'Blue (Power)' },
  { label: 'Accessories',      value: '10.1" separate monitor\nHD 1280×800\nCapacitive multitouch' },
  { label: 'Dimensions',       value: '380×195×310 mm' },
];

/* ══════════════════════════════════════════════════════ */
export default function D3ProDetail() {
  const [selectedAcc, setSelectedAcc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>D3 Pro Desktop Terminal | Pixel Hardware</title>
        <meta name="description" content="The D3 Pro is a high-performance desktop POS terminal with a sleek design, fast processor, and wide peripheral support." />
      </Helmet>
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0a0a0a] pt-[72px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={item} className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Smart Desktop Terminal
              </motion.p>
              <motion.h1 variants={item} className="text-[80px] sm:text-[110px] lg:text-[130px] font-black text-white leading-none mb-6 -ml-1">
                D3 PRO
              </motion.h1>
              <motion.p variants={item} className="text-white/60 text-xl font-light mb-10 max-w-sm">
                Your essential desktop to grow business.
              </motion.p>
              {/* Badge logos */}
              <motion.div variants={item} className="flex flex-wrap gap-3">
                {[
                  { src: '/assets/L3/Efficiency unleashed from start to sale/os.png',   invert: true },
                  { src: '/assets/L3/Efficiency unleashed from start to sale/dmp.png', invert: true },
                  { src: '/assets/L3/Efficiency unleashed from start to sale/gms.png', invert: false },
                ].map((b) => (
                  <div key={b.src} className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2 h-10">
                    <img src={b.src} alt="" className={`h-6 w-auto object-contain ${b.invert ? 'brightness-0 invert opacity-90' : ''}`} />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right device image */}
            <motion.div
              variants={fadeIn} initial="hidden" animate="visible"
              className="flex justify-center"
            >
              <img
                src="/assets/D3/1-Front view.png"
                alt="D3 PRO Front View"
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ STATS STRIP ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {[
              { value: '15.6"',    label: 'FHD Thin-Bezel Display' },
              { value: '4GB+64GB', label: 'RAM + ROM',              orange: true },
              { value: 'Qualcomm', label: 'Hexa-Core Platform',     orange: true },
              { value: 'LAN 1G',   label: 'Gigabit Network' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={item} className="py-7 px-4 sm:py-10 sm:px-6 text-center border-b border-r border-white/5 even:border-r-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className={`text-2xl sm:text-3xl font-black mb-1.5 ${stat.orange ? 'text-orange-500' : 'text-white'}`}>{stat.value}</p>
                <p className="text-gray-500 text-xs font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 2. KEY HIGHLIGHTS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#141414] border border-white/6 rounded-2xl p-10"
              >
                <h3 className="text-2xl font-black text-white leading-snug mb-4 whitespace-pre-line">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 3. DISPLAY CALLOUT ━━━━━━━━━━━━━━━━ */}
      <section className="bg-black py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6"
          >
            Display
          </motion.p>
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="flex items-start justify-center leading-none mb-5"
          >
            <span className="text-[clamp(80px,18vw,210px)] font-black text-white leading-none">15.6</span>
            <span className="text-[clamp(40px,8vw,100px)] font-black text-orange-500 mt-[0.08em]">"</span>
          </motion.div>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-gray-500 text-sm font-medium tracking-widest uppercase"
          >
            FHD 1920×1080 · 10-point Capacitive Touch · Thin-Bezel
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4. PRODUCT SHOWCASE ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex justify-center"
            >
              <img
                src="/assets/D3/D3 PRO with UI.png"
                alt="D3 PRO with UI"
                className="w-full max-w-lg object-contain drop-shadow-2xl rounded-xl"
              />
            </motion.div>

            <div className="flex flex-col gap-10">
              {[
                { title: 'Cables Concealed',      desc: 'Intentionally streamlined stand and base keep all cables hidden — a clean, professional setup every time.' },
                { title: 'Qualcomm Platform',     desc: 'Hexa-core processor up to 2.4GHz with 4GB RAM + 64GB ROM for seamless multitasking and fast response.' },
                { title: '15.6" Thin-Bezel FHD', desc: 'Crystal-clear 1920×1080 resolution with 10-point touch — built for the busiest business environments.' },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  className="flex gap-5"
                >
                  <div className="w-1 rounded-full bg-orange-500 flex-shrink-0 mt-1" style={{ minHeight: '48px' }} />
                  <div>
                    <h3 className="text-white font-black text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 5. 360° GALLERY ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#050505] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Design</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Every angle,<br />
              <span className="text-gray-500 font-semibold text-2xl sm:text-3xl">engineered with intention.</span>
            </h2>
          </motion.div>

          {/* Featured + grid layout */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-4 mb-4">
            {/* Large featured — front view */}
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="bg-[#111] rounded-2xl border border-white/6 flex items-center justify-center p-10 aspect-square lg:aspect-auto lg:row-span-2"
            >
              <img
                src="/assets/D3/7-Front right.png"
                alt="D3 PRO Front Right"
                className="w-full max-w-xs object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Top-right: rear + right */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-4"
            >
              {galleryViews.slice(1, 5).map((v) => (
                <motion.div
                  key={v.label}
                  variants={item}
                  className="bg-[#111] rounded-2xl border border-white/6 flex flex-col items-center justify-center p-6 gap-3 hover:border-orange-500/25 transition-colors"
                >
                  <img src={v.src} alt={v.label} className="h-28 object-contain drop-shadow-lg" />
                  <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">{v.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom row — 5 more angles */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {galleryViews.slice(5).map((v) => (
              <motion.div
                key={v.label}
                variants={item}
                className="bg-[#111] rounded-2xl border border-white/6 flex flex-col items-center justify-center p-6 gap-3 hover:border-orange-500/25 transition-colors"
              >
                <img src={v.src} alt={v.label} className="h-24 object-contain drop-shadow-lg" />
                <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">{v.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 6. EXTENDABLE MODULES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Modules</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Extendable modules designed for<br />
              <span className="text-orange-500">your growing business.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: '10" Customer Display', desc: 'Optional NFC & Tap on Glass to support SoftPOS payments. Plug-and-play, no assembly required.' },
              { title: 'Secondary Display',    desc: 'Connect a secondary display with a USB cable and offer the best interaction experience to your customers.' },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                variants={fadeUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#141414] border border-white/6 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mb-5" />
                <h3 className="text-white font-black text-lg mb-3">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 7. PIXEL OS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-white font-black text-5xl leading-none">P</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                Pixel OS 4.0
              </h2>
              <p className="text-xl font-medium text-gray-400 leading-relaxed max-w-xs">
                Built for business. Faster updates, smarter management, total control.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              {osFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  variants={fadeUp} custom={i * 0.12 + 0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  className="bg-[#141414] border border-white/6 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mb-4" />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{feat.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 8. ACCESSORIES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-6"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Accessories</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight whitespace-nowrap mb-6">
              Expanded functionality.
            </h2>
            <p className="text-gray-500 font-semibold text-2xl sm:text-3xl">3 compatible accessories.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left — video placeholder */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#141414] border border-white/6 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[9px] border-b-[9px] border-l-[16px] border-t-transparent border-b-transparent border-l-white/50 ml-1" />
                </div>
                <p className="text-gray-600 text-[11px] font-semibold tracking-[0.15em] uppercase">Video Coming Soon</p>
              </div>
              <p className="text-gray-500 text-xs mt-6">*The appearance of products will be based on the final production version.</p>
            </motion.div>

            {/* Right — accessory cards */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-wrap gap-6"
            >
              {accessories.map((acc) => {
                const selected = selectedAcc === acc.label;
                return (
                  <motion.div
                    key={acc.label}
                    variants={item}
                    onClick={() => setSelectedAcc(selected ? null : acc.label)}
                    className={`border rounded-xl p-4 flex flex-col cursor-pointer transition-all duration-200 w-[160px] ${selected ? 'bg-white border-orange-400 shadow-md' : 'bg-[#141414] border-white/6 hover:border-orange-500/30'}`}
                  >
                    <p className={`text-[11px] font-semibold leading-snug mb-3 text-center ${selected ? 'text-gray-900' : 'text-white'}`}>{acc.label}</p>
                    <div className="flex items-center justify-center min-h-[60px]">
                      <img src={acc.src} alt={acc.label} className="max-h-24 object-contain" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 9. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">D3 PRO Tech Specs</h2>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {specCards.map((card) => (
              <div key={card.label} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all">
                <p className="text-[11px] font-bold text-gray-900 mb-2 whitespace-pre-line leading-snug">{card.label}</p>
                <p className="text-xs leading-relaxed whitespace-pre-line text-gray-900">{card.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}