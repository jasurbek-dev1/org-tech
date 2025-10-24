import ProductCard from '../components/ProductCard';

const laptopsData = [
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
  // boshqa noutbuklar shu yerda...
];

const Laptops = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#0a0a0a] text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-float">
            Premium Noutbuklar To‘plami
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quvvat, dizayn va innovatsiyani birlashtirgan zamonaviy noutbuklarni kashf eting. 
            Har bir model mukammallik uchun yaratilgan.
          </p>
        </div>

        {/* Mahsulot kartalari */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Laptops;
