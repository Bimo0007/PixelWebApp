import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';
import productsData from '../data/products.json';
import type { Category, Product, ProductFeature, ProductSpec } from '../types/products';

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();

  // Flatten products from categories and subCategories to find the match
  const allProducts: Product[] = (productsData as Category[]).flatMap((cat) => {
    if (cat.products) return cat.products;
    if (cat.subCategories) return cat.subCategories.flatMap((sub) => sub.products);
    return [];
  });

  const product = allProducts.find((p) => p.id === productId);

  // Handle 404 - Product Not Found
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const detail = product.detail || {};
  const displayItems: Array<{
    title?: string;
    name?: string;
    label?: string;
    description?: string;
    image?: string;
  }> = detail.highlights || detail.scenarios || detail.variants || [];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight={false} />

      {/* ━━━━━━━━━━━━━━━━ 1. HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[75vh] pt-[72px] bg-[#0a0a0a] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />
        
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              {product.badge && (
                <motion.span variants={item} className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 rounded-full">
                  {product.badge}
                </motion.span>
              )}
              <motion.p variants={item} className="text-orange-400 font-semibold text-sm md:text-base mb-2 uppercase tracking-widest">
                {product.description}
              </motion.p>
              <motion.h1 variants={item} className="text-5xl sm:text-7xl lg:text-[100px] font-black text-white leading-none mb-6">
                {product.name}
              </motion.h1>
              <motion.p variants={item} className="text-white/70 text-lg md:text-xl font-light mb-8 max-w-lg">
                {detail.heroTagline || product.tagline}
              </motion.p>
              
              <motion.div variants={item}>
                <Link to="/purchase-inquiry" className="inline-flex items-center justify-center h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all">
                  Purchase Inquiry
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img src={product.image} alt={product.name} className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ 2. OVERVIEW SECTION ━━━━━━━━━━━━━━━━ */}
      {detail.overview && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Overview</p>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
                {detail.overview}
              </h2>
            </motion.div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━ 3. HIGHLIGHTS / SCENARIOS ━━━━━━━━━━━━━━━━ */}
      {(detail.highlights || detail.scenarios || detail.variants) && (
        <section className="py-20 sm:py-28 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Built for your business</h2>
            </motion.div>
            
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-8">
              {displayItems.map((item, idx: number) => (
                <motion.div key={idx} variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {item.image && (
                     <div className="h-40 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                       <img src={item.image} alt={item.title || item.name} className="h-full w-full object-cover" />
                     </div>
                  )}
                  {item.label && <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">{item.label}</p>}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title || item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━ 4. FEATURES GRID ━━━━━━━━━━━━━━━━ */}
      {detail.features && detail.features.length > 0 && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-14">
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight max-w-2xl">
                Packed with features for every workflow.
              </h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detail.features.map((feat: ProductFeature, idx: number) => (
                <motion.div key={idx} variants={item} className="group border border-gray-200 hover:border-orange-400 rounded-2xl p-8 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900 text-lg">{feat.title}</h3>
                  </div>
                  {feat.highlight && (
                    <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded mb-3">
                      {feat.highlight}
                    </span>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━ 5. TECH SPECS ━━━━━━━━━━━━━━━━ */}
      {detail.specs && detail.specs.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="mb-12">
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
              <h2 className="text-4xl font-black text-white">{product.name} Tech Specs</h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detail.specs.map((spec: ProductSpec, idx: number) => (
                <motion.div key={idx} variants={item} className="bg-[#141414] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                  <p className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">{spec.label}</p>
                  <p className="text-sm font-medium text-white whitespace-pre-line leading-relaxed">{spec.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
      <CookieBanner />
    </div>
  );
}