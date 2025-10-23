import ProductCard from '../components/ProductCard';

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

const Laptops = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Bizning Premium Noutbuklar To‘plami
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quvvat, dizayn va innovatsiyani birlashtirgan zamonaviy noutbuklarni kashf eting. 
            Har bir model mukammallik uchun yaratilgan.
          </p>
        </div>

        {/* Mahsulot kartalari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {laptopsData.map((laptop, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <ProductCard
                image={laptop.image}
                model={laptop.model}
                price={laptop.price}
                specs={laptop.specs}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animatsiya */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Laptops;
