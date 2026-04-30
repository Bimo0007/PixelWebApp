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
    title: '1. Acceptance of Terms',
    body: `By accessing or using the Pixel Hardware Trading website (pixeltech.com) and any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, customers, resellers, and partners.`,
  },
  {
    title: '2. Products and Services',
    body: `Pixel Hardware Trading Co., Ltd. is an authorised distributor of SUNMI Technology products in Cambodia and Southeast Asia. All products listed on our website are subject to availability. Product specifications, images, and pricing are for reference only and may change without notice. We reserve the right to limit the quantity of any product sold.`,
  },
  {
    title: '3. Purchase Inquiries and Orders',
    body: `Submitting a Purchase Inquiry form does not constitute a binding order. Our sales team will contact you to confirm product availability, pricing, delivery terms, and payment. A binding purchase agreement is formed only upon our written confirmation and receipt of agreed payment. We reserve the right to refuse any order at our discretion.`,
  },
  {
    title: '4. Pricing and Payment',
    body: `All prices are quoted in USD unless otherwise stated. Prices do not include applicable taxes, duties, or shipping costs, which will be itemised in your quotation. Payment terms are specified in each commercial agreement. We accept bank transfer, and other payment methods as agreed in writing. Ownership of goods passes to you upon full payment.`,
  },
  {
    title: '5. Delivery and Risk',
    body: `Delivery times are estimates and not guaranteed. Risk of loss or damage passes to the buyer upon handover to the carrier unless otherwise agreed in writing. You are responsible for obtaining any import permits, paying customs duties, and complying with local import regulations applicable in your country.`,
  },
  {
    title: '6. Warranty',
    body: `SUNMI devices distributed by Pixel carry a 12-month manufacturer warranty against defects in materials and workmanship under normal use. This warranty does not cover damage resulting from accident, misuse, unauthorised modification, or third-party software. Extended warranty terms are available for enterprise customers. See our Support Centre for full warranty terms.`,
  },
  {
    title: '7. Returns and Refunds',
    body: `Returns are accepted within 7 days of delivery for products that are unused, in original packaging, and with a valid defect claim. Devices with manufacturing defects identified within the warranty period are serviced or replaced under the RMA process described in our Support Centre. Change-of-mind returns are not accepted for commercial orders.`,
  },
  {
    title: '8. Intellectual Property',
    body: `All content on this website, including text, images, logos, and product descriptions, is the property of Pixel Hardware Trading Co., Ltd. or its licensors (including SUNMI Technology). You may not reproduce, distribute, or use any content without our prior written consent. SUNMI is a registered trademark of SUNMI Technology Co., Ltd.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `To the maximum extent permitted by applicable law, Pixel Hardware Trading Co., Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services, including lost profits, data loss, or business interruption. Our total liability for any claim shall not exceed the amount paid by you for the product or service giving rise to the claim.`,
  },
  {
    title: '10. Governing Law',
    body: `These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Cambodia. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Phnom Penh, Cambodia, unless otherwise agreed in writing.`,
  },
  {
    title: '11. Changes to These Terms',
    body: `We may update these Terms of Service from time to time. Changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: '12. Contact',
    body: `For any questions regarding these terms, please contact:\n\nPixel Hardware Trading Co., Ltd.\nPhnom Penh, Cambodia\nEmail: info@pixeltech.com\nPhone: +855 23 000 000`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] pb-24">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-10">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last Updated: 1 January 2026</p>
          <div className="mt-4 w-12 h-1 bg-orange-500 rounded-full" />
        </motion.div>

        <motion.p
          variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="text-gray-500 text-base leading-relaxed mb-10"
        >
          Please read these terms carefully before using our website or purchasing our products. They set out your rights and obligations when dealing with Pixel Hardware Trading.
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
