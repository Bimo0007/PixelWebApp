import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import categoriesData from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const categories = categoriesData as any[];

export default function Footer() {
  const { language } = useLanguage();
  const tf = translations[language].footer;

  const footerLinks = [
    { key: 'service', title: tf.service.title, links: tf.service.links },
    { key: 'about',   title: tf.about.title,   links: tf.about.links },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-flex items-center">
              <span className="text-[2.4rem] font-black leading-none tracking-tight text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Pixel
              </span>
            </a>
          </div>

          {/* Products Column — dynamic from products.json */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {tf.products}
            </h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products#${cat.id}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((label) => (
                  <li key={label}>
                    {label === 'Contact Us' || label === 'ទំនាក់ទំនងយើង' ? (
                      <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {label}
                      </Link>
                    ) : label === 'Purchase Inquiry' || label === 'សាកសួរការទិញ' ? (
                      <Link to="/purchase-inquiry" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {label}
                      </Link>
                    ) : label === 'About Us' || label === 'អំពីយើង' ? (
                      <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {label}
                      </Link>
                    ) : (
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              {tf.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {tf.legal}
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {tf.privacy}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
