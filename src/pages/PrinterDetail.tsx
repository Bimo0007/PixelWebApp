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
    title: 'Revolutionary one-cable power supply.',
    desc: 'Industry-first single-cable power supply patent enables simultaneous power delivery and data communication through a single cable — for a clean, tidy countertop.',
  },
  {
    title: 'Seamless Scan & Print solution.',
    desc: 'Enhance efficiency with an optional barcode scanning module. Professional camera supports product entry, QR code payments, and scan for outbound delivery, all in one device.',
  },
  {
    title: '3-in-1 Printer.',
    desc: 'Seamlessly integrates three printing modes — Receipt paper, Label paper, and Linerless label — into one device.',
  },
  {
    title: 'Supports multi-channel printing.',
    desc: 'Supports Bluetooth / LAN / Wi-Fi / USB / Hyper Wi-Fi. Once connected, ready to print instantly upon power-on.',
  },
  {
    title: 'Supports Cloud printing.',
    desc: 'Integrate via Open API to enable remote printing — enjoy hassle-free cloud printing, no more missed orders.',
  },
  {
    title: 'Innovative Dual Stacking Design.',
    desc: 'Doubles operational efficiency while fully freeing up front-desk workspace. (Stand sold separately.)',
  },
];

const printModes = [
  { label: 'Receipt paper',   desc: 'Standard thermal receipt printing.' },
  { label: 'Label paper',     desc: 'Adhesive label printing for retail tagging.' },
  { label: 'Linerless label', desc: 'No backing paper — optional feature.' },
];

const specCards: { label: string; value: string }[] = [
  { label: 'Product Model',         value: 'NT320' },
  { label: 'CPU',                   value: 'MIPS32 1.2GHz' },
  { label: 'Printer',               value: 'Line Thermal\n203×203 dpi\nUp to 150mm/s' },
  { label: 'Ports',                 value: '1×RJ12 Cash Port\n1×RJ45 LAN\n1×USB 2.0 Type-C' },
  { label: 'Ethernet',              value: '100Mbps' },
  { label: 'Memory',                value: 'RAM: 128MB\nROM: 256MB' },
  { label: 'Audio',                 value: '1×1W Speaker' },
  { label: 'Power Supply',          value: '5V/2A DC' },
  { label: 'Paper Size',            value: 'Width: 30–80mm\nMax Ø: 80mm\nLabel Width: 30–78mm\nLabel Height: 30–150mm\nThickness: 0.048–0.10mm' },
  { label: 'Print Command',         value: 'Receipt: ESC/POS\nLabel: TSPL\nCloud: MQTT/HTTPS' },
  { label: 'Wi-Fi\n(Wi-Fi/Linerless ver.)', value: 'Wi-Fi 6\n5GHz/2.4GHz\n802.11 a/b/g/n/ac/ax' },
  { label: 'Bluetooth\n(Wi-Fi/Linerless ver.)', value: 'BT 5.4\nSupport BLE' },
  { label: 'Certification',         value: 'CCC, IC, CE, CB\nFCC, WEEE\nRohs, Reach, SRRC' },
  { label: 'Supported OS',          value: 'Windows / Android\niOS / Linux\nPixel MDM' },
  { label: 'Sensor',                value: 'Out of Paper\nGap Sensor\nOpen Cover\nPaper Pick-Up\nCutter Reset\nMotor Temp.\nHead Temp.' },
  { label: 'Characters Per Line',   value: 'Width 80mm:\nFont A: 48, Font B: 64\nWidth 58mm:\nFont A: 33, Font B: 44\nWidth 40mm:\nFont A: 21, Font B: 28' },
  { label: 'Font Type',             value: 'Simplified Chinese (GB18030)\nTraditional Chinese (BIG5)\nJapanese (Shift JIS)\nKorean (KS C 5601)\nEnglish, Emoji\nGlobal Fonts Library' },
  { label: 'Bar Code',              value: '1D: UPC-A/E, EAN13/8, CODE39/93/128, Interleaved 2 of 5, CODABAR, GS1 DataBar, MSI Plessey\n2D: PDF417, QR Code' },
  { label: 'Weight',                value: '875g' },
  { label: 'Dimensions',            value: '130×140×145 mm' },
  { label: 'Environment',           value: 'Operating: 0°C~45°C\n30%~85% non-condensing\nStorage: -20°C~45°C\n10%~90% non-condensing' },
];


export default function PrinterDetail() {
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
              <motion.h1 variants={item} className="text-[48px] sm:text-[68px] lg:text-[84px] font-black text-white leading-none mb-6 -ml-1">
                80MM Label<br />Printer
              </motion.h1>
              <motion.p variants={item} className="text-white/60 text-xl font-light mb-10 max-w-sm">
                A new breed of printer for smarter business.
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2 h-10">
                  <img src="/assets/L3/Efficiency unleashed from start to sale/dmp.png" alt="" className="h-6 w-auto object-contain brightness-0 invert opacity-90" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex justify-center">
              <img
                src="/assets/Printer/Printer.png"
                alt="80MM Label Printer"
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
              { value: '150mm/s', label: 'Print Speed' },
              { value: '3-in-1',  label: 'Printing Modes',        orange: true },
              { value: '80mm',    label: 'Max Paper Width',        orange: true },
              { value: 'Wi-Fi 6', label: 'Connectivity (Wi-Fi ver.)' },
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
              One cable.<br />
              <span className="text-orange-500">Three modes.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="bg-[#141414] border border-white/6 rounded-2xl p-8 hover:border-orange-500/25 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mb-5" />
                <h3 className="text-white font-black text-base leading-snug mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 3-IN-1 MODES ━━━━━━━━━━━━━━━━ */}
      <section className="bg-black py-14 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={item} className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Printing modes</motion.p>
              <motion.h2 variants={item} className="text-4xl sm:text-5xl font-black text-white leading-tight mb-10">
                3-in-1 Printer.<br />
                <span className="text-gray-500 font-semibold text-2xl">One device, every format.</span>
              </motion.h2>
              <div className="flex flex-col gap-4">
                {printModes.map((m, i) => (
                  <motion.div
                    key={m.label}
                    variants={item}
                    className="flex gap-4 items-start bg-white/5 border border-white/8 rounded-xl px-6 py-4"
                  >
                    <span className="text-orange-500 font-black text-lg leading-none mt-0.5">{i + 1}</span>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{m.label}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="flex justify-center"
            >
              <img
                src="/assets/Printer/Printer.png"
                alt="80MM Label Printer"
                className="w-full max-w-sm object-contain drop-shadow-2xl"
              />
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
            <h2 className="text-4xl font-black text-gray-900">80MM Label Printer Tech Specs</h2>
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
