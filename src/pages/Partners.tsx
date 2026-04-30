import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BookOpen, BarChart3, Check } from 'lucide-react';
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

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: 'Competitive Margins',
    desc: 'Earn attractive margins on every unit sold, with performance bonuses and quarterly incentive programmes for top-performing partners.',
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: 'Dedicated Account Support',
    desc: 'Silver and above partners receive a named account manager — a single point of contact for pricing, stock, and escalations.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: 'Training & Certification',
    desc: 'Access our free online product training, SUNMI device certification programme, and live webinars delivered by our technical team.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
    title: 'Marketing Development Funds',
    desc: 'Gold and Platinum partners qualify for co-marketing funds to run joint campaigns, trade show activations, and digital advertising.',
  },
];

const tiers = [
  {
    name: 'Authorized',
    color: 'border-gray-200',
    labelColor: 'text-gray-500',
    minUnits: '10+ units / year',
    margin: 'Standard',
    features: [
      'Access to full product catalogue',
      'Partner pricing list',
      'Basic marketing assets',
      'Email support',
    ],
  },
  {
    name: 'Silver',
    color: 'border-gray-300',
    labelColor: 'text-gray-600',
    minUnits: '50+ units / year',
    margin: 'Standard + 3%',
    features: [
      'All Authorized benefits',
      'Named account manager',
      'Priority stock allocation',
      'Co-branded collateral',
      'Quarterly business review',
    ],
  },
  {
    name: 'Gold',
    color: 'border-orange-400',
    labelColor: 'text-orange-500',
    minUnits: '200+ units / year',
    margin: 'Standard + 7%',
    featured: true,
    features: [
      'All Silver benefits',
      'Marketing development funds',
      'Demo unit programme',
      'Joint go-to-market planning',
      'Technical pre-sales support',
      'Training & certification access',
    ],
  },
  {
    name: 'Platinum',
    color: 'border-gray-900',
    labelColor: 'text-gray-900',
    minUnits: '500+ units / year',
    margin: 'Custom pricing',
    features: [
      'All Gold benefits',
      'Exclusive territory rights',
      'Custom contract terms',
      'C-level executive access',
      'On-site technical deployment',
      'Dedicated service SLA',
    ],
  },
];

export default function Partners() {
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
            Partner Programme
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Grow with Pixel<br className="hidden sm:block" /> across SE Asia.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Join Pixel's authorised reseller network and deliver enterprise-grade SUNMI hardware to your clients — supported by structured training, co-marketing programmes, and competitive commercial terms.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={3} initial="hidden" animate="visible"
            className="mt-8"
          >
            <Link
              to="/purchase-inquiry"
              className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Apply to Become a Partner
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Who We Work With</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">The right partner for every business model.</h2>
            <p className="text-gray-500 leading-relaxed">
              Our programme is structured for resellers, system integrators, independent software vendors, and sub-distributors seeking to incorporate SUNMI smart business hardware into their portfolio. Pixel provides the product access, technical support, and commercial framework — partners contribute their market relationships and sales execution.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-4 mb-6"
          >
            {[
              { type: 'Value-Added Resellers (VARs)', desc: 'Sell and support SUNMI hardware to end-user businesses across retail, F&B, logistics, and more.' },
              { type: 'System Integrators', desc: 'Bundle SUNMI devices with your POS software, payment gateway, or ERP solution for a complete offering.' },
              { type: 'Independent Software Vendors (ISVs)', desc: 'Certify your application on SUNMI hardware and recommend devices to your software customers.' },
              { type: 'Sub-distributors', desc: 'Extend our reach into markets and verticals we don\'t directly cover — with full product and margin support.' },
            ].map((w) => (
              <motion.div key={w.type} variants={item} className="border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                <h3 className="font-black text-gray-900 mb-2">{w.type}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f7f7f7] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Why Partner With Pixel</p>
            <h2 className="text-4xl font-black text-gray-900">What you get as a partner.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={item} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tier Table */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14 text-center"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Partner Tiers</p>
            <h2 className="text-4xl font-black text-gray-900">Choose your level.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={item}
                className={`border-2 ${tier.color} rounded-2xl p-7 flex flex-col ${tier.featured ? 'shadow-lg' : ''}`}
              >
                {tier.featured && (
                  <span className="inline-block self-start text-[10px] font-bold tracking-[0.2em] uppercase bg-orange-500 text-white px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <p className={`text-[11px] font-bold tracking-[0.2em] uppercase ${tier.labelColor} mb-1`}>
                  {tier.name}
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-1">{tier.minUnits}</p>
                <p className="text-xs text-gray-400 mb-5">Margin: {tier.margin}</p>

                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center text-xs text-gray-400 mt-8"
          >
            Tier qualification is assessed annually based on units sold and partnership engagement. Contact us for full programme terms.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Ready to Start?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Apply to join our network.</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Complete the inquiry form and our partnerships team will respond within 2 business days to discuss the appropriate tier structure and commercial terms for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/purchase-inquiry"
                className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-8 border border-white/20 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Talk to Our Team
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
