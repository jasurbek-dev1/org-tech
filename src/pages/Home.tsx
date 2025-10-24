'use client';

import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import { Zap, Shield, Award } from "lucide-react";

interface Laptop {
  image: string;
  model: string;
  price: number;
  specs: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Home = () => {
  // 💻 Noutbuklar ro‘yxati
  const laptopsData: Laptop[] = [
    {
      image: "/new-noutbuk1.jpg",
      model: "Lenovo Ideapad 1 (New)",
      price: 305,
      specs: `⚙ AMD Ryzen 3 7320U 2.4Ghz
⚙ RAM / DDR5 8GB
⚙ Xotira / SSD NVMe 512GB
⚙ Videokarta / INTEGRATED
⚙ Ekran / 15.6” Full HD (1920x1080)
⚙ Batareyka 3-CELL
⭐️ Holati yangi karobka dokument ishlamagan
🕘 3 oy servis kafolati mavjud`,
    },
    {
      image: "/asus.jpg",
      model: "Asus Rog Strix G614J",
      price: 960,
      specs: `⚙ Intel Core i7-13650HX (14-yadro, 20-potok)
⚙ RAM / DDR5 16GB
⚙ Xotira / SSD NVMe 1.5 TB
⚙ Videokarta / Intel UHD Graphics + RTX 4050 (6GB)
⚙ Ekran / 16.0” WUXGA IPS 165Hz
⭐️ Holati ideal, ishlagan vaqti 7 kun
🕘 1 oy servis kafolati mavjud`,
    },
    {
      image: "/hp-ominbook.jpg",
      model: "HP Omnibook X Flip Laptop",
      price: 659,
      specs: `⚙ Ryzen AI 5 340 APU
⚙ RAM / DDR5 16GB
⚙ Xotira / SSD NVMe 512GB
⚙ Ekran / 16.0” 2K Touchscreen
⭐️ Holati yangi, karobka dokument bilan
🕘 3 oy servis kafolati mavjud`,
    },
    {
      image: "/new-noutbuk2.jpg",
      model: "Acer Aspire 5",
      price: 405,
      specs: `⚙ Intel Core i7-1355U (10-yadro, 12-potok)
⚙ RAM / DDR5 16GB
⚙ SSD / NVMe 512GB
⚙ Videokarta / Intel Iris Xe
⚙ Ekran / 15.6” Full HD
⭐️ Holati ideal, ozgina chizilgan joyi bor
🕘 1 oy servis kafolati mavjud`,
    },
    {
      image: "/acer.jpg",
      model: "Asus Vivobook",
      price: 339,
      specs: `⚙ Ryzen 7 5800HS
⚙ RAM / DDR4 12GB
⚙ SSD / NVMe 512GB
⚙ Radeon Graphics
⚙ Ekran / 16” WUXGA IPS
⭐️ Holati ideal
🕘 1 oy servis kafolati mavjud`,
    },
    {
      image: "/hp-1.jpg",
      model: "HP Elitebook",
      price: 310,
      specs: `⚙ Ryzen 7 Pro 4750U
⚙ RAM / DDR4 16GB
⚙ SSD / NVMe 512GB
⚙ Radeon Graphics
⚙ Ekran / 15.6” Full HD
⭐️ Klaviatura yonadi, holati ideal
🕘 1 oy servis kafolati mavjud`,
    },
    {
      image: "/gaming.jpg",
      model: "MSI Gaming GF-63",
      price: 390,
      specs: `⚙ Intel Core i5-10500H
⚙ RAM / 16GB
⚙ SSD / 256GB + HDD 1TB
⚙ GTX 1650 (4GB)
⚙ Ekran / 15.6” Full HD
⭐️ Klaviatura yonadi, holati ideal
🕘 1 oy servis kafolati mavjud`,
    },
    {
      image: "/mac.jpg",
      model: "Macbook Pro 2017",
      price: 299,
      specs: `⚙ i7 Quad-Core 2.8GHz
⚙ RAM / 16GB
⚙ SSD / 256GB
⚙ Radeon Pro 555
⚙ Ekran / Retina 15.4”
⭐️ Holati yaxshi, aybi rasmda
🕘 1 oy servis kafolati mavjud`,
    },
  ];

  // ⚙️ "Nega ORGTECH" bo‘limi
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Yorqin tezlik",
      description:
        "Eng yuqori unumdorlikka ega noutbuklar — tezkor, kuchli va samarali ishlash uchun yaratilgan.",
    },
    {
      icon: Shield,
      title: "Ishonchli sifat",
      description:
        "Sifatli komponentlar, uzoq umr va kafolat bilan har bir noutbukda ishonchli tajriba.",
    },
    {
      icon: Award,
      title: "Mukofotga sazovor",
      description:
        "Zamonaviy dizayn va texnologiyalar uyg‘unligi bilan mukammal tanlov.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* === SLIDER === */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 text-center">
          <HeroSlider />
          <p className="text-3xl md:text-4xl font-bold text-white mt-12">
            Aqlli texnologiya — to‘g‘ri tanlov!
          </p>
        </div>
      </section>

      {/* === NOUTBUKLAR === */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Eng so‘nggi noutbuklar
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {laptopsData.map((laptop, index) => (
              <ProductCard
                key={index}
                image={laptop.image}
                model={laptop.model}
                price={laptop.price}
                specs={laptop.specs}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === NIMA UCHUN ORGTECH === */}
      <section className="py-20 px-4 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Nega <span className="text-gray-400">ORGTECH</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 bg-[#111] border border-gray-700 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/10 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-white to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">
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

      {/* === Animatsiya === */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
