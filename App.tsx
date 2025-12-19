
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook, MessageCircle, ChevronRight, Check, Shield, Award, Lightbulb, Users } from 'lucide-react';
import { Logo, COLORS, ROUTES } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-10 sm:h-12" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === route.path 
                  ? 'text-[#5D4A99] font-bold' 
                  : 'text-gray-600 hover:text-[#5D4A99]'
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="bg-[#F59E0B] hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Commander l'Identité
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#5D4A99] p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-[#5D4A99] hover:bg-gray-50 rounded-lg"
              >
                {route.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#F59E0B] text-white py-3 rounded-xl font-bold"
              >
                Commander l'Identité
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#5D4A99] rounded-lg flex items-center justify-center font-bold text-xl">P</div>
            <span className="text-2xl font-bold font-rounded">PETICA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            La première identité numérique et officielle pour animaux en Tunisie. "De la Possession à la Responsabilité".
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4A99] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4A99] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4A99] transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 font-rounded">Liens Rapides</h4>
          <ul className="space-y-4">
            {ROUTES.map(r => (
              <li key={r.path}>
                <Link to={r.path} className="text-gray-400 hover:text-white transition-colors text-sm">{r.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-rounded">Informations</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Livraison sur les 24 Gouvernorats</li>
            <li>Paiement à la livraison</li>
            <li>Sans abonnement mensuel</li>
            <li>Garantie de qualité PETICA</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-rounded">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={16} className="text-[#F59E0B]" />
              (+216) 29 345 067
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={16} className="text-[#F59E0B]" />
              contact@petica.pet
            </li>
            <li className="text-xs text-gray-500 mt-6 italic">
              Siège : Tunis, République Tunisienne 🇹🇳
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} PETICA. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
