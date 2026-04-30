import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function CookieBanner() {
  const { language } = useLanguage();
  const tc = translations[language].cookie;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookie-consent')) return;
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tc.message}{' '}
                  <Link to="/privacy-policy" className="text-orange-500 hover:text-orange-600 underline">
                    {tc.policy}
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                >
                  {tc.accept}
                </button>
                <button
                  onClick={handleReject}
                  className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:border-gray-400 transition-colors"
                >
                  {tc.reject}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
