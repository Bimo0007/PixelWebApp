import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Zap, Globe2, Users, TrendingUp } from 'lucide-react';
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

const values = [
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: 'Ownership & Impact',
    desc: 'Pixel is scaling rapidly across Southeast Asia. Every role carries genuine responsibility, and the results of your work are visible and measurable from day one.',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-orange-500" />,
    title: 'Regional Ambition',
    desc: 'We operate across Cambodia, Thailand, and Singapore with continued expansion underway. This is an opportunity to be part of that growth at a formative stage.',
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: 'Lean & Collaborative',
    desc: 'Our lean team structure eliminates unnecessary process and fosters direct collaboration across all functions, with clear access to senior leadership.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
    title: 'Internal Growth',
    desc: 'We invest in our people and promote from within. Those who contribute to building Pixel today are positioned to lead it tomorrow.',
  },
];

const openings = [
  {
    title: 'Sales Executive',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    dept: 'Sales',
    description:
      'Responsible for identifying, developing, and closing new business opportunities with retail, F&B, and logistics enterprises across Cambodia. The role spans the full sales cycle from initial prospecting through to contract execution and account onboarding.',
    requirements: [
      '2+ years B2B sales experience',
      'Strong Khmer and English communication',
      'Experience in tech hardware or POS is a plus',
      'Self-motivated and target-driven',
    ],
  },
  {
    title: 'Technical Support Engineer',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    dept: 'Support',
    description:
      'A core role within our after-sales function, responsible for device troubleshooting, customer onboarding, integration guidance, RMA coordination, and maintaining our technical knowledge base.',
    requirements: [
      'Diploma or degree in IT, Electronics, or related field',
      'Experience with Android device management',
      'Strong troubleshooting and communication skills',
      'Familiarity with POS hardware or payment terminals is a plus',
    ],
  },
  {
    title: 'Business Development Manager',
    location: 'Bangkok, Thailand',
    type: 'Full-time',
    dept: 'Business Development',
    description:
      'Responsible for Pixel\'s commercial expansion in Thailand, including building and managing relationships with resellers, system integrators, and enterprise accounts. The role owns the country partner ecosystem and revenue target.',
    requirements: [
      '4+ years in B2B sales, distribution, or technology',
      'Native Thai speaker, strong English',
      'Established network in retail, F&B, or logistics in Thailand',
      'Experience in hardware distribution or payment terminals preferred',
    ],
  },
  {
    title: 'Marketing Coordinator',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    dept: 'Marketing',
    description:
      'Responsible for Pixel\'s digital presence and marketing calendar. Scope includes social media content, website updates, trade show coordination, and the production of sales collateral and product materials.',
    requirements: [
      '1–2 years in digital marketing or content',
      'Strong written English and Khmer',
      'Experience with social media management (Facebook, Instagram)',
      'Graphic design skills (Canva, Figma, or Photoshop) is a plus',
    ],
  },
];

export default function Careers() {
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
            Careers
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
          >
            Join the team<br className="hidden sm:block" /> building SE Asia's<br className="hidden sm:block" /> POS infrastructure.
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Pixel Hardware Trading is an authorised SUNMI distributor expanding across Southeast Asia. We are looking for commercially driven, technically capable professionals to grow with us.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f7f7] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-14"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Why Pixel</p>
            <h2 className="text-4xl font-black text-gray-900">Why people join us.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={item} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">{v.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Open Roles</p>
            <h2 className="text-4xl font-black text-gray-900">We're hiring.</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            className="space-y-5"
          >
            {openings.map((role) => (
              <motion.div
                key={role.title}
                variants={item}
                className="border border-gray-200 rounded-2xl p-7 hover:border-orange-400 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-orange-50 text-orange-500 px-3 py-1 rounded-full mb-3">
                      {role.dept}
                    </span>
                    <h3 className="text-xl font-black text-gray-900">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />{role.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />{role.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{role.description}</p>

                <div className="mb-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Requirements</p>
                  <ul className="space-y-1.5">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:careers@pixeltech.com?subject=Application: ${role.title}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Apply for this role <ArrowRight className="w-4 h-4" />
                </a>
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
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">No Suitable Role Listed?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Submit a speculative application.</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              We welcome expressions of interest from qualified candidates. Submit your CV with a brief note on your area of expertise and we will consider you for future opportunities.
            </p>
            <a
              href="mailto:careers@pixeltech.com"
              className="inline-flex items-center justify-center h-11 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Send Your CV
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
