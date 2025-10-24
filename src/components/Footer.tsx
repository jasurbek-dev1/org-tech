import { Link } from 'react-router-dom';
import { Send, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Noutbuklar', path: '/laptops' },
    { name: 'Aloqa', path: '/contact' },
  ];

  return (
    <>
      <footer className="relative bg-black border-t border-gray-700 pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 mt-8 text-center md:text-left">
            {/* LOGO & DESCRIPTION */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-white/10"></div>
                  <div className="absolute inset-2 rounded-full bg-black"></div>
                  <div className="absolute inset-3 rounded-full border border-white/40"></div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  ORGTECH
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aqlli texnologiya. Aqlli tanlov.
                <br />
                Zamonaviy mutaxassislar uchun premium noutbuklar.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tez havolalar</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Bog‘lanish</h4>
              <div className="space-y-3">
                <a
                  href="https://t.me/OrgTech_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end space-x-2 text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                >
                  <Send size={16} />
                  <span>@ORGTECH_admin</span>
                </a>
                <a
                  href="tel:+998335977770"
                  className="flex items-center justify-center md:justify-end space-x-2 text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                >
                  <Phone size={16} />
                  <span>+998 33 597 77 70</span>
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 ORGTECH. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-white text-black hover:shadow-xl hover:shadow-gray-600 transition-all duration-300 z-40 group"
          aria-label="Yuqoriga qaytish"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default Footer;
