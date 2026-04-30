import { Helmet } from 'react-helmet-async';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import HomeProductGrid from '../sections/HomeProductGrid';
import ExperienceSection from '../sections/ExperienceSection';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>Pixel Hardware — Smart POS & Payment Terminals</title>
        <meta name="description" content="Pixel Hardware is a leading distributor of SUNMI smart POS terminals, mobile computers, and payment devices across Southeast Asia." />
      </Helmet>
      <Header />

      <main>
        {/* Hero carousel */}
        <Hero />

        {/* Sunmi-style product card grid — driven by products.json */}
        <HomeProductGrid />

        {/* Digital store experience banner */}
        <ExperienceSection />

      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
