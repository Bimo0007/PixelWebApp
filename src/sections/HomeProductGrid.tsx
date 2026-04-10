import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// ── CTA buttons ───────────────────────────────────────────────────────────────
function MoreButton({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-[#ff6000] hover:text-[#ff7a2e] font-medium text-sm transition-colors"
    >
      {label}
      <span className="relative inline-flex w-4 h-4 overflow-hidden">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
          className="absolute inset-0 w-4 h-4 transition-transform duration-300 group-hover:translate-x-full">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
          className="absolute inset-0 w-4 h-4 -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

function PurchaseButton({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to}
      className="inline-flex items-center text-sm font-medium text-[#ff6000] hover:text-[#ff7a2e] transition-colors border-b border-[#ff6000]/40 hover:border-[#ff6000] pb-px">
      {label}
    </Link>
  );
}

// ── Feature list ──────────────────────────────────────────────────────────────
interface Feature {
  title: string;
  highlight?: string;
  description: string;
}

function FeatureList({ features, dark }: { features: Feature[]; dark: boolean }) {
  return (
    <ul className="mb-6 space-y-0">
      {features.map((f, i) => (
        <li
          key={f.title}
          className={`flex gap-3 py-3 ${
            i < features.length - 1
              ? dark ? 'border-b border-white/8' : 'border-b border-gray-100'
              : ''
          }`}
        >
          <div className="mt-1 flex-shrink-0 w-0.5 h-4 bg-[#ff6000] rounded-full" />
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                {f.title}
              </span>
              {f.highlight && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#ff6000]/10 text-[#ff6000] tracking-wide">
                  {f.highlight}
                </span>
              )}
            </div>
            <p className={`text-[12px] leading-relaxed ${dark ? 'text-white/45' : 'text-gray-400'}`}>
              {f.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// ── Product card: image left, text right ─────────────────────────────────────
interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  tagline: string;
  productId: string;
  features?: Feature[];
  dark?: boolean;
  delay?: number;
  learnMoreLabel: string;
  purchaseLabel: string;
}

function ProductCard({ image, category, name, tagline, productId, features = [], dark = true, delay = 0, learnMoreLabel, purchaseLabel }: ProductCardProps) {
  const bg         = dark ? 'bg-[#111]'     : 'bg-[#f5f5f5]';
  const textBg     = dark ? 'bg-[#0d0d0d]'  : 'bg-white';
  const textColor  = dark ? 'text-white'     : 'text-gray-900';
  const mutedColor = dark ? 'text-white/45'  : 'text-gray-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="group flex flex-col sm:flex-row"
    >
      {/* Image half */}
      <div className={`relative flex-1 flex items-center justify-center min-h-[280px] overflow-hidden ${bg}`}>
        {dark && <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(255,100,0,0.05),transparent)]" />}
        <img
          src={image}
          alt={name}
          className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Text half */}
      <div className={`flex-1 flex flex-col justify-center px-8 py-10 ${textBg}`}>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#ff6000] mb-2">
          {category}
        </p>
        <h2 className={`text-2xl lg:text-3xl font-bold ${textColor} tracking-tight leading-tight mb-2`}>
          {name}
        </h2>
        <p className={`text-sm ${mutedColor} mb-5 leading-relaxed`}>
          {tagline}
        </p>
        {features.length > 0 && <FeatureList features={features} dark={dark} />}
        <div className="flex items-center gap-5">
          <MoreButton label={learnMoreLabel} to={`/product/${productId}`} />
          <PurchaseButton to="/purchase-inquiry" label={purchaseLabel} />
        </div>
      </div>
    </motion.div>
  );
}

// ── OS Banner ─────────────────────────────────────────────────────────────────
function OsBanner({ os, osName, osTagline, learnMore }: { os: string; osName: string; osTagline: string; learnMore: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#080808] border-y border-white/5 py-24 text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(255,96,0,0.07),transparent)]" />
      <div className="relative z-10 px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6000] mb-4">{os}</p>
        <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">{osName}</h2>
        <p className="text-lg text-white/35 mb-10">{osTagline}</p>
        <MoreButton label={learnMore} to="/platform" />
      </div>
    </motion.section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function HomeProductGrid() {
  const { language } = useLanguage();
  const tg = translations[language].productGrid;

  const cpad    = productsData[0].products![0] as any;
  const flex3   = productsData[1].products![0] as any;
  const mobile  = productsData[2] as any;
  const v3h     = mobile.subCategories[0].products[0];
  const l3      = mobile.subCategories[1].products[0];
  const desktop = productsData[3] as any;
  const d3pro   = desktop.subCategories[0].products[0];
  const t3      = desktop.subCategories[1].products[0];

  const cpadFeatures  = cpad.detail?.features  ?? [];
  const flex3Features = flex3.detail?.features ?? [];
  const v3hFeatures   = v3h.detail?.features   ?? [];

  const l3Features: Feature[] = [
    { title: 'RFID & Barcode', highlight: 'Dual-mode', description: 'Read RFID tags and 1D/2D barcodes simultaneously for fast data capture.' },
    { title: 'Rugged Build', description: 'IP65-rated body withstands drops, dust, and harsh warehouse environments.' },
    { title: 'All-Day Battery', highlight: '12h+', description: 'High-capacity battery powers continuous scanning through long shifts.' },
  ];
  const d3proFeatures: Feature[] = [
    { title: 'Android Platform', highlight: 'Android 11', description: 'Open Android ecosystem with full access to business apps and custom software.' },
    { title: 'Capacitive Touch', description: 'Responsive multi-touch display optimised for fast counter-based operations.' },
    { title: 'Compact Footprint', description: 'Space-saving design that fits neatly on any retail or F&B counter.' },
  ];
  const t3Features: Feature[] = [
    { title: '15.6" Full-HD Display', highlight: 'FHD', description: '1920×1080 IPS panel with vivid colour reproduction for staff and customers.' },
    { title: 'Dual-Screen Ready', description: 'Built-in customer-facing display keeps guests informed during checkout.' },
    { title: 'All-in-One Design', description: 'Integrated compute, display, and I/O — zero cable clutter on the counter.' },
  ];

  const shared = { learnMoreLabel: tg.learnMore, purchaseLabel: tg.purchaseInquiry };

  return (
    <div className="bg-[#0a0a0a]">
      {/* Row 1 — CPad + FLEX 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/5">
        <div className="border-b sm:border-b-0 sm:border-r border-white/5">
          <ProductCard {...shared} image={cpad.image}  category={tg.categories.cpad}        name={cpad.name}  tagline={cpad.tagline!}  productId={cpad.id}  features={cpadFeatures}  dark={false} delay={0} />
        </div>
        <ProductCard {...shared} image={flex3.image} category={tg.categories.interactive}  name={flex3.name} tagline={flex3.tagline!} productId={flex3.id} features={flex3Features} dark={true}  delay={0.08} />
      </div>

      {/* Row 2 — V3H + L3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/5">
        <div className="border-b sm:border-b-0 sm:border-r border-white/5">
          <ProductCard {...shared} image={v3h.image} category={tg.categories.mobile} name={v3h.name} tagline={v3h.tagline!} productId={v3h.id} features={v3hFeatures} dark={true}  delay={0} />
        </div>
        <ProductCard {...shared} image={l3.image}   category={tg.categories.mobile} name={l3.name}  tagline={l3.tagline!}  productId={l3.id}  features={l3Features}  dark={false} delay={0.08} />
      </div>

      {/* OS Banner */}
      <OsBanner os={tg.os} osName={tg.osName} osTagline={tg.osTagline} learnMore={tg.learnMore} />

      {/* Row 3 — D3 Pro + T3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/5">
        <div className="border-b sm:border-b-0 sm:border-r border-white/5">
          <ProductCard {...shared} image={d3pro.image} category={tg.categories.desktop} name={d3pro.name} tagline={d3pro.tagline!} productId={d3pro.id} features={d3proFeatures} dark={false} delay={0} />
        </div>
        <ProductCard {...shared} image={t3.image} category={tg.categories.allinone} name={t3.name} tagline={t3.tagline!} productId={t3.id} features={t3Features} dark={true} delay={0.08} />
      </div>
    </div>
  );
}
