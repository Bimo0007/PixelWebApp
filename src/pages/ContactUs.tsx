import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Handshake, HeadphonesIcon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
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

const contactCards = [
  {
    icon: <MessageSquare className="w-6 h-6 text-orange-500" />,
    title: 'Pre-Sales Inquiry',
    desc: 'Interested in our products? Our sales team is ready to help you find the right solution.',
    cta: 'Send an Inquiry',
    href: '/purchase-inquiry',
    internal: true,
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-orange-500" />,
    title: 'After-Sales Support',
    desc: 'Need help with your device? Our support team is here to assist you.',
    cta: 'Contact Support',
    href: 'mailto:support@pixeltech.com',
    internal: false,
  },
  {
    icon: <Handshake className="w-6 h-6 text-orange-500" />,
    title: 'Partnership & Reseller',
    desc: 'Looking to partner with us or become a reseller? Let\'s grow together.',
    cta: 'Become a Partner',
    href: 'mailto:partners@pixeltech.com',
    internal: false,
  },
];

const offices = [
  {
    region: 'Headquarters',
    city: 'Phnom Penh',
    country: 'Cambodia',
    address: 'Phnom Penh, Cambodia',
    phone: '+855 23 000 000',
    email: 'info@pixeltech.com',
  },
  {
    region: 'Regional Office',
    city: 'Bangkok',
    country: 'Thailand',
    address: 'Bangkok, Thailand',
    phone: '+66 2 000 0000',
    email: 'thailand@pixeltech.com',
  },
  {
    region: 'Regional Office',
    city: 'Singapore',
    country: 'Singapore',
    address: 'Singapore',
    phone: '+65 6000 0000',
    email: 'singapore@pixeltech.com',
  },
];

const socials = [
  { label: 'Facebook',  href: 'https://www.facebook.com/share/15mQgF2vh7b/?mibextid=wwXIfr', icon: faFacebook },
  { label: 'Instagram', href: 'https://www.instagram.com/pixelhardwaretrading?igsh=MWRpa3NrOTZ0MTN2dw%3D%3D&utm_source=qr', icon: faInstagram },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      {/* ── HERO ── */}
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
            Contact Us
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            We're here to help.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Reach out for sales, support, or partnership opportunities. Our team responds within 1 business day.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT METHOD CARDS ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                variants={item}
                className="border border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
                {card.internal ? (
                  <Link
                    to={card.href}
                    className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    {card.cta}
                  </Link>
                ) : (
                  <a
                    href={card.href}
                    className="inline-flex items-center justify-center border border-gray-200 hover:border-orange-400 hover:text-orange-500 text-gray-700 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    {card.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="bg-[#f7f7f7] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Our Offices</p>
            <h2 className="text-4xl font-black text-gray-900">Find us around the region.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {offices.map((office) => (
              <motion.div
                key={office.city}
                variants={item}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange-500 mb-3 block">
                  {office.region}
                </span>
                <h3 className="text-xl font-black text-gray-900 mb-1">{office.city}</h3>
                <p className="text-gray-400 text-sm mb-5">{office.country}</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Follow Us</p>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Stay connected with Pixel.</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
                  aria-label={s.label}
                >
                  <FontAwesomeIcon icon={s.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
