import { Target, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-float">
            ORGTECH haqida
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovatsiya, sifat va zamonaviy texnologiyalar orqali kompyuter dunyosiga yangi yondashuv olib kiramiz.
          </p>
        </div>

        {/* Rasm va tavsif qismi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className="relative rounded-2xl overflow-hidden group"
            style={{ animation: 'fadeInLeft 0.8s ease-out' }}
          >
            <img
              src="/logo.jpg"  
              alt="ORGTECH ish muhiti"
              className="w-full h-[500px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 border-2 border-[#00BFFF]/30 rounded-2xl group-hover:border-[#00BFFF]/60 transition-colors duration-500"></div>
          </div>

          {/* Maqsadlar qismi */}
          <div
            className="space-y-6"
            style={{ animation: 'fadeInRight 0.8s ease-out' }}
          >
            <div className="glass-effect rounded-xl p-6 hover:border-[#00BFFF]/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Bizning maqsadimiz</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dunyo bo‘ylab mutaxassislar, yaratuvchilar va innovatorlarni zamonaviy texnologiyalar bilan ta’minlab, ularning samaradorligini oshirish.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-[#00BFFF]/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Sifat birinchi o‘rinda</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Har bir ORGTECH noutbuki sinchkovlik bilan tekshiriladi. Biz faqat yuqori sifatli materiallar va ishonchli komponentlardan foydalanamiz.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 hover:border-[#00BFFF]/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00BFFF] mb-2">Mijoz – markazda</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sizning mamnunligingiz biz uchun eng muhim. Biz 24/7 qo‘llab-quvvatlash, kafolatli xizmat va qulay xarid jarayonini taqdim etamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aloqa qismi */}
        <div className="glass-effect rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Biz bilan bog‘laning
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mahsulotlarimiz haqida savollaringiz bormi? Mutaxassislarimiz sizga mos noutbukni tanlashda yordam berishdan mamnun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+998335977770"
              className="flex items-center space-x-3 px-8 py-4 rounded-full glass-effect hover:border-[#00BFFF]/60 transition-all duration-300 group"
            >
              <span className="text-gray-300">+998 33 597 77 70</span>
            </a>

            <a
              href="tg://resolve?domain=ORGTECH_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300 font-semibold"
            >
              Telegram orqali yozish
            </a>
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

export default About;
