import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

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

const sizes = [
  { size: '18.5"', label: 'Compact and Efficient',  desc: 'Perfect for tight counter spaces and small retail setups.' },
  { size: '22"',   label: 'Perfect Aspect Ratio',    desc: 'The sweet spot for retail POS and self-ordering.' },
  { size: '27"',   label: 'Large Screen for Details', desc: 'The preferred choice for restaurant kitchen displays.' },
];

const features = [
  { highlight: '16mm',  title: 'Bezel-less Display',    desc: 'Ultra-narrow 16mm bezel with a slim 17mm profile for a sleek, modern look.' },
  { highlight: '1080p', title: 'FHD Resolution',         desc: '1920×1080 FHD with 400 nits brightness and anti-fingerprint coating.' },
  { highlight: '8-Core',title: 'Powerful Performance',   desc: 'Qualcomm Octa-Core CPU at 2.7GHz with 6nm manufacturing process.' },
  { highlight: '10pt',  title: 'Multi-touch',            desc: '10-point capacitive touch for fluid, responsive interaction.' },
  { highlight: 'IP54',  title: 'Dust & Splash Resistant',desc: 'Ruggedised for busy retail, F&B, and healthcare environments.' },
  { highlight: '8GB',   title: 'Ample Memory',           desc: '8GB RAM + 256GB ROM for smooth multitasking and storage.' },
];

