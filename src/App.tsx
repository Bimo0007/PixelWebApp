import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import V3HDetail from './pages/V3HDetail';
import L3Detail from './pages/L3Detail';
import CPadDetail from './pages/CPadDetail';
import Flex3Detail from './pages/Flex3Detail';
import D3ProDetail from './pages/D3ProDetail';
import T3Detail from './pages/T3Detail';
import CashDrawerDetail from './pages/CashDrawerDetail';
import PrinterDetail from './pages/PrinterDetail';
import PurchaseInquiry from './pages/PurchaseInquiry';
import ContactUs from './pages/ContactUs';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
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
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
