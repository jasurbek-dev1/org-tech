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
      <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-[#00BFFF]/20 pt-16 pb-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] opacity-60 animate-glow"></div>
            <div className="absolute inset-2 rounded-full bg-[#0a0a0a]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-[#00BFFF] animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 mt-8">
            {/* Logo va matn */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full border-3 border-transparent bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] opacity-75"></div>
                  <div className="absolute inset-1.5 rounded-full bg-[#0a0a0a]"></div>
                  <div className="absolute inset-2.5 rounded-full border-2 border-[#00BFFF]"></div>
                </div>
                <h3 className="text-xl font-bold gradient-text">ORGTECH</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aqlli texnologiya. Aqlli tanlov.
                <br />
                Zamonaviy mutaxassislar uchun premium noutbuklar.
              </p>
            </div>

            {/* Tez o‘tish bo‘limlari */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">Tez havolalar</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aloqa ma’lumotlari */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-[#00BFFF] mb-4">Bog‘lanish</h4>
              <div className="space-y-3">
                <a
                  href="https://t.me/OrgTech_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm"
                >
                  <Send size={16} />
                  <span>@ORGTECH_admin</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 hover:text-[#00BFFF] transition-colors duration-300 text-sm"
                >
                  <Phone size={16} />
                  <span>+998 33 597 77 70</span>
                </a>
              </div>
            </div>
          </div>

          {/* Pastki qism */}
          <div className="border-t border-[#00BFFF]/20 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 ORGTECH. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>

      {/* Yuqoriga chiqish tugmasi */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 z-40 group"
          aria-label="Yuqoriga qaytish"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default Footer;