const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all FLEX 3 units from a single dashboard.' },
  { title: 'Smart OTA Scheduling',       desc: 'Schedule over-the-air updates to run during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent power management.' },
  { title: 'Fully Open Ecosystem',       desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const specCards: { label: string; value: string; orange?: boolean }[] = [
  { label: 'Display Sizes',    value: '18.5" / 22" / 27"' },
  { label: 'Resolution',       value: '1920×1080 FHD' },
  { label: 'Brightness',       value: '400 nits', orange: true },
  { label: 'CPU',              value: 'Qualcomm Octa-Core\n2.7GHz, 6nm' },
  { label: 'OS',               value: 'Pixel OS\n(Based on Android 11)', orange: true },
  { label: 'Memory',           value: '8GB RAM\n256GB ROM', orange: true },
  { label: 'Touch',            value: '10-point Multi-touch' },
  { label: 'Bezel',            value: 'Ultra-narrow 16mm', orange: true },
  { label: 'Profile',          value: '17mm slim' },
  { label: 'GMS',              value: 'Optional', orange: true },
  { label: 'Wi-Fi',            value: '2.4GHz/5GHz\n802.11 a/b/g/n/ac' },
  { label: 'Bluetooth',        value: 'BT 5.0, BLE' },
  { label: 'Port',             value: 'USB Type-C\nUSB-A × 2', orange: true },
  { label: 'Camera',           value: '5MP Front\n(optional)', orange: true },
  { label: 'IP Rating',        value: 'IP54', orange: true },
  { label: 'Power',            value: 'AC 100-240V\nPOE+ optional' },
  { label: 'Mount',            value: 'VESA 75×75mm\nPole / Wall / Stand' },
  { label: 'Coating',          value: 'Anti-fingerprint\nAnti-glare' },
];

const accessories = [
  { src: '/assets/flex/acessories/Stand.png', label: 'Stand' },
];


export default function Flex3Detail() {
  const [selectedAcc, setSelectedAcc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen pt-[72px] overflow-hidden">
        <img src="/assets/flex/Poster.jpg" alt="FLEX 3" className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* ━━━━━━━━━━━━━━━━ STATS STRIP ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {[
              { value: '3 Sizes',  label: '18.5" · 22" · 27"',        orange: false },
              { value: '1080p',    label: 'Full HD Display',           orange: true  },
              { value: '400 nits', label: 'Brightness',                orange: true  },
              { value: '2.7GHz',   label: 'Octa-Core Performance',     orange: false },
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
            className="text-center mb-16"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Sizes</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Three sizes.<br />
              <span className="text-gray-400 font-semibold text-2xl sm:text-3xl">One display for every space.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-end">
            {sizes.map((s, i) => (
              <motion.div
                key={s.size}
                variants={fadeUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src="/assets/flex/1-Front view.png"
                  alt={`FLEX 3 ${s.size}`}
                  className="object-contain drop-shadow-2xl mb-8 w-full"
                  style={{ height: i === 0 ? '160px' : i === 1 ? '200px' : '240px' }}
                />
                <p className="text-4xl font-black text-white mb-2">{s.size}</p>
                <p className="text-orange-500 text-sm font-bold mb-2">{s.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 3. OVERVIEW ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Overview</p>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight">
            FLEX 3 delivers responsive touch and stunning HD clarity in multiple screen sizes, built for retail, F&B, healthcare and beyond.
          </h2>
        </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4. FEATURES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight max-w-xl">
              Key features for versatile use.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                className="group border border-gray-200 hover:border-orange-400 rounded-2xl p-7 transition-all duration-200 hover:shadow-md"
              >
                <div className="text-3xl font-black text-orange-500 mb-4">{f.highlight}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4B. ACCESSORIES ━━━━━━━━━━━━━━━━ */}
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
            <p className="text-gray-500 font-semibold text-2xl sm:text-3xl">1 compatible accessory.</p>
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

      {/* ━━━━━━━━━━━━━━━━ 5. STUNNING DISPLAY ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-3xl sm:text-4xl font-black text-white text-center mb-16"
          >
            Stunning Bezel-Less Display
          </motion.h2>

          <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
            {/* Left specs */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col gap-10"
            >
              {[
                { title: '1920×1080 FHD',         desc: 'Brings details to life on the screen.',                   orange: false },
                { title: '400 Nits\nBrightness',   desc: 'Vivid colors that stand out even in\nbright light.',      orange: true  },
                { title: 'Anti-Fingerprint\nCoating', desc: 'Touch-resistant surface, keeping the\nscreen smooth.', orange: true  },
              ].map((s) => (
                <div key={s.title}>
                  <p className={`font-black text-xl leading-snug mb-2 whitespace-pre-line ${s.orange ? 'text-orange-400' : 'text-white'}`}>
                    {s.title}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{s.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Centre — display image */}
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex justify-center"
            >
              <img
                src="/assets/flex/Stunning Bezel-Less Display.png"
                alt="FLEX 3 Stunning Bezel-Less Display"
                className="w-full object-contain"
              />
            </motion.div>

            {/* Right specs */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col gap-10"
            >
              <div>
                <p className="text-white font-black text-4xl leading-none">16mm</p>
                <p className="text-white font-black text-xl mb-2">Narrow Bezel</p>
                <p className="text-gray-500 text-xs leading-relaxed">Expanded screen space for a<br />broader view.</p>
              </div>
              <div>
                <p className="text-white font-black text-4xl leading-none">17mm</p>
                <p className="text-gray-500 text-xs mt-1">Slim Profile</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 5B. PERFORMANCE ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-14 sm:py-28 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Powerful Computing for<br />
              <span className="italic text-gray-400 font-light">Dragonwing</span>{' '}
              Outstanding Performance
            </h2>
          </motion.div>

          {/* chip visual */}
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="relative flex justify-center mb-12"
          >
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(139,92,246,0.4),rgba(109,40,217,0.15))] blur-xl scale-110" />
              <div className="relative w-full h-full rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/60 to-violet-950/80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '8px 8px' }} />
                <div className="relative z-10 w-20 h-20 rounded-2xl border-2 border-purple-400/50 bg-purple-500/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-400/40 border border-purple-300/30" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="text-white font-bold text-base mb-10"
          >
            Equipped with a top-tier global IoT chip for unstoppable performance.
          </motion.p>

          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { val: 'Qualcomm Octa-Core', lbl: 'CPU' },
              { val: '2.7GHz',             lbl: 'Max. Clock Speed' },
              { val: '6nm',               lbl: 'Manufacturing Process' },
              { val: '8GB RAM +256GB ROM', lbl: 'Max. Memory & Storage' },
            ].map((s) => (
              <div key={s.lbl} className="bg-[#111] border border-white/6 rounded-xl px-4 py-4 text-center">
                <p className="text-white font-black text-sm mb-1">{s.val}</p>
                <p className="text-gray-500 text-[11px]">{s.lbl}</p>
              </div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 7. PIXEL OS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#080808] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-white font-black text-5xl leading-none">P</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">Pixel OS 4.0</h2>
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

      {/* ━━━━━━━━━━━━━━━━ 8. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">FLEX 3 Tech Specs</h2>
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
