import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Noutbuklar', path: '/laptops' },
    { name: 'Aloqa', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
         {/* LOGO */}
<Link to="/" className="flex items-center space-x-3 group">
  <img
    src="public/logo.jpg"
    alt="ORGTECH Logo"
    className="w-12 h-12 rounded-full object-cover border-2 border-[#00BFFF] group-hover:scale-110 transition-transform duration-300"
  />
  <span className="text-2xl font-bold gradient-text">ORGTECH</span>
</Link>


          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-[#00BFFF] ${
                  location.pathname === item.path ? 'text-[#00BFFF]' : 'text-gray-300'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* TELEGRAM BUTTON */}
          <a
            href="https://t.me/OrgTech_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 group"
          >
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Telegram</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#00BFFF] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-[#00BFFF]/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-[#00BFFF] ${
                  location.pathname === item.path ? 'text-[#00BFFF]' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://t.me/OrgTech_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 w-full justify-center"
            >
              <Send size={18} />
              <span className="text-sm font-semibold">Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
