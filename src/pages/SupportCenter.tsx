import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, MessageSquare, ChevronDown, Mail, Phone, Download } from 'lucide-react';
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

const faqItems = [
  {
    q: 'What is the standard warranty period for SUNMI devices?',
    a: 'All SUNMI devices distributed by Pixel carry a 12-month manufacturer warranty covering hardware defects and component failures under normal use. Extended 24-month coverage is available for enterprise accounts — contact our sales team for details.',
  },
  {
    q: 'What does the warranty cover?',
    a: 'The warranty covers manufacturing defects, hardware malfunctions, and component failures that occur under normal operating conditions. It does not cover physical damage, liquid damage, unauthorised modifications, or damage caused by third-party software.',
  },
  {
    q: 'How do I initiate a repair or replacement (RMA)?',
    a: 'Contact our support team at support@pixeltech.com with your device serial number, proof of purchase, and a description of the issue. We will issue an RMA number within 1 business day. Ship the device to our service centre with the RMA number clearly marked on the package.',
  },
  {
    q: 'How long does a repair or replacement take?',
    a: 'Standard turnaround is 5–7 business days from receipt of the device at our service centre. For enterprise clients with a service SLA, expedited turnaround may be available. You will receive email updates at each stage of the repair.',
  },
  {
    q: 'Do you provide on-site support?',
    a: 'Yes. For enterprise deployments (typically 20+ devices) in Phnom Penh, Bangkok, and Singapore, we can arrange on-site technical support. Contact our team to discuss terms and scheduling.',
  },
  {
    q: 'How do I update the firmware on my SUNMI device?',
    a: 'SUNMI devices receive firmware updates via the SUNMI OTA (Over-the-Air) update system. You can also update manually using a firmware package downloaded from our Resources page or by contacting our technical team.',
  },
  {
    q: 'Do SUNMI devices support third-party Android applications?',
    a: 'Yes. SUNMI devices run a customised version of Android and support standard APK installation. Developers can access the SUNMI Developer Platform for device-specific APIs (printer, scanner, display). Contact us for SDK documentation.',
  },
  {
    q: 'What countries do you provide after-sales support in?',
    a: 'We provide direct after-sales support in Cambodia, Thailand, and Singapore. For other SE Asian markets, we work with local partners to ensure service coverage. Contact us for details specific to your country.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery in Cambodia is 2–3 business days. For Thailand and Singapore, expect 5–7 business days. Deliveries to other SE Asian countries typically take 7–14 business days depending on customs and local logistics.',
  },
  {
    q: 'Do you offer volume pricing or discounts?',
    a: 'Yes. Volume discounts are available for orders of 10 units or more. For large procurement projects, contact our sales team directly or submit a Purchase Inquiry form and we will prepare a customised quote.',
  },
];

const rmaSteps = [
  {
    step: '01',
    title: 'Submit a Support Request',
    desc: 'Email support@pixeltech.com with your device serial number, proof of purchase, and a clear description of the issue. Our team will respond within 1 business day.',
  },
  {
    step: '02',
    title: 'Receive Your RMA Number',
    desc: 'Once your request is reviewed, we will issue an RMA (Return Merchandise Authorisation) number. Do not ship any device without this number — packages without an RMA will be returned.',
  },
  {
    step: '03',
    title: 'Ship & Track',
    desc: 'Package the device securely, write the RMA number on the outside of the box, and ship to our service centre. We will notify you when the device arrives, during repair, and when it is ready for return.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportCenter() {
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
            Support Centre
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Comprehensive support<br className="hidden sm:block" /> for every deployment.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            From warranty claims to technical troubleshooting, our team is here to keep your devices running.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-3 gap-5"
          >
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-orange-500" />,
                title: 'WhatsApp',
                desc: 'For rapid assistance, connect with our technical support team directly via WhatsApp.',
                cta: 'Open WhatsApp',
                href: 'https://wa.me/85512000000',
                external: true,
              },
              {
                icon: <Mail className="w-6 h-6 text-orange-500" />,
                title: 'Email Support',
                desc: 'Submit a detailed description of your issue and our technical team will respond within 1 business day.',
                cta: 'support@pixeltech.com',
                href: 'mailto:support@pixeltech.com',
                external: true,
              },
              {
                icon: <Phone className="w-6 h-6 text-orange-500" />,
                title: 'Phone',
                desc: 'Call our Phnom Penh office during business hours (Mon–Fri, 8am–6pm ICT).',
                cta: '+855 23 000 000',
                href: 'tel:+85523000000',
                external: true,
              },
            ].map((c) => (
              <motion.div key={c.title} variants={item} className="border border-gray-200 rounded-2xl p-7 hover:border-orange-400 hover:shadow-sm transition-all flex flex-col">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">{c.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{c.desc}</p>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  {c.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Warranty */}
      <section className="bg-[#f7f7f7] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Warranty</p>
            <h2 className="text-4xl font-black text-gray-900">Coverage you can count on.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-5"
          >
            <motion.div variants={item} className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange-500 mb-2">Standard</p>
              <h3 className="text-2xl font-black text-gray-900 mb-3">12 Months</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Included with every device purchased through Pixel. Covers manufacturing defects and hardware failures under normal use conditions.
              </p>
              <ul className="space-y-2">
                {['Hardware defects', 'Component failure', 'Screen issues (non-physical)', 'Battery performance (within spec)'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="bg-white rounded-2xl p-8 border border-orange-200">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange-500 mb-2">Extended</p>
              <h3 className="text-2xl font-black text-gray-900 mb-3">24 Months</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Available for enterprise accounts and large deployments. Includes all standard coverage plus priority repair turnaround and on-site assessment.
              </p>
              <ul className="space-y-2">
                {['All standard coverage', 'Priority 3-day repair turnaround', 'On-site assessment (select cities)', 'Loaner device (Gold/Platinum partners)'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-6 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Contact us for extended warranty →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RMA Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">RMA Process</p>
            <h2 className="text-4xl font-black text-gray-900">How repairs work.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {rmaSteps.map((s) => (
              <motion.div key={s.step} variants={item} className="relative">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-black text-sm">{s.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-10 p-6 bg-[#f7f7f7] rounded-2xl flex items-start gap-4"
          >
            <RefreshCw className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Service centre address:</strong> Contact our support team for the current service centre address in Phnom Penh. Do not ship without an RMA number — unidentified packages will be returned at sender's expense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f7f7] py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">FAQ</p>
            <h2 className="text-4xl font-black text-gray-900">Frequently asked questions.</h2>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="bg-white rounded-2xl p-6 sm:p-8"
          >
            {faqItems.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Downloads CTA */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-gray-200 rounded-2xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg">Looking for datasheets or firmware?</h3>
                <p className="text-gray-500 text-sm mt-1">Visit our Resources page for product datasheets, firmware notes, and SDK documentation.</p>
              </div>
            </div>
            <Link
              to="/resources"
              className="flex-shrink-0 inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Go to Resources
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
