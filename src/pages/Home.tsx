import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import { Zap, Shield, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Yorqin tezlik",
      description:
        "Eng yuqori unumdorlikka ega protsessorlar — bir nechta ishni bir paytda bajaring.",
    },
    {
      icon: Shield,
      title: "Ishonchli sifat",
      description:
        "Uzoq muddatli kafolat va mustahkam korpus bilan mukammal qurilish sifati.",
    },
    {
      icon: Award,
      title: "Mukofotga sazovor",
      description:
        "Butun dunyo tan olgan mukammal dizayn va texnologiyalar uyg‘unligi.",
    },
  ];

  const laptopsData = [
   {
      image: "/new-noutbuk1.jpg",
      model: "Lenovo Ideapad 1 (New)",
      price: 305,
      specs: `⚙ AMD Ryzen 3 7320U 2.4Ghz
⚙ RAM / DDR5 8GB
⚙ Xotira / SSD NVMe 512GB
⚙Videokarta / INTEGRATED
⚙ Ekran / 15.6” Full HD (1920x1080)
⚙ Batareyka 3-CELL
⭐️ Holati yangi karobka dokument ishlamagan
🕘 3 oy servis kafolati mavjud`,
    }, {
      image: "/asus.jpg",
      model: "Asus Rog Strix G614J",
      price: 960,
      specs: `⚙ intel Core i7-13650HX 2.60Ghz (14-yadro 20-potok)
⚙ RAM / DDR5 16GB
⚙ Xotira / SSD NVMe 1.5 TB
⚙Videokarta / intel UHD Graphics + NVIDIA GeForce RTX 4050 (6gb)
⚙ Ekran / 16.0” WUXGA IPS (1920x1200) 165Hz
⚙ Batareyka saqlashi yaxshi 
⭐️ Holati ideal yangidek umumiy ishlagan vaqti 7-kun 
🕘 1 oy servis kafolati mavjud.`,
    },
    {
      image: "/hp-ominbook.jpg",
      model: "HP Omnibook X Flip Laptop",
      price: 659,
      specs: `⚙ AMD Ryzen AI 5 340 APU
⚙ RAM / DDR5 16GB
⚙ Xotira / SSD NVMe 512GB
⚙ Ekran / 16.0” 2K (1920x1200) Touchscreen 
⚙ Batareyka 4-cell 68Wh
⭐️ Holati yangi karobka dokument ishlamagan
🕘 3 oy servis kafolati mavjud`,
    },
     {
      image: "/new-noutbuk2.jpg",
      model: " Acer aspire 5",
      price: 405,
      specs: `⚙ intel Core i7-1355U 1.70Ghz (10-yadro 12-potok)
⚙ RAM / DDR5 16GB
⚙ Xotira / SSD NVMe 512GB
⚙Videokarta / intel Iris Xe Graphics 
⚙ Ekran / 15.6” Full HD (1920x1080)
⚙ Batareyka saqlashi yaxshi 
⭐️ Holati ideal ustida azgina chizilgan joyi bor
🕘 1 oy servis kafolati mavjud`,
    },{
      image: "/acer.jpg",
      model: "Asus Vivobook",
      price: 339,
      specs: `⚙ AMD Ryzen 7 5800HS with Radeon Graphics 
⚙ RAM / DDR4 12GB
⚙ Xotira / SSD NVMe 512GB
⚙Videokarta / AMD Radeon Graphics 
⚙ Ekran / 16.0” WUXGA IPS (1920x1200) 
⚙ Batareyka saqlashi yaxshi 
⭐️ Holati ideal
🕘 1 oy servis kafolati mavjud`,
    },
   
    {
      image: "/hp-1.jpg",
      model: "HP Elitebook",
      price: 310,
      specs: `⚙ AMD Ryzen 7 Pro 4750U with Radeon Graphics 
⚙ RAM / DDR4 16GB
⚙ Xotira / SSD NVMe 512GB
⚙Videokarta / AMD Radeon Graphics 
⚙ Ekran / 15.6” Full HD (1920x1080)
⚙ Batareyka saqlashi yaxshi 
• Klaviaturasi yonadi
⭐️ Holati ideal 
🕘 1 oy servis kafolati mavjud.`,
    },
    {
      image: "/gaming.jpg",
      model: "MSI Gaming GF-63",
      price: 390,
      specs: `• intel Core i5-10500H 2.50Ghz (6-yadro 12-potok)
• RAM / DDR4 16GB
• Xotira / SSD NVMe 256GB + HDD 1TB
• Videokarta / intel UHD Graphics 620 + NVIDIA GeForce GTX 1650 (4gb)
• Ekran / 15.6” Full HD (1920x1080)
• Klaviaturasi yonadi
• Batareyka saqlashi yaxshi
• Holati ideal 
• 1 oy servis kafolati mavjud.`,
    },
    {
      image: "/mac.jpg",
      model: "Macbook Pro 2017",
      price: 299,
      specs: `• 2.8 Ghz Quad-Core i7
• RAM / 16GB
• Xotira / 250GB
• Ekran / 15.4”-inch (2880x1800)
• Videokarta / intel HD Graphics 630 + Radeon Pro 555 (2gb)
• Batareyka 538-ta sikl servis recommended
• Klaviaturasi yonadi
• Holati yaxshi aybi rasmda
• 1 oy servis kafolati mavjud`,
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* === SLIDER === */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 via-[#0a0a0a] to-[#8A2BE2]/10"></div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00BFFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 text-center">
          <HeroSlider />
          <p className="text-3xl md:text-4xl font-bold gradient-text mt-12 animate-pulse">
            Aqlli texnologiya — to‘g‘ri tanlov!
          </p>
        </div>
      </section>

      {/* === NOUTBUKLAR === */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#12121a]">
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
                specs={laptop.specs}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === NIMA UCHUN ORGTECH === */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Nega <span className="text-[#00BFFF]">ORGTECH</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 bg-gradient-to-br from-[#111] to-[#1b1b1b] border border-[#00BFFF]/20 hover:border-[#00BFFF]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00BFFF]/20 group"
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
        .gradient-text {
          background: linear-gradient(to right, #00BFFF, #8A2BE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
