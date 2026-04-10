import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';
import categoriesData from '../data/products.json';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

function findProduct(id: string) {
  for (const category of categoriesData as any[]) {
    const allProducts: any[] = category.products
      ? category.products
      : (category.subCategories ?? []).flatMap((s: any) => s.products);
    const found = allProducts.find((p: any) => p.id === id);
    if (found) return { product: found, category };
  }
  return null;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const result = findProduct(id || '');

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link to="/products" className="text-orange-500 hover:text-orange-600 font-medium">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const { product, category } = result;
  const d = product.detail;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#0a0a0a] flex items-center pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-black" />
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full bg-orange-500/6 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="flex items-center gap-2 text-sm text-gray-500 mb-10"
          >
            <Link to="/products" className="hover:text-orange-400 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-400">{category.name}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300">{product.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <motion.span
                variants={fadeUp} custom={1} initial="hidden" animate="visible"
                className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-8"
              >
                {product.description}
              </motion.span>

              <motion.h1
                variants={fadeUp} custom={2} initial="hidden" animate="visible"
                className="text-7xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none mb-5"
              >
                {product.name}
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={3} initial="hidden" animate="visible"
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm"
              >
                {d?.heroTagline || product.tagline || product.description}
              </motion.p>

              <motion.div
                variants={fadeUp} custom={4} initial="hidden" animate="visible"
                className="flex flex-wrap gap-3"
              >
                <Link
                  to={`/purchase-inquiry?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 h-11 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  Purchase Inquiry <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 h-11 px-6 border border-white/20 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold rounded-lg transition-all duration-200 text-sm"
                >
                  All Products
                </Link>
              </motion.div>
            </div>

            {/* Right — product image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 rounded-full bg-orange-500/8 blur-[80px] scale-90" />
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
              />
              {product.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute top-6 right-6 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full"
                >
                  {product.badge}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      {d?.overview && (
        <section className="bg-white py-28 px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Overview</p>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-gray-900 leading-[1.1] tracking-tight">
              {d.overview}
            </h2>
          </motion.div>
        </section>
      )}

      {/* ── HIGHLIGHTS ── */}
      {d?.highlights && d.highlights.length > 0 && (
        <section className="bg-[#0a0a0a] py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              {d.highlights.map((h: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-500 mb-4">{h.label}</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">{h.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{h.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VARIANTS ── */}
      {d?.variants && d.variants.length > 0 && (
        <section className="bg-[#fafafa] py-24 px-4 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Models</p>
              <h2 className="text-4xl font-black text-gray-900">Choose Your Model</h2>
            </motion.div>
            <div
              className={`grid gap-4 ${
                d.variants.length === 2
                  ? 'md:grid-cols-2'
                  : d.variants.length === 4
                  ? 'md:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-3'
              }`}
            >
              {d.variants.map((v: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white border border-gray-200 hover:border-orange-400 rounded-2xl p-10 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-center"
                >
                  {v.image && (
                    <img
                      src={v.image}
                      alt={v.name || v.title}
                      className="w-full h-44 object-cover rounded-xl mb-6"
                    />
                  )}
                  {v.name && (
                    <div className="text-orange-500 text-lg font-black mb-1">{v.name}</div>
                  )}
                  <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURES ── */}
      {d?.features && d.features.length > 0 ? (
        <section className="bg-white py-28 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Features</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight max-w-xl">
                Key features for versatile use.
              </h2>
            </motion.div>

            <div
              className={`grid gap-4 ${
                d.features.length <= 2
                  ? 'md:grid-cols-2'
                  : d.features.length === 4
                  ? 'md:grid-cols-2 lg:grid-cols-4'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {d.features.map((f: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group border border-gray-200 hover:border-orange-400 rounded-2xl p-10 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  {f.highlight && (
                    <div className="text-3xl font-black text-orange-500 mb-4">{f.highlight}</div>
                  )}
                  {!f.highlight && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full mb-5" />
                  )}
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#0a0a0a] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-white mb-6">{product.name}</h2>
              <p className="text-gray-400 text-lg mb-10">
                {product.tagline || product.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Contact us for full specifications <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── SPECS ── */}
      {d?.specs && d.specs.length > 0 && (
        <section className="bg-white py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Specifications</p>
              <h2 className="text-4xl font-black text-gray-900">{product.name} Tech Specs</h2>
            </motion.div>

            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
            >
              {d.specs.map((spec: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i * 0.02} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all"
                >
                  <p className="text-[11px] font-bold text-gray-900 mb-2 leading-snug">{spec.label}</p>
                  <p className="text-xs leading-relaxed text-orange-500">{spec.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── SCENARIOS ── */}
      {d?.scenarios && d.scenarios.length > 0 && (
        <section className="bg-[#fafafa] py-24 px-4 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-14"
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-4">Applications</p>
              <h2 className="text-4xl font-black text-gray-900">Application Scenarios</h2>
            </motion.div>
            <div
              className={`grid gap-4 ${
                d.scenarios.length === 2
                  ? 'md:grid-cols-2'
                  : d.scenarios.length === 4
                  ? 'md:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-3'
              }`}
            >
              {d.scenarios.map((s: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i * 0.08} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                    {s.description && (
                      <p className="text-gray-300 text-sm">{s.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INQUIRY CTA ── */}
      <section id="contact" className="bg-[#080808] py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-6">Get in Touch</p>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Interested in {product.name}?
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-lg">
              Contact our team for pricing, availability, and custom configurations.
            </p>
            <Link
              to={`/purchase-inquiry?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-base"
            >
              Purchase Inquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
