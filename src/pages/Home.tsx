import HeroSlider from '../components/HeroSlider';
import { Zap, Shield, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Yorqin tezlik',
      description: 'Eng yuqori unumdorlikka ega protsessorlar — bir nechta ishni bir paytda bajaring.',
    },
    {
      icon: Shield,
      title: 'Ishonchli sifat',
      description: 'Uzoq muddatli kafolat va mustahkam korpus bilan mukammal qurilish sifati.',
    },
    {
      icon: Award,
      title: 'Mukofotga sazovor',
      description: 'Butun dunyo tan olgan mukammal dizayn va texnologiyalar.',
    },
  ];

  const laptopsData = [
    {
      image: 'public/hp-ominbook.jpg',
      model: ' Hp omnibook X Flip Laptop',
   
      price: 659,
    },
    {
      image: 'public/asus.jpg',
      model: 'Asus Rog Strix G614J',
      price: 960,
    },
    {
      image: 'public/acer.jpg',
      model: 'Asus Vivobook ',
      price: 339,
    },
    {
      image: 'public/hp-360.jpg',
      model: ' Hp Probook',
      price: 210,

    },
    {
      image: 'public/hp-1.jpg',
      model: 'Hp Elitebook',
      price: 310,
    },
    {
      image: 'public/gaming.jpg',
      model: 'Msi Gaming GF-63',
      price: 390,
    },
    {
      image: 'public/mac.jpg',
      model: 'Macbook Pro 2017',
      price: 299,
    },
    {
      image: 'public/hp-laptop.jpg',
      model: ' Hp laptop ',
      price: 155,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Slider bo‘limi */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 via-[#0a0a0a] to-[#8A2BE2]/10"></div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00BFFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12">
          <div className="mb-12">
            <HeroSlider />
          </div>

          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text animate-pulse">
              Aqlli texnologiya — to‘g‘ri tanlov!
            </p>
          </div>
        </div>
      </section>

      {/* Noutbuklar bo‘limi */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Eng so‘nggi noutbuklar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {laptopsData.map((laptop, index) => (
              <ProductCard
                key={index}
                image={laptop.image}
                model={laptop.model}
                price={laptop.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Afzalliklar bo‘limi */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Nega ORGTECH?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-8 hover:border-[#00BFFF]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00BFFF]/20 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-[#00BFFF]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
