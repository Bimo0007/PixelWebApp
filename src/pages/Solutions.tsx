import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, ShoppingBag, Package, Building2, Heart, CreditCard, ArrowRight } from 'lucide-react';
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

const industries = [
  {
    icon: <Utensils className="w-6 h-6 text-orange-500" />,
    name: 'F&B & Restaurant',
    description:
      'From quick-service counters to full-service dining, SUNMI devices streamline order taking, kitchen communication, and cashless payments — cutting wait times and increasing table turnover.',
    useCases: ['Tableside ordering', 'Counter POS', 'Self-checkout kiosk', 'Receipt printing'],
    products: [
      { name: 'CPad', id: 'cpad' },
      { name: 'V3H', id: 'v3h' },
      { name: 'T3', id: 't3' },
    ],
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-orange-500" />,
    name: 'Retail',
    description:
      'Equip your retail operations with the hardware to accelerate service, reduce queue time, and drive loyalty. From flagship stores to pop-up counters, our POS terminals manage sales, inventory, and returns in a single workflow.',
    useCases: ['Point of sale', 'Inventory scanning', 'Customer-facing display', 'Loyalty & CRM'],
    products: [
      { name: 'D3 Pro', id: 'd3-pro' },
      { name: 'L3', id: 'l3' },
      { name: 'V3H', id: 'v3h' },
    ],
  },
  {
    icon: <Package className="w-6 h-6 text-orange-500" />,
    name: 'Logistics & Warehouse',
    description:
      'Accelerate pick-pack-ship operations with rugged handheld terminals. Real-time barcode scanning, shipment tracking, and proof-of-delivery workflows built for high-throughput environments.',
    useCases: ['Barcode scanning', 'Goods receipt & dispatch', 'Route management', 'Proof of delivery'],
    products: [
      { name: 'L3', id: 'l3' },
      { name: 'Flex-3', id: 'flex-3' },
      { name: 'V3H', id: 'v3h' },
    ],
  },
  {
    icon: <Building2 className="w-6 h-6 text-orange-500" />,
    name: 'Hospitality',
    description:
      'Elevate the guest experience at every touchpoint — from check-in kiosks and concierge tablets to poolside ordering. SUNMI hardware blends premium aesthetics with enterprise reliability.',
    useCases: ['Front desk check-in', 'Concierge display', 'Poolside & room service', 'Event registration'],
    products: [
      { name: 'CPad', id: 'cpad' },
      { name: 'V3H', id: 'v3h' },
      { name: 'T3', id: 't3' },
    ],
  },
  {
    icon: <Heart className="w-6 h-6 text-orange-500" />,
    name: 'Healthcare',
    description:
      'Modernise patient flow with secure, touch-enabled terminals. From registration and queue management to pharmacy billing, our devices comply with hygiene-first deployment requirements.',
    useCases: ['Patient registration', 'Queue management', 'Pharmacy POS', 'Insurance billing'],
    products: [
      { name: 'CPad', id: 'cpad' },
      { name: 'T3', id: 't3' },
      { name: 'V3H', id: 'v3h' },
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-orange-500" />,
    name: 'Finance & Payments',
    description:
      'Deploy smart payment terminals that accept cards, QR codes, e-wallets, and local payment methods. Pixel-supported SUNMI devices are field-proven across banking and fintech environments in SE Asia.',
    useCases: ['Card & QR payment', 'e-Wallet acceptance', 'Teller terminals', 'Agent banking'],
    products: [
      { name: 'V3H', id: 'v3h' },
      { name: 'T3', id: 't3' },
      { name: 'D3 Pro', id: 'd3-pro' },
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      {/* Hero */}
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
            Solutions
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Built for every<br className="hidden sm:block" /> industry.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Across food & beverage, retail, logistics, hospitality, healthcare, and finance — SUNMI hardware is engineered to meet the specific operational demands of each industry.
          </motion.p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                variants={item}
                className="border border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  {ind.icon}
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-3">{ind.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{ind.description}</p>

                {/* Use cases */}
                <ul className="mb-6 space-y-1.5">
                  {ind.useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>

                {/* Recommended products */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Recommended</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.products.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 hover:bg-orange-100 text-orange-600 text-xs font-semibold rounded-full transition-colors"
                      >
                        {p.name}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Speak with Our Team</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">We'll identify the right solution.</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Share your operational requirements and our team will recommend the optimal SUNMI configuration for your environment, scale, and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/purchase-inquiry"
                className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Get a Recommendation
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center h-11 px-8 border border-white/20 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Browse All Products
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
