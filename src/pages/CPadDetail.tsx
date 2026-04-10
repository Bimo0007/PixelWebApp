import { motion } from 'framer-motion';
import {
  Wifi, Bluetooth, CreditCard, Camera, Battery, Shield,
} from 'lucide-react';
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
const proFeatures = [
  { icon: <CreditCard className="w-5 h-5 text-orange-500" />, label: 'NFC SoftPOS Payment', desc: 'Built-in NFC enables tap-to-pay, QR code, and EMV-compliant card transactions directly on screen.' },
  { icon: <Wifi        className="w-5 h-5 text-orange-500" />, label: 'Wi-Fi 6 Connectivity',  desc: 'Next-gen 802.11ax Wi-Fi for blazing speed, reduced congestion, and rock-solid connections.' },
  { icon: <Bluetooth   className="w-5 h-5 text-orange-500" />, label: 'Bluetooth 5.3',          desc: 'Pair peripherals instantly with ultra-low-latency Bluetooth 5.3 — printers, scanners, and more.' },
  { icon: <Camera      className="w-5 h-5 text-orange-500" />, label: 'HD Camera + Scanner',    desc: 'Rear camera with 2D barcode scanning for product lookup, loyalty redemption, and document capture.' },
  { icon: <Battery     className="w-5 h-5 text-orange-500" />, label: '8,000 mAh Battery',      desc: 'All-day power for non-stop operations — no mid-shift charging required.' },
  { icon: <Shield      className="w-5 h-5 text-orange-500" />, label: 'IP54 Rated',             desc: 'Dust and splash-resistant housing built for busy restaurants, factories, and outdoor environments.' },
];



