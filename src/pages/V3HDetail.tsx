import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard, Shield, Printer, Tag, Camera, Scan,
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
  { icon: <CreditCard className="w-5 h-5 text-orange-500" />, label: 'NFC Payment Support',       desc: 'Built-in NFC for fast, contactless transactions at checkout.' },
  { icon: <Shield       className="w-5 h-5 text-orange-500" />, label: 'Fingerprint (Optional)',    desc: 'Optional biometric authentication for secure, quick access.' },
  { icon: <Printer      className="w-5 h-5 text-orange-500" />, label: 'Upgraded Dual Printing',   desc: 'Scratch-free receipt printing and high-speed label printing built in.' },
  { icon: <Tag          className="w-5 h-5 text-orange-500" />, label: 'Label Printing',            desc: 'High-speed label printing for retail tagging and logistics workflows.' },
  { icon: <Camera       className="w-5 h-5 text-orange-500" />, label: 'Ultra-HD Camera',           desc: '5MP rear camera with flash — scan barcodes and capture documents.' },
  { icon: <Scan         className="w-5 h-5 text-orange-500" />, label: 'Laser HD Scanner (Optional)', desc: 'Optional laser module for lightning-fast 1D/2D barcode reading.' },
];

const accessories = [
  { src: '/assets/v3h/acessories/download.png',  label: '2D Handheld Scanner' },
  { src: '/assets/v3h/acessories/handstrap.png', label: 'Hand Strap' },
  { src: '/assets/v3h/acessories/lanyard.png',   label: 'Lanyard' },
];

