import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';
import categoriesData from '../data/products.json';
import type { Category, Product, SubCategory } from '../types/products';

const categories = categoriesData as Category[];
const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease, delay: index * 0.05 } },
      }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="bg-[#efefef] rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">

          {/* Square image well */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-contain p-8 transition-all duration-500 ${
                product.hoverImage
                  ? 'group-hover:opacity-0 group-hover:scale-105'
                  : 'group-hover:scale-105'
              }`}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={`${product.name} alternate`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
              />
            )}
          </div>

          {/* Text — centered, inside the grey card */}
          <div className="px-4 pt-3 pb-6 text-center">
            {/* Name + badge on same line */}
            <div className="flex items-baseline justify-center gap-1.5 flex-wrap mb-0.5">
              <span className="font-bold text-gray-900 text-[15px] leading-snug">
                {product.name}
              </span>
              {product.badge && (
                <span className="text-orange-500 text-[13px] font-semibold">
                  {product.badge}
                </span>
              )}
            </div>
            {/* Description */}
            <p className="text-[13px] text-gray-600 font-medium leading-tight">
              {product.description}
            </p>
            {/* Tagline */}
            {product.tagline && (
              <p className="text-[12px] text-gray-400 mt-1 leading-snug line-clamp-2">
                {product.tagline}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Sub-category block ───────────────────────────────────────────────────────
function SubCategoryBlock({ sub, delay = 0 }: { sub: SubCategory; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.48, delay, ease }}
    >
      <div className="mb-7">
        <h3 className="text-lg font-bold text-gray-900">{sub.name}</h3>
        {sub.description && (
          <p className="text-sm text-gray-400 mt-0.5 max-w-2xl">{sub.description}</p>
        )}
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5% 0px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }}
      >
        {sub.products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="scroll-mt-[108px]">

      {/* Full-bleed banner ─ poster fills width, text at bottom-left */}
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden bg-black">
        <motion.img
          src={category.heroImage}
          alt={category.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        />
        {/* Left-to-right gradient keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        {/* Bottom gradient adds depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Text: bottom-left, matching SUNMI layout */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 pb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <h2 className="text-[42px] md:text-[56px] font-bold text-white leading-none mb-3 tracking-tight">
              {category.name}
            </h2>
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-[420px]">
              {category.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Products grid on white background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-10 pb-16">

          {/* Direct products */}
          {category.products && (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }}
            >
              {category.products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          )}

          {/* Sub-categories (Mobile → V/L Series, Desktop → D/T Series) */}
          {category.subCategories && (
            <div className="space-y-14">
              {category.subCategories.map((sub, i) => (
                <SubCategoryBlock key={i} sub={sub} delay={i * 0.06} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Products() {
  const [activeCategory, setActiveCategory] = useState('cpad');
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      if (currentY < 80) setIsNavbarHidden(false);
      else if (scrollingDown) setIsNavbarHidden(true);
      else setIsNavbarHidden(false);

      lastScrollY.current = currentY;

      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 160 && bottom >= 160) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Products — Pixel Hardware</title>
        <meta name="description" content="Browse Pixel Hardware's full range of smart POS terminals, mobile computers, interactive displays, and accessories." />
      </Helmet>

      <Header forceLight />

      {/* Category nav — sticky, slides up when header hides */}
      <motion.div
        animate={{ top: isNavbarHidden ? 0 : 72 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="sticky z-40 bg-white border-b border-gray-200 shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <nav className="flex items-center gap-8 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm font-medium whitespace-nowrap pb-0.5 border-b-2 transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-700 border-transparent hover:text-gray-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />

      {/* All category sections */}
      <main>
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      {/* Bottom CTA */}
      <section className="bg-[#0c0c0c] py-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Need help choosing the right product?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-[15px]">
            Our team will help you find the perfect hardware solution for your business.
          </p>
          <Link
            to="/purchase-inquiry"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-200 text-sm shadow-lg hover:shadow-orange-500/25"
          >
            Talk to sales <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
