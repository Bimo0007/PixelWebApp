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

const features = [
  {
    label: 'MAX capacity',
    title: 'Smarter cash handling.',
    desc: "The cash drawer's front media slot, 5 bill trays, 4 fixed and 6 removable coin trays, making the drawer compatible with over 20 currencies.",
  },
  {
    label: 'MAX durability',
    title: 'More stable.',
    desc: 'Adopted high-toughness and rust-free ABS polymer, trapezoidal shape and internal honeycombs. MAX Cash Drawer can bear 10kg.',
  },
  {
    label: 'MAX experience',
    title: 'Minimized nuisance.',
    desc: 'The rear cable drawer keeps your countertop tidy. Its hidden rails and durable rollers allow a smooth and quiet opening and closing. Over 1,000,000 operations supported.',
  },
  {
    label: 'MAX security',
    title: 'Multiple protections.',
    desc: '3-position lock equipped. The drawer operates on a wide range of voltages, avoiding the risk of damage due to voltage mismatch.',
  },
  {
    label: 'Cash drawer trigger',
    title: 'Directly open the drawer.',
    desc: 'USB and Bluetooth enabled. You can open your cash drawer even with no dedicated POS terminal.',
  },
  {
    label: 'Customize reminders',
    title: 'API integration.',
    desc: 'Integrate with POS apps to monitor drawer open/close status anytime from anywhere, ensuring your cash security.',
  },
];

const specCards: { label: string; value: string }[] = [
  { label: 'Cash Drawer',       value: 'ABS drawer' },
  { label: 'Trays',             value: '5 bill trays\n1 media slot\n4 fixed & 6 removable coin trays' },
  { label: 'Cable',             value: 'RJ12, 6P4C\n0.8m' },
  { label: 'Lock',              value: '3-position lock\n(Open by driver / key / lock)' },
  { label: 'Bill Clip',         value: 'Plastic and metallic' },
  { label: 'Cable Storage',     value: 'Rear-set drawer' },
  { label: 'Drive Voltage',     value: 'DC 9V~24V, 1A' },
  { label: 'Drive Pulse Width', value: '100ms–300ms' },
  { label: 'Drive Protections', value: '3A Overcurrent Protection\nInput Pulse Overvoltage\nInput Pulse Timeout\nSelf-Adaptive 9V–28V\nContact ESD 8KV / Air ESD 15KV\nThermal Shutdown' },
  { label: 'Service Life',      value: '≥1,000,000 operations' },
  { label: 'Status Feedback',   value: 'Status detection switch' },
  { label: 'Weight',            value: '5.8 kg' },
  { label: 'Dimensions',        value: 'W430 × L457 × H88 mm' },
  { label: 'Environment',       value: 'Operating: 0°C~45°C\n30%~85% humidity\nStorage: -20°C~60°C\n10%~90% humidity' },
];

export default function CashDrawerDetail() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#0a0a0a] pt-[72px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.p variants={item} className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Accessories
              </motion.p>
              <motion.h1 variants={item} className="text-[52px] sm:text-[72px] lg:text-[88px] font-black text-white leading-none mb-6 -ml-1">
                MAX Cash<br />Drawer
              </motion.h1>
              <motion.p variants={item} className="text-white/60 text-xl font-light max-w-sm">
                Maximize your potential.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex justify-center">
              <img
                src="/assets/Drawer/Drawer.png"
                alt="MAX Cash Drawer"
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
              { value: '5',          label: 'Bill Trays' },
              { value: '10',         label: 'Coin Trays (4+6)', orange: true },
              { value: '20+',        label: 'Currencies Supported', orange: true },
              { value: '1,000,000+', label: 'Operations Guaranteed' },
            ].map((s) => (
              <motion.div key={s.label} variants={item} className="py-7 px-4 sm:py-10 sm:px-6 text-center border-b border-r border-white/5 even:border-r-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className={`text-2xl sm:text-3xl font-black mb-1.5 ${s.orange ? 'text-orange-500' : 'text-white'}`}>{s.value}</p>
                <p className="text-gray-500 text-xs font-medium tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FEATURES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0f0f0f] py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1.05]">
              MAX capacity.<br />
              <span className="text-orange-500">MAX security.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#141414] border border-white/6 rounded-2xl p-8 hover:border-orange-500/25 transition-colors"
              >
                <p className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-3">{f.label}</p>
                <h3 className="text-white font-black text-lg leading-snug mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CAPACITY CALLOUT ━━━━━━━━━━━━━━━━ */}
      <section className="bg-black py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex justify-center"
            >
              <img
                src="/assets/Drawer/Drawer.png"
                alt="MAX Cash Drawer open"
                className="w-full max-w-sm object-contain drop-shadow-2xl"
              />
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={item} className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">
                Capacity
              </motion.p>
              <motion.h2 variants={item} className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                <span className="text-orange-500">MAX</span> capacity,<br />smarter cash handling.
              </motion.h2>
              <div className="flex gap-8 mt-8">
                {[
                  { value: '5',  label: 'Bill trays' },
                  { value: '4',  label: 'Fixed coin trays' },
                  { value: '6',  label: 'Removable coin trays' },
                ].map((s) => (
                  <motion.div key={s.label} variants={item} className="text-center">
                    <p className="text-5xl font-black text-orange-500 leading-none mb-1">{s.value}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TECH SPECS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
            <h2 className="text-4xl font-black text-gray-900">MAX Cash Drawer Tech Specs</h2>
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
