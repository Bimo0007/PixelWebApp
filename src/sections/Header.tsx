import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

import categoriesData from '../data/products.json';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// Product type
type Product = {
  id: string;
  name: string;
  badge?: string;
  description: string;
  image: string;
};

type ProductCategory = {
  id: string;
  name: string;
  products: Product[];
};

// Derive flat product list per category from the shared products.json
// Categories with subCategories get their products flattened for the mega menu
const productCategories: ProductCategory[] = (categoriesData as any[]).map((cat) => ({
  id: cat.id,
  name: cat.name,
  products: cat.products
    ? cat.products
    : (cat.subCategories ?? []).flatMap((sub: any) => sub.products),
}));

// Languages
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
];

export default function Header({ forceLight = false }: { forceLight?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cpad');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const productMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProductMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsProductMenuOpen(true);
  }, []);

  const closeProductMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setIsProductMenuOpen(false), 120);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setIsScrolled(currentY > 50);

      if (currentY < 80) {
        setIsHidden(false);
      } else if (scrollingDown) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productMenuRef.current && !productMenuRef.current.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeProducts = productCategories.find(cat => cat.id === activeCategory)?.products || [];
  const currentLang = languages.find(l => l.code === language);

  // light = show white bg + dark text (when scrolled or forced)
  const light = isScrolled || forceLight || isProductMenuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden && !isProductMenuOpen && !isMobileMenuOpen ? -100 : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          light
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo — Nunito wordmark, Sunmi-style */}
            <Link to="/" className="flex items-center group">
              <span
                className={`text-[2.4rem] font-black leading-none tracking-tight transition-colors duration-300 ${
                  light ? 'text-orange-500' : 'text-white'
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Pixel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Products with Mega Menu */}
              <div
                ref={productMenuRef}
                className="relative"
                onMouseEnter={openProductMenu}
                onMouseLeave={closeProductMenu}
              >
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    light
                      ? 'text-gray-700 hover:text-orange-500'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {t.product}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {isProductMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 top-[72px] bg-white shadow-xl border-t border-gray-100"
                      onMouseEnter={openProductMenu}
                      onMouseLeave={closeProductMenu}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 mb-5 border-b border-gray-100 pb-3">
                          {productCategories.map((category) => (
                            <button
                              key={category.id}
                              onMouseEnter={() => setActiveCategory(category.id)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                                activeCategory === category.id
                                  ? 'bg-orange-500 text-white'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                          {activeProducts.map((product) => (
                            <motion.div
                              key={product.id}
                              whileHover={{ y: -8 }}
                              transition={{ duration: 0.3 }}
                            >
                            <Link
                              to={`/product/${product.id}`}
                              onClick={() => setIsProductMenuOpen(false)}
                              className="group cursor-pointer block"
                              onMouseEnter={() => setHoveredProduct(product.id)}
                              onMouseLeave={() => setHoveredProduct(null)}
                            >
                              {/* Product Image */}
                              <div className="relative h-24 mb-2 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`max-h-full max-w-full object-contain transition-all duration-500 ease-in-out ${
                                    product.hoverImage
                                      ? hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                                      : hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                                  }`}
                                />
                                {product.hoverImage && (
                                  <img
                                    src={product.hoverImage}
                                    alt={product.name + ' UI'}
                                    className={`absolute inset-0 m-auto max-h-full max-w-full object-contain transition-opacity duration-500 ease-in-out ${
                                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                                    }`}
                                  />
                                )}
                              </div>

                              {/* Product Info */}
                              <div className="text-center">
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                                  {product.name}
                                  {product.badge && (
                                    <span className="ml-1 text-xs text-orange-500">{product.badge}</span>
                                  )}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                              </div>
                            </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* View All Link */}
                        <div className="mt-5 text-center">
                          <Link
                            to="/products"
                            onClick={() => { setIsProductMenuOpen(false); window.scrollTo(0, 0); }}
                            className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                          >
                            {t.allProducts}
                            <ChevronDown className="ml-1 h-4 w-4 -rotate-90" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support */}
              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  light
                    ? 'text-gray-700 hover:text-orange-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {t.support}
              </Link>

            </nav>

            {/* Right Side - Language Selector */}
            <div className="hidden lg:flex items-center space-x-4">
              <div ref={languageMenuRef} className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                    light ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  <Globe className="mr-1 h-4 w-4" />
                  {currentLang?.name}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as 'en' | 'km');
                            setIsLanguageMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center ${
                            language === lang.code ? 'text-orange-500 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                light ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl">
              <div className="pt-20 px-6">
                <nav className="space-y-2">
                  {/* Products in Mobile — collapsible dropdown */}
                  <div className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                      className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-900"
                    >
                      {t.product}
                      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isMobileProductOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          {productCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/products#${category.id}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2 text-sm text-gray-600 py-2 pl-4 hover:text-orange-500 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                              {category.name}
                            </Link>
                          ))}
                          <Link
                            to="/products"
                            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                            className="flex items-center gap-1 text-sm text-orange-500 font-medium py-2 pl-4 mt-1"
                          >
                            {t.allProducts}
                            <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block py-3 text-gray-700 hover:text-orange-500 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.support}
                  </Link>
                </nav>
                
                {/* Language Selector in Mobile */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{t.language}</p>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'km');
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left py-2 text-sm flex items-center ${
                          language === lang.code ? 'text-orange-500 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