const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all CPads from a single centralised dashboard.' },
  { title: 'Smart OTA Scheduling',       desc: 'Push firmware and app updates silently during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent battery optimisation.' },
  { title: 'Fully Open Ecosystem',       desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const specCards: { label: string; value: string; orange?: boolean }[] = [
  { label: 'Product Model',      value: 'CPad (8.7" / 11" / 14")' },
  { label: 'CPU',                value: 'Qualcomm Octa-Core\n2.4GHz, 6nm' },
  { label: 'OS',                 value: 'Pixel OS\n(Based on Android 14)', orange: true },
  { label: 'Memory',             value: '8GB RAM\n128GB ROM', orange: true },
  { label: 'Display (8.7")',     value: '1340×800\nIPS Capacitive Touch' },
  { label: 'Display (11")',      value: '1920×1200 WUXGA\nIPS Multi-touch' },
  { label: 'Display (14")',      value: '1920×1200\nCapacitive Touch' },
  { label: 'GMS',                value: 'Optional', orange: true },
  { label: 'NFC',                value: 'SoftPOS + Tap-to-Pay\nEMV Compliant', orange: true },
  { label: 'Barcode Scanner',    value: '2D built-in\n(optional)', orange: true },
  { label: 'Fingerprint',        value: 'Optional', orange: true },
  { label: 'SIM / eSIM',         value: '1×Nano SIM\neSIM Support', orange: true },
  { label: 'SD Card',            value: 'Micro SD card' },
  { label: 'Port',               value: 'USB Type-C', orange: true },
  { label: 'Cellular',           value: '4G/3G/2G' },
  { label: 'Wi-Fi',              value: 'Wi-Fi 6\n802.11 a/b/g/n/ac/ax' },
  { label: 'Bluetooth',          value: 'BT 5.3, BLE' },
  { label: 'GPS',                value: 'GPS/Glonass/Beidou', orange: true },
  { label: 'Camera',             value: 'Rear: 13MP AF + Flash\nFront: 5MP FF', orange: true },
  { label: 'Audio',              value: 'Speaker + Mic' },
  { label: 'Battery',            value: '8,000 mAh\n(non-removable)' },
  { label: 'IP Rating',          value: 'IP54', orange: true },
  { label: 'Modular Accessories',value: '15+ magnetic snap-on accessories', orange: true },
  { label: 'Adapter',            value: 'Input: AC 100-240V\nOutput: 5V/3A' },
  { label: 'Weight (11")',       value: '~680g' },
  { label: 'Environment',        value: 'Working: -10°C~50°C\nStorage: -20°C~60°C', orange: true },
];


/* ══════════════════════════════════════════════════════ */
export default function CPadDetail() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen pt-[72px] overflow-hidden">
        <img src="/assets/cpad/hq720.jpg" alt="CPad" className="absolute inset-0 w-full h-full object-cover object-top" />
      </section>

      {/* ━━━━━━━━━━━━━━━━ STATS STRIP ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {[
              { value: '3 Sizes',  label: '8.7" · 11" · 14"',         orange: false },
              { value: '8,000mAh', label: 'All-Day Battery',           orange: true  },
              { value: 'IP54',     label: 'Dust & Splash Proof',       orange: true  },
              { value: 'Wi-Fi 6',  label: '802.11ax Connectivity',     orange: false },
            ].map((stat) => (
              <motion.div key={stat.label} variants={item} className="py-7 px-4 sm:py-10 sm:px-6 text-center border-b border-r border-white/5 even:border-r-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className={`text-2xl sm:text-3xl font-black mb-1.5 ${stat.orange ? 'text-orange-500' : 'text-white'}`}>{stat.value}</p>
                <p className="text-gray-500 text-xs font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 2. THREE SIZES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
              Three sizes.<br />
              One PAD for{' '}
              <span className="text-orange-500">diverse applications.</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Built for{' '}
              <span className="text-orange-400 font-semibold">retail</span>,{' '}
              <span className="text-orange-400 font-semibold">restaurant</span>,{' '}
              <span className="text-orange-400 font-semibold">service</span>{' '}
              industries and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mt-16 items-end">
            {[
              { size: '8.7"', img: '/assets/cpad/8.7.png',  bold: 'Easily',        rest: 'Portable',        desc: 'Lightweight and flexible,\nideal for mobile services.', h: '255px' },
              { size: '11"',  img: '/assets/cpad/11.png',   bold: 'Effortlessly',  rest: 'Versatile',       desc: 'Classic choice for\nmost demands.',                      h: '270px' },
              { size: '14"',  img: '/assets/cpad/14.png',   bold: 'Large',         rest: 'Display',         desc: 'Comprehensive visibility for\nefficient collaboration.',  h: '260px' },
            ].map((s, i) => (
              <motion.div
                key={s.size}
                variants={fadeUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={s.img}
                  alt={`CPad ${s.size}`}
                  className="object-contain drop-shadow-2xl mb-8 w-full"
                  style={{ height: s.h }}
                />
                <p className="text-4xl font-black text-white mb-2">{s.size}</p>
                <p className="text-lg font-black text-white mb-2">
                  <span className="font-black">{s.bold}</span>{' '}
                  <span className="font-normal">{s.rest}</span>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-6">{s.desc}</p>
                <p className="text-gray-500 text-xs">Now available.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 3. SLEEK & STURDY DESIGN ━━━━━━━━━━━━━━━━ */}
      <section className="bg-black py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Sleek and Sturdy Design
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center mb-10"
          >
            <img
              src="/assets/cpad/Sleek and Sturdy Design.png"
              alt="CPad sleek design — 7mm profile, 526g"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-white font-bold text-base mb-2">
              The 11" model weighs only 526g and features<br />an ultra-slim profile as thin as 7mm.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              Crafted from a premium aluminium-magnesium alloy, it offers outstanding corrosion and
              wear resistance while combining elegance with durability for high-demand business environments.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 7. ACCESSORIES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-6"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Accessories</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
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
              <h3 className="text-white font-black text-2xl mt-5 mb-1">Multi-Function Base</h3>
              <p className="text-gray-500 text-xs mt-6">*The appearance of products will be based on the final production version.</p>
            </motion.div>

            {/* Right — single accessory card */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="bg-[#141414] border border-white/6 rounded-xl p-4 flex flex-col hover:border-orange-500/30 transition-colors w-[160px]"
            >
              <p className="text-white text-[11px] font-semibold leading-snug mb-3 text-center">Multi-Function Base</p>
              <div className="flex items-center justify-center min-h-[60px]">
                <img
                  src="/assets/cpad/acessories/Multi-Function Base.jpg"
                  alt="Multi-Function Base"
                  className="max-h-16 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 8. PROFESSIONAL FEATURES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-14 text-center"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Professional Features.<br />
              <span className="text-gray-500 font-semibold text-2xl sm:text-3xl">One PAD for various tasks.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {proFeatures.map((feat) => (
              <motion.div
                key={feat.label}
                variants={item}
                className="bg-[#111] border border-white/6 rounded-2xl p-7 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{feat.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 9. IMPRESSIVE PERFORMANCE ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-5">Performance</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Impressive Performance.{' '}
              <span className="text-gray-500 font-semibold text-2xl sm:text-3xl">Master complex tasks with one PAD.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <motion.div
                variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#111] border border-white/8 rounded-2xl p-8 flex items-center gap-6"
              >
                <div>
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Octa Core CPU</p>
                  <p className="text-6xl font-black text-orange-500 leading-none">2.4</p>
                  <p className="text-2xl font-bold text-gray-300">GHz</p>
                </div>
                <div className="flex-1 h-px bg-white/5 hidden sm:block" />
                <div className="hidden sm:block text-right">
                  <p className="text-gray-600 text-xs">Qualcomm</p>
                  <p className="text-gray-400 text-sm font-semibold">Octa-Core</p>
                  <p className="text-gray-600 text-xs">6nm Process</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#111] border border-white/8 rounded-2xl p-8"
              >
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Ample Storage · Smooth Performance</p>
                <div className="flex flex-wrap items-end gap-x-3 gap-y-1 mb-1">
                  <span className="text-[clamp(1.75rem,8vw,2.25rem)] font-black text-white leading-none">8GB</span>
                  <span className="text-gray-600 text-base font-bold mb-0.5">RAM</span>
                  <span className="text-gray-700 text-xl font-light mb-0.5">+</span>
                  <span className="text-[clamp(1.75rem,8vw,2.25rem)] font-black text-white leading-none">128GB</span>
                  <span className="text-gray-600 text-base font-bold mb-0.5">ROM</span>
                </div>
                <p className="text-gray-600 text-sm">Handles multiple apps simultaneously with ease</p>
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
                  <p className="text-orange-400 text-sm font-medium">6nm · High-Performance Processor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 11. BRAND IDENTITY ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4 block">Customisation</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
                Brand Identity.<br />
                <span className="text-gray-400 font-semibold text-2xl lg:text-3xl">Elevate your business style.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                CPad is available in multiple finishes and supports custom boot screens, launcher themes, and branded accessories — so every customer touchpoint reflects your identity.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex justify-center gap-8"
            >
              {[
                { label: 'Midnight Black', filter: 'none' },
                { label: 'Pearl White',    filter: 'brightness(1.8) saturate(0)' },
                { label: 'Space Grey',     filter: 'brightness(1.2) saturate(0.3)' },
              ].map((opt, i) => (
                <div key={opt.label} className="flex flex-col items-center gap-3">
                  <img
                    src="/assets/cpad/1 Front view.png"
                    alt={opt.label}
                    className="object-contain drop-shadow-lg"
                    style={{ height: i === 1 ? '200px' : '170px', filter: opt.filter }}
                  />
                  <span className="text-xs text-gray-500 font-semibold">{opt.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 14. PIXEL OS 4.0 ━━━━━━━━━━━━━━━━ */}
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

      {/* ━━━━━━━━━━━━━━━━ 15. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">CPad Tech Specs</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {specCards.map((card) => (
              <motion.div
                key={card.label}
                variants={item}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <p className="text-[11px] font-bold text-gray-900 mb-2 whitespace-pre-line leading-snug">{card.label}</p>
                <p className="text-xs leading-relaxed whitespace-pre-line text-gray-900">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
