import { motion } from 'framer-motion';
import { Battery, Shield, Camera, Scan, CreditCard, Fingerprint } from 'lucide-react';
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
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/* ─── static data ─── */

const featureCards = [
  { icon: <Battery     className="w-5 h-5 text-orange-500" />, label: '5200mAh Long-Life Battery',  desc: 'Full-shift power without compromise — non-removable, reliable, and built to last.' },
  { icon: <Shield      className="w-5 h-5 text-orange-500" />, label: 'IP54 Dust & Splash Proof',   desc: 'Engineered to withstand dust and liquid splashes on the retail floor or warehouse.' },
  { icon: <Camera      className="w-5 h-5 text-orange-500" />, label: '13MP Rear Camera + Flash',   desc: 'Auto-focus rear camera captures sharp images and documents in any lighting condition.' },
  { icon: <Scan        className="w-5 h-5 text-orange-500" />, label: '1D/2D Built-in Scanner',     desc: 'Fast, accurate barcode reading out of the box — optional laser module available.' },
  { icon: <CreditCard  className="w-5 h-5 text-orange-500" />, label: 'NFC Standard',               desc: 'Native NFC for contactless payments and quick data exchange at the point of sale.' },
  { icon: <Fingerprint className="w-5 h-5 text-orange-500" />, label: 'Fingerprint (Optional)',     desc: 'Optional biometric authentication for secure, frictionless worker access.' },
];


