import { useState } from 'react';
import { motion } from 'framer-motion';
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
const highlights = [
  {
    title: 'New platform to unleash powerful performance.',
    desc: 'Enjoy a 20% performance boost, with a Qualcomm octa-core processor offering a clock speed up to 2.4GHz and built with a 6nm process technology, along with 4GB RAM + 64GB ROM of robust memory.',
  },
  {
    title: 'Sleek Z shape. Consistent excellence in design.',
    desc: 'The standout Z-shaped design offers elegance from every angle. A metal die-casting process provides a slim yet sturdy body. The hidden cable system keeps your workspace organized and clutter-free.',
  },
  {
    title: 'Enhanced user experience with new features.',
    desc: 'Triple displays provide versatile content presentation and seamless multi-screen integration. The NFC readers on two sides of the screen simplify membership management. The power button features fingerprint recognition for instant unlocking and secure app access.',
  },
];

const featureCards = [
  { title: 'Elegant design,\nconsistent style.',     desc: 'Z-shaped metal die-cast body — slim, sturdy, and refined.' },
  { title: '20%\nPerformance boost.',                desc: 'Powered by Qualcomm octa-core, 6nm, up to 2.4GHz. *Data from Pixel Lab.' },
  { title: 'Triple the content\nyou want to display.', desc: 'Three-screen setup for versatile content and seamless integration.' },
  { title: 'Use CPad PAY as\na secondary display.',  desc: 'Plug-and-play secondary display for the best customer experience.' },
  { title: 'Expanded interface\ndesign.',             desc: 'More ports, more connections, more flexibility for your setup.' },
];

const osFeatures = [
  { title: 'Advanced Device Management', desc: 'Remote control and monitor all devices from a single dashboard.' },
  { title: 'Smart OTA Scheduling',       desc: 'Schedule over-the-air updates to run during off-peak hours.' },
  { title: 'Anti-Virus & Smart Battery', desc: 'Built-in security engine and intelligent battery optimisation.' },
  { title: 'Fully Open Ecosystem',       desc: 'Access thousands of apps from our rich partner marketplace.' },
];

const specCards: { label: string; value: string }[] = [
  { label: 'CPU',                   value: 'Octa-core\nup to 2.4GHz' },
  { label: 'OS',                    value: 'Pixel OS 4.0\n(Based on Android 13)' },
  { label: 'Memory',                value: '4GB RAM + 64GB ROM\nMicro SD up to 2TB' },
  { label: 'Displays',              value: '15.6" FHD\n1920×1080, IPS\nCapacitive Multi-touch\nAnti-fingerprint Coating' },
  { label: 'GMS',                   value: 'Supported (Optional)' },
  { label: 'Buttons',               value: '1×Power button\n1×Volume button (hidden)' },
  { label: 'Card Slots',            value: '1×Micro SIM (4G)\n1×Micro SD' },
  { label: 'Interface',             value: '3×USB 2.0 Type-A\n1×USB 3.0 Type-A\n1×USB Type-C\n2×Micro USB\n1×Micro USB debug\n1×RJ45\n1×RJ11\n1×RJ12\n1×DC' },
  { label: 'Cellular',              value: '4G/3G (Optional)' },
  { label: 'Wi-Fi',                 value: '5GHz/2.4GHz\nIEEE 802.11 a/b/g/n/ac' },
  { label: 'Bluetooth',             value: 'BT 5.0\nSupport BLE' },
  { label: 'Positioning',           value: 'GPS/Glonass/Beidou\nGalileo (4G Version)' },
  { label: 'Cameras',               value: '5MP FF Front Camera' },
  { label: 'NFC',                   value: 'Tap on screen' },
  { label: 'Fingerprint',           value: 'Supported' },
  { label: 'Audio',                 value: '2×2W Speaker\n1×Microphone' },
  { label: 'Sensors',               value: 'Gravity sensor' },
  { label: 'Adapter',               value: 'Input: 100~240V AC\nOutput: 24V/2.5A DC' },
  { label: 'Net Weight',            value: '3kg' },
  { label: 'Gross Weight',          value: '5.5kg' },
  { label: 'Environment',           value: 'Operating: 0°C~40°C\nStorage: -20°C~60°C\nHumidity: 5%~95%' },
  { label: 'Dimensions (L×W×H)',    value: '373×176×314 mm' },
];

/* ══════════════════════════════════════════════════════ */
export default function T3Detail() {
  const [selectedAcc, setSelectedAcc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0a0a0a] pt-[72px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={item} className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Smart Desktop Terminal
              </motion.p>
              <motion.h1 variants={item} className="text-[52px] sm:text-[90px] lg:text-[120px] font-black text-white leading-none mb-6 -ml-1">
                T3
              </motion.h1>
              <motion.p variants={item} className="text-white/60 text-xl font-light mb-10 max-w-sm">
                Power meets elegance at your counter.
              </motion.p>
              {/* Badge logos */}
              <motion.div variants={item} className="flex flex-wrap gap-3">
                {[
                  { src: '/assets/L3/Efficiency unleashed from start to sale/os.png',  invert: true },
                  { src: '/assets/L3/Efficiency unleashed from start to sale/dmp.png', invert: true },
                  { src: '/assets/L3/Efficiency unleashed from start to sale/gms.png', invert: false },
                ].map((b) => (
                  <div key={b.src} className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2 h-10">
                    <img src={b.src} alt="" className={`h-6 w-auto object-contain ${b.invert ? 'brightness-0 invert opacity-90' : ''}`} />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — device */}
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex justify-center">
              <img
                src="/assets/T3/Frontview.png"
                alt="T3"
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
              { value: '15.6"',   label: 'FHD IPS Display' },
              { value: '20%',     label: 'Performance Boost*', orange: true },
              { value: '4GB+64GB', label: 'RAM + ROM',         orange: true },
              { value: 'Triple',  label: 'Display Support' },
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
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Why T3</p>
            <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white leading-[1.05] tracking-tight max-w-3xl">
              Power meets elegance<br />
              <span className="text-orange-500">at your counter.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5 mt-14">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#141414] border border-white/6 rounded-2xl p-8 grid sm:grid-cols-[1fr_2fr] gap-6 hover:border-orange-500/20 transition-colors"
              >
                <h3 className="text-lg font-black text-white leading-snug">{h.title}</h3>
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
            FHD 1920×1080 · IPS · Capacitive Multi-touch · Anti-fingerprint Coating
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 4. FEATURE CARDS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-xl">
              Everything you need.<br />
              <span className="text-gray-500 font-semibold text-2xl sm:text-3xl">Built for modern business.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {featureCards.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                className="bg-[#141414] border border-white/6 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mb-5" />
                <h3 className="text-white font-black text-lg leading-snug mb-3 whitespace-pre-line">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 5. ACCESSORIES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 overflow-hidden border-t border-white/5">
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

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex flex-wrap gap-6"
            >
              {[
                { src: '/assets/T3/acessories/2nd screen.png', label: '2nd Screen' },
              ].map((acc) => {
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

      {/* ━━━━━━━━━━━━━━━━ 6. PIXEL OS ━━━━━━━━━━━━━━━━ */}
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

      {/* ━━━━━━━━━━━━━━━━ 7. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">T3 Tech Specs</h2>
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