const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all devices from a single dashboard.' },
  { title: 'Smart OTA Scheduling',        desc: 'Schedule over-the-air updates to run during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent battery optimisation.' },
  { title: 'Fully Open Ecosystem',        desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const specCards: { label: string; value: string; orange?: boolean }[] = [
  { label: 'Product Model',        value: 'T5F1A' },
  { label: 'CPU',                   value: 'Qualcomm octa-core' },
  { label: 'OS',                    value: 'SUNMI OS\n(Based on Android 13)\n*Support Android Version Upgrade', orange: true },
  { label: 'Memory',                value: '4GB+64GB' },
  { label: 'Display',               value: '6.75"HD+, 720×1600, IPS' },
  { label: 'Touch',                 value: 'Capacitive multi-touch screen' },
  { label: 'GMS',                   value: 'Optional', orange: true },
  { label: 'Printer',               value: 'High speed 58mm thermal\nPrint speed: 80mm/s Max.\nRoll Diameter: 50mm\nReceipt & label printing', orange: true },
  { label: 'Button',                value: 'Power on/off\nVolume up/down\nScan button ×2 (optional)' },
  { label: 'SIM Card Slot',         value: '1×Nano SIM card' },
  { label: 'PSAM',                  value: '2×PSAM', orange: true },
  { label: 'eSIM',                  value: 'Support', orange: true },
  { label: 'SD Card',               value: 'Micro SD card' },
  { label: 'Port',                  value: 'USB Type-C OTG', orange: true },
  { label: 'Cellular',              value: '4G/3G/2G' },
  { label: 'Wi-Fi',                 value: '2.4GHz/5GHz\nIEEE 802.11 a/b/g/n/ac' },
  { label: 'Bluetooth',             value: 'BT 2.1/3.0/4.2/5.0, BLE' },
  { label: 'GPS',                   value: 'GPS/Glonass/Beidou/Galileo' },
  { label: 'Camera',                value: 'Rear: 5MP AF + Flash\n1D/2D scan (8M optional)\nFront: 2MP FF (optional)', orange: true },
  { label: 'Scanner',               value: 'Optional', orange: true },
  { label: 'NFC',                   value: 'Optional', orange: true },
  { label: 'Fingerprint',           value: 'Optional', orange: true },
  { label: 'Hyper Wi-Fi',           value: 'Optional', orange: true },
  { label: 'Audio',                 value: 'Speaker 95dB' },
  { label: 'Battery',               value: 'Removable 7.7V 3100mAh' },
  { label: 'Pogo Pin',              value: '6 pin extend USB OTG', orange: true },
  { label: 'Adapter',               value: 'Input: AC 100-240V\nOutput: 5V/2A' },
  { label: 'Dimensions',            value: '238×81.8×16.8 mm' },
  { label: 'Total Weight',          value: '419g (battery incl.)' },
  { label: 'Environment',           value: 'Working: -10°C~50°C\nStorage: -20°C~60°C', orange: true },
  { label: 'Accessories\n(Optional)', value: 'Multi-function cradle\nSilicon cover\nTempered glass\nSling\nHand strap', orange: true },
];


/* ══════════════════════════════════════════════════════════════════════ */
export default function V3HDetail() {
  const [selectedAcc, setSelectedAcc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-screen pt-[72px] overflow-hidden">
        <img src="/assets/v3h/Poster.png" alt="V3H" className="absolute inset-0 w-full h-full object-cover object-center" />

        <div className="relative z-10 flex items-center min-h-[calc(75vh-72px)] sm:min-h-[calc(100vh-72px)]">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">

              <motion.p
                variants={fadeUp} custom={0} initial="hidden" animate="visible"
                className="text-orange-500 font-semibold text-sm mb-2"
              >
                Smart Mobile Terminal
              </motion.p>

              <motion.p
                variants={fadeUp} custom={1} initial="hidden" animate="visible"
                className="text-gray-900 text-2xl font-bold mb-4"
              >
                Pixel V3 Family
              </motion.p>

              <motion.h1
                variants={fadeUp} custom={2} initial="hidden" animate="visible"
                className="text-[42px] sm:text-[56px] font-black text-gray-900 leading-tight mb-2"
              >
                Beyond the classics,
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={3} initial="hidden" animate="visible"
                className="text-gray-800 text-lg font-medium mb-8"
              >
                unveiling a new era of digital experience.
              </motion.p>

              {/* Badges — single row */}
              <motion.div
                variants={fadeUp} custom={4} initial="hidden" animate="visible"
                className="flex flex-wrap gap-2"
              >
                {[
                  { src: '/assets/v3h/Efficiency unleashed from start to sale/os.png',              invert: true  },
                  { src: '/assets/v3h/Efficiency unleashed from start to sale/dmp.png',             invert: true  },
                  { src: '/assets/v3h/Efficiency unleashed from start to sale/hyper-wifi-icon.png', invert: true  },
                  { src: '/assets/v3h/Efficiency unleashed from start to sale/gms.png',             invert: false },
                ].map((b) => (
                  <div key={b.src} className="flex items-center bg-white/60 backdrop-blur-sm border border-black/10 rounded-lg px-4 py-2.5 h-12">
                    <img src={b.src} alt="" className={`h-8 w-auto object-contain ${b.invert ? 'brightness-0' : ''}`} />
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
              { value: '6.75"',   label: 'HD+ IPS Display',    orange: false },
              { value: '3100mAh', label: 'Removable Battery',  orange: true  },
              { value: 'IP54',    label: 'Dust & Splash Proof', orange: true  },
              { value: '5MP',     label: 'Camera + Flash',      orange: false },
            ].map((stat) => (
              <motion.div key={stat.label} variants={item} className="py-7 px-4 sm:py-10 sm:px-6 text-center border-b border-r border-white/5 even:border-r-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className={`text-2xl sm:text-3xl font-black mb-1.5 ${stat.orange ? 'text-orange-500' : 'text-white'}`}>{stat.value}</p>
                <p className="text-gray-500 text-xs font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4. SLEEK DESIGN ━━━━━━━━━━━━━━━━ */}
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
                Sleek and ergonomic design.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                Redesigned 3rd gen form factor delivers a more comfortable grip and a refined, modern profile built for all-day business use.
              </p>
            </motion.div>
            {/* image panel */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="bg-[#f7f7f7] flex items-center justify-center p-8 sm:p-16 min-h-[280px] sm:min-h-[360px]"
            >
              <img src="/assets/v3h/Front view.png" alt="V3H design" className="w-44 sm:w-56 object-contain drop-shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 5. METALLIC FINISH ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden">
            {/* image panel */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="relative bg-[#1a1a1a] flex items-center justify-center p-8 sm:p-16 min-h-[280px] sm:min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.12),transparent)]" />
              <img src="/assets/v3h/Front view.png" alt="V3H metallic" className="relative z-10 w-44 sm:w-60 object-contain drop-shadow-2xl" />
            </motion.div>
            {/* text panel */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col justify-center p-8 lg:p-16 bg-[#141414]"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Finish</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
                Modern metallic finish.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                Premium metallic surface engineered to withstand the demands of daily business use — looking sharp at every customer touchpoint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 6. DISPLAY ━━━━━━━━━━━━━━━━ */}
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
            <span className="text-[clamp(80px,18vw,210px)] font-black text-white leading-none">6.75</span>
            <span className="text-[clamp(40px,8vw,100px)] font-black text-orange-500 mt-[0.08em]">"</span>
          </motion.div>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-gray-500 text-sm font-medium tracking-widest uppercase"
          >
            HD+ IPS · 720×1600 · 400 nits
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
              Performance upgrades,{' '}
              <span className="text-gray-500 font-semibold text-3xl sm:text-4xl">tackling multitasking seamlessly.</span>
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
                  <p className="text-6xl font-black text-orange-500 leading-none">2.4</p>
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
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-4xl font-black text-white">4GB</span>
                  <span className="text-gray-600 text-xl font-bold mb-1">RAM</span>
                  <span className="text-gray-700 text-2xl font-light mb-1">+</span>
                  <span className="text-4xl font-black text-white">64GB</span>
                  <span className="text-gray-600 text-xl font-bold mb-1">ROM</span>
                </div>
                <p className="text-gray-600 text-sm">3GB RAM + 32GB ROM optional</p>
              </motion.div>
            </div>

            {/* visual card */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/8 min-h-[280px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.15),transparent)]" />
              {/* subtle grid */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="relative z-10 flex flex-col items-center gap-4">
                {/* processor icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl border-2 border-orange-500/40 bg-orange-500/8 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl border border-orange-500/60 bg-orange-500/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-md bg-orange-500/60" />
                    </div>
                  </div>
                  {/* corner pins */}
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
              Feature upgrades for versatile use.
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

      {/* ━━━━━━━━━━━━━━━━ 10. ACCESSORIES ━━━━━━━━━━━━━━━━ */}
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
                    className={`border rounded-xl p-4 flex flex-col cursor-pointer transition-all duration-200 w-[160px] ${
                      selected
                        ? 'bg-white border-orange-400 shadow-md'
                        : 'bg-[#141414] border-white/6 hover:border-orange-500/30'
                    }`}
                  >
                    <p className={`text-[11px] font-semibold leading-snug mb-3 text-center ${selected ? 'text-gray-900' : 'text-white'}`}>
                      {acc.label}
                    </p>
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

      {/* ━━━━━━━━━━━━━━━━ 11. PIXEL OS 4.0 ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* left */}
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

            {/* right 2×2 */}
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

      {/* ━━━━━━━━━━━━━━━━ 12. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">V3H Tech Specs</h2>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {specCards.map((card) => (
              <div
                key={card.label}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <p className="text-[11px] font-bold text-gray-900 mb-2 whitespace-pre-line leading-snug">{card.label}</p>
                <p className="text-xs leading-relaxed whitespace-pre-line text-gray-900">{card.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 14. FOOTER ━━━━━━━━━━━━━━━━ */}
      <Footer />
      <CookieBanner />
    </div>
  );
}