const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all devices from a single dashboard.' },
  { title: 'Smart OTA Scheduling',       desc: 'Schedule over-the-air updates to run during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent battery optimisation.' },
  { title: 'Fully Open Ecosystem',       desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const specCards: { label: string; value: string; orange?: boolean }[] = [
  { label: 'Product Model',   value: 'L3' },
  { label: 'CPU',              value: 'Qualcomm Octa-Core' },
  { label: 'OS',               value: 'Pixel OS\n(Based on Android 11)', orange: true },
  { label: 'Memory',           value: '3GB+32GB\n4GB+64GB optional', orange: true },
  { label: 'Display',          value: '5.5" HD+\n720×1440, IPS' },
  { label: 'Touch',            value: 'Capacitive multi-touch' },
  { label: 'GMS',              value: 'Optional', orange: true },
  { label: 'Barcode Scanner',  value: '1D/2D built-in\nOptional laser module', orange: true },
  { label: 'NFC',              value: 'Standard', orange: true },
  { label: 'SIM Card',         value: '1×Nano SIM' },
  { label: 'SD Card',          value: 'Micro SD card' },
  { label: 'Port',             value: 'USB Type-C OTG', orange: true },
  { label: 'Cellular',         value: '4G/3G/2G' },
  { label: 'Wi-Fi',            value: '2.4GHz/5GHz\n802.11 a/b/g/n/ac' },
  { label: 'Bluetooth',        value: 'BT 5.0, BLE' },
  { label: 'GPS',              value: 'GPS/Glonass/Beidou' },
  { label: 'Camera',           value: 'Rear: 13MP AF + Flash\nFront: 5MP FF', orange: true },
  { label: 'Fingerprint',      value: 'Optional', orange: true },
  { label: 'Audio',            value: 'Speaker + Mic' },
  { label: 'Battery',          value: '5200mAh (non-removable)' },
  { label: 'IP Rating',        value: 'IP54', orange: true },
  { label: 'Adapter',          value: 'Input: AC 100-240V\nOutput: 5V/2A' },
  { label: 'Dimensions',       value: '158×76×10.5 mm' },
  { label: 'Weight',           value: '230g' },
  { label: 'Environment',      value: 'Working: -10°C~50°C\nStorage: -20°C~60°C', orange: true },
  { label: 'Drop Resistance',  value: '1.2m drop resistant', orange: true },
];


/* ══════════════════════════════════════════════════════ */
export default function L3Detail() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-screen pt-[72px] overflow-hidden">
        {/* Poster as background */}
        <img src="/assets/L3/Poster.png" alt="L3" className="absolute inset-0 w-full h-full object-cover object-center" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Text overlay */}
        <div className="relative z-10 flex items-center min-h-[calc(75vh-72px)] sm:min-h-[calc(100vh-72px)]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">

              {/* Category label */}
              <motion.p
                variants={fadeUp} custom={0} initial="hidden" animate="visible"
                className="text-orange-400 font-semibold text-base mb-3"
              >
                Smart Mobile Terminal
              </motion.p>

              {/* Product name */}
              <motion.h1
                variants={fadeUp} custom={1} initial="hidden" animate="visible"
                className="text-[64px] sm:text-[110px] lg:text-[160px] font-black text-white leading-none mb-4 -ml-1"
              >
                L3
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={fadeUp} custom={2} initial="hidden" animate="visible"
                className="text-white/80 text-lg font-light mb-8"
              >
                Efficiency unleashed from start to sale.
              </motion.p>

              {/* Row 1 — OS / DMP / Hyper Wi-Fi */}
              <motion.div
                variants={fadeUp} custom={3} initial="hidden" animate="visible"
                className="flex flex-wrap gap-2 mb-2"
              >
                {[
                  '/assets/L3/Efficiency unleashed from start to sale/os.png',
                  '/assets/L3/Efficiency unleashed from start to sale/dmp.png',
                  '/assets/L3/Efficiency unleashed from start to sale/hyper-wifi-icon.png',
                ].map((src) => (
                  <div key={src} className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2 h-10">
                    <img src={src} alt="" className="h-6 w-auto object-contain brightness-0 invert opacity-90" />
                  </div>
                ))}
              </motion.div>

              {/* Row 2 — Android Enterprise / GMS / EMVCo */}
              <motion.div
                variants={fadeUp} custom={4} initial="hidden" animate="visible"
                className="flex flex-wrap gap-2"
              >
                {[
                  '/assets/L3/Efficiency unleashed from start to sale/aer.png',
                  '/assets/L3/Efficiency unleashed from start to sale/gms.png',
                  '/assets/L3/Efficiency unleashed from start to sale/emvco-icon.png',
                ].map((src) => (
                  <div key={src} className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2 h-10">
                    <img src={src} alt="" className="h-6 w-auto object-contain" />
                  </div>
                ))}
              </motion.div>

            </div>
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
              { value: '5.5"',    label: 'HD+ IPS Display',    orange: false },
              { value: '5200mAh', label: 'Long-Life Battery',  orange: true  },
              { value: 'IP54',    label: 'Dust & Splash Proof', orange: true  },
              { value: '13MP',    label: 'Rear Camera + Flash', orange: false },
            ].map((stat) => (
              <motion.div key={stat.label} variants={item} className="py-7 px-4 sm:py-10 sm:px-6 text-center border-b border-r border-white/5 even:border-r-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className={`text-2xl sm:text-3xl font-black mb-1.5 ${stat.orange ? 'text-orange-500' : 'text-white'}`}>{stat.value}</p>
                <p className="text-gray-500 text-xs font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 2. EFFICIENCY INTRO ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Why L3</p>
          <h2 className="text-5xl sm:text-6xl lg:text-[80px] font-black text-white leading-[1.05] tracking-tight">
            Unique efficiency from<br />
            factory to store with{' '}
            <span className="text-orange-500">L3</span>.
          </h2>
        </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 3. DESIGN ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            {/* text panel */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col justify-center p-8 lg:p-16 bg-white"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Design</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-5">
                Slim profile,<br />serious performance.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                The L3's refined form factor fits naturally in one hand — compact enough for all-day carry, robust enough for the demands of retail and logistics.
              </p>
            </motion.div>
            {/* image panel */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="bg-[#f7f7f7] flex items-center justify-center p-8 sm:p-16 min-h-[280px] sm:min-h-[360px]"
            >
              <img src="/assets/L3/1-Front view.png" alt="L3 design" className="w-44 sm:w-56 object-contain drop-shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 5. FINISH ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden">
            {/* image panel */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="relative bg-[#1a1a1a] flex items-center justify-center p-8 sm:p-16 min-h-[280px] sm:min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.12),transparent)]" />
              <img src="/assets/L3/1-Front view.png" alt="L3 finish" className="relative z-10 w-44 sm:w-60 object-contain drop-shadow-2xl" />
            </motion.div>
            {/* text panel */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col justify-center p-8 lg:p-16 bg-[#141414]"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Built Tough</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
                IP54 rated.<br />Drop-resistant to 1.2m.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                Sealed against dust and splashes, the L3 is engineered to survive real-world retail and warehouse conditions — shift after shift.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4. DISPLAY CALLOUT ━━━━━━━━━━━━━━━━ */}
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
            <span className="text-[clamp(80px,18vw,210px)] font-black text-white leading-none">5.5</span>
            <span className="text-[clamp(40px,8vw,100px)] font-black text-orange-500 mt-[0.08em]">"</span>
          </motion.div>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-gray-500 text-sm font-medium tracking-widest uppercase"
          >
            HD+ IPS · 720×1440 · 400 nits
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 7. PERFORMANCE ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-5">Performance</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Built to handle the rush,{' '}
              <span className="text-gray-500 font-semibold text-3xl sm:text-4xl">multitasking without a miss.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* stat cards */}
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#111] border border-white/8 rounded-2xl p-8 flex items-center gap-6"
              >
                <div>
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Octa Core CPU</p>
                  <p className="text-6xl font-black text-orange-500 leading-none">2.0</p>
                  <p className="text-2xl font-bold text-gray-300">GHz</p>
                </div>
                <div className="flex-1 h-px bg-white/5 hidden sm:block" />
                <div className="hidden sm:block text-right">
                  <p className="text-gray-600 text-xs">Qualcomm</p>
                  <p className="text-gray-400 text-sm font-semibold">Octa-Core</p>
                  <p className="text-gray-600 text-xs">Processor</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#111] border border-white/8 rounded-2xl p-8"
              >
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Ample Storage · Smooth AI</p>
                <div className="flex flex-wrap items-end gap-x-3 gap-y-1 mb-1">
                  <span className="text-[clamp(1.75rem,8vw,2.25rem)] font-black text-white leading-none">3GB</span>
                  <span className="text-gray-600 text-base font-bold mb-0.5">RAM</span>
                  <span className="text-gray-700 text-xl font-light mb-0.5">+</span>
                  <span className="text-[clamp(1.75rem,8vw,2.25rem)] font-black text-white leading-none">32GB</span>
                  <span className="text-gray-600 text-base font-bold mb-0.5">ROM</span>
                </div>
                <p className="text-gray-600 text-sm">4GB RAM + 64GB ROM optional</p>
              </motion.div>
            </div>

            {/* visual card */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/8 min-h-[280px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.15),transparent)]" />
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl border-2 border-orange-500/40 bg-orange-500/8 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl border border-orange-500/60 bg-orange-500/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-md bg-orange-500/60" />
                    </div>
                  </div>
                  {['-top-2 -left-2', '-top-2 -right-2', '-bottom-2 -left-2', '-bottom-2 -right-2'].map((pos, i) => (
                    <div key={i} className={`absolute ${pos} w-2 h-2 rounded-full bg-orange-500/50`} />
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-lg tracking-wide">Qualcomm</p>
                  <p className="text-orange-400 text-sm font-medium">High-Performance Processor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 8. FEATURES GRID ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight max-w-xl">
              Packed with features for every workflow.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {featureCards.map((card) => (
              <motion.div
                key={card.label}
                variants={item}
                className="group border border-gray-200 hover:border-orange-400 rounded-2xl p-7 transition-all duration-200 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{card.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 11. PIXEL OS 4.0 ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden">
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

      {/* ━━━━━━━━━━━━━━━━ 13. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">L3 Tech Specs</h2>
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

      {/* ━━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━━ */}
      <Footer />
      <CookieBanner />
    </div>
  );
}
