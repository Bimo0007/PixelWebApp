import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';
import categoriesData from '../data/products.json';

const categories = categoriesData as any[];

const MotionLink = motion(Link);

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <MotionLink
      to={`/product/${product.id}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group block bg-gray-50 rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center relative">
        <img
          src={product.image}
          alt={product.name}
          className={`h-4/5 w-4/5 object-contain transition-opacity duration-500 ease-in-out ${product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name + ' UI'}
            className="absolute inset-0 h-4/5 w-4/5 m-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        )}
      </div>
      <div className="p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-900 mb-1">
          {product.name}
          {product.badge && (
            <span className="ml-2 text-sm text-orange-500">{product.badge}</span>
          )}
        </h4>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        {product.tagline && (
          <p className="text-xs text-gray-400">{product.tagline}</p>
        )}
      </div>
    </MotionLink>
  );
}

// Category Section Component
function CategorySection({ category, index }: { category: any; index: number }) {
  return (
    <motion.section
      id={category.id}
      className="scroll-mt-[120px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">
            <div className="text-white z-10">
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                {category.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                {category.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <img
                src={category.heroImage}
                alt={category.name}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Direct Products */}
          {category.products && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {category.products.map((product: any) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Sub Categories */}
          {category.subCategories && (
            <div className="space-y-16">
              {category.subCategories.map((sub: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{sub.name}</h3>
                    <p className="text-gray-600 max-w-3xl">{sub.description}</p>
                  </div>
                  <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-5% 0px' }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.07 } },
                    }}
                  >
                    {sub.products.map((product: any) => (
                      <motion.div
                        key={product.id}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
                        }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('cpad');
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      // Mirror the same hide/show logic as Header
      if (currentY < 80) {
        setIsNavbarHidden(false);
      } else if (scrollingDown) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = currentY;

      // Update active category based on scroll position
      categories.forEach((cat) => {
        const element = document.getElementById(cat.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveCategory(cat.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header forceLight />

      {/* Page Title */}
      <div className="pt-[72px] bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        </div>
      </div>

      {/* Sticky Category Navigation — slides to top when navbar hides */}
      <motion.div
        animate={{ top: isNavbarHidden ? 0 : 72 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="sticky z-40 bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Category Sections */}
      <main>
        {categories.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </main>

      {/* Inquiry CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need help finding the right product?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you choose the perfect solution for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            Inquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
