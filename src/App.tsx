import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import WhatsAppButton from './components/WhatsAppButton';

// Eagerly load the home page for fastest first paint
import Home from './pages/Home';

// Lazy load all other pages to reduce initial bundle size
const Products        = lazy(() => import('./pages/Products'));
const ProductDetail   = lazy(() => import('./pages/ProductDetail'));
const V3HDetail       = lazy(() => import('./pages/V3HDetail'));
const L3Detail        = lazy(() => import('./pages/L3Detail'));
const CPadDetail      = lazy(() => import('./pages/CPadDetail'));
const Flex3Detail     = lazy(() => import('./pages/Flex3Detail'));
const D3ProDetail     = lazy(() => import('./pages/D3ProDetail'));
const T3Detail        = lazy(() => import('./pages/T3Detail'));
const CashDrawerDetail = lazy(() => import('./pages/CashDrawerDetail'));
const PrinterDetail   = lazy(() => import('./pages/PrinterDetail'));
const PurchaseInquiry = lazy(() => import('./pages/PurchaseInquiry'));
const ContactUs       = lazy(() => import('./pages/ContactUs'));
const About           = lazy(() => import('./pages/About'));
const Solutions       = lazy(() => import('./pages/Solutions'));
const Partners        = lazy(() => import('./pages/Partners'));
const SupportCenter   = lazy(() => import('./pages/SupportCenter'));
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'));
const Terms           = lazy(() => import('./pages/Terms'));
const Resources       = lazy(() => import('./pages/Resources'));
const Careers         = lazy(() => import('./pages/Careers'));
const News            = lazy(() => import('./pages/News'));
const NotFound        = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/v3h" element={<V3HDetail />} />
              <Route path="/product/l3" element={<L3Detail />} />
              <Route path="/product/cpad" element={<CPadDetail />} />
              <Route path="/product/flex-3" element={<Flex3Detail />} />
              <Route path="/product/d3-pro" element={<D3ProDetail />} />
              <Route path="/product/t3" element={<T3Detail />} />
              <Route path="/product/cash-drawer" element={<CashDrawerDetail />} />
              <Route path="/product/printer" element={<PrinterDetail />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/purchase-inquiry" element={<PurchaseInquiry />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/support" element={<SupportCenter />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
