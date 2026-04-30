import { motion } from 'framer-motion';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const sections = [
  {
    title: '1. Who We Are',
    body: `Pixel Hardware Trading Co., Ltd. ("Pixel", "we", "our", or "us") is the authorised distributor of SUNMI smart business devices in Cambodia and Southeast Asia, headquartered in Phnom Penh, Cambodia. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our products and services.`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information you provide directly, including your name, email address, phone number, company name, job title, country, and any messages or inquiries you submit through our forms. We also automatically collect technical data such as your IP address, browser type, pages visited, and time spent on our site through cookies and similar technologies.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use your information to: respond to purchase inquiries and support requests; process orders and coordinate delivery; send product updates and promotional communications (where you have opted in); improve our website and services; comply with legal obligations; and detect and prevent fraud or misuse.`,
  },
  {
    title: '4. Sharing Your Information',
    body: `We do not sell your personal data to third parties. We may share your information with: SUNMI Technology Co., Ltd. (our principal manufacturer) for warranty and product registration purposes; logistics and delivery partners to fulfil orders; IT and software service providers who help us operate our website and systems; and regulatory authorities where required by law. All third parties are required to handle your data in compliance with applicable data protection laws.`,
  },
  {
    title: '5. Cookies',
    body: `Our website uses cookies to measure site performance, remember your preferences, and for marketing analytics. You can accept or decline cookies via the banner displayed when you first visit our site. Declining optional cookies will not affect your ability to use the site, but some features may be limited. Please see our Cookie Policy for more detail.`,
  },
  {
    title: '6. Data Retention',
    body: `We retain your personal data for as long as necessary to fulfil the purposes described in this policy or as required by law. Purchase inquiry data is retained for a minimum of 5 years for commercial record-keeping. Website analytics data is retained for 26 months. You may request deletion of your data at any time, subject to our legal obligations.`,
  },
  {
    title: '7. Your Rights',
    body: `You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal retention requirements); object to certain processing activities; withdraw consent where processing is based on consent; and lodge a complaint with the relevant data protection authority in your country. To exercise any of these rights, contact us at privacy@pixeltech.com.`,
  },
  {
    title: '8. Data Security',
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Our website uses HTTPS encryption. Access to personal data is restricted to authorised personnel who need it to perform their duties.`,
  },
  {
    title: '9. International Transfers',
    body: `Your data may be processed in countries other than the one in which you reside, including Cambodia, Singapore, and Thailand where we operate offices. We ensure that any cross-border transfers comply with applicable data protection requirements and that appropriate safeguards are in place.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of the page. Continued use of our website or services after changes are posted constitutes your acceptance of the revised policy.`,
  },
  {
    title: '11. Contact Us',
    body: `For any privacy-related questions or to exercise your data rights, please contact us at:\n\nPixel Hardware Trading Co., Ltd.\nPhnom Penh, Cambodia\nEmail: privacy@pixeltech.com\nPhone: +855 23 000 000`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] pb-24">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-10">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last Updated: 1 January 2026</p>
          <div className="mt-4 w-12 h-1 bg-orange-500 rounded-full" />
        </motion.div>

        <motion.p
          variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="text-gray-500 text-base leading-relaxed mb-10"
        >
          At Pixel, we take your privacy seriously. This policy describes how we handle your personal information and what rights you have over your data.
        </motion.p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <h2 className="text-lg font-black text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  );
}
