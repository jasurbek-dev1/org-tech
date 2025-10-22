import { Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-float">
            Biz bilan bog‘laning
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Savol, buyurtma yoki maslahat kerakmi? Quyidagi usullar orqali biz bilan darhol bog‘laning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chap qism */}
          <div
            className="space-y-8"
            style={{ animation: 'fadeInLeft 0.8s ease-out' }}
          >
            {/* Telefon */}
            <div className="glass-effect rounded-2xl p-8 hover:border-[#00BFFF]/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Telefon</h3>
                  <p className="text-gray-400 mb-3">
                    Qo‘ng‘iroq qilib tezda ma’lumot oling yoki buyurtma bering.
                  </p>
                  <a
                    href="tel:+998335977770"
                    className="text-[#00BFFF] hover:text-[#8A2BE2] transition-colors font-semibold text-lg"
                  >
                    +998 33 597 77 70
                  </a>
                </div>
              </div>
            </div>

            {/* Telegram */}
            <div className="glass-effect rounded-2xl p-8 hover:border-[#00BFFF]/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Send size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Telegram</h3>
                  <p className="text-gray-400 mb-3">
                    Tezkor javob olish uchun Telegram orqali yozing.
                  </p>
                  <a
                    href="https://t.me/OrgTech_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00BFFF] hover:text-[#8A2BE2] transition-colors font-semibold text-lg"
                  >
                    @ORGTECH_admin
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng qism */}
          <div
            className="glass-effect rounded-2xl p-8 lg:p-12 flex flex-col justify-center"
            style={{ animation: 'fadeInRight 0.8s ease-out' }}
          >
            <div className="text-center mb-8">
              <img
                src="/logo.jpg"
                alt="ORGTECH Logo"
                className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#00BFFF] object-cover shadow-lg"
              />
              <h2 className="text-3xl font-bold gradient-text mb-4">ORGTECH</h2>
              <p className="text-gray-400 leading-relaxed">
                Aqlli texnologiya. To‘g‘ri tanlov.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#00BFFF] mb-4">
                  Ish vaqti
                </h3>
                <div className="space-y-2 text-gray-400">
                  <p>Dushanba – Juma: 9:00 - 18:00</p>
                  <p>Shanba: 10:00 - 16:00</p>
                  <p>Yakshanba: Dam olish kuni</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#00BFFF]/20">
                <a
                  href="tg://resolve?domain=ORGTECH_admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 font-semibold text-center group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Telegram orqali yozish</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
