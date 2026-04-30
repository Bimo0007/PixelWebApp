import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header forceLight={false} />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-8xl font-bold text-orange-500 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-white mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-sm">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/products"
            className="px-6 py-2.5 border border-white/20 text-white font-medium rounded-md hover:border-white/40 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
