import ProductCard from '../components/ProductCard';

const laptopsData = [
  {
    image: '/asus.jpg',
    model: 'Asus Rog Strix G614J',
    price: 960,
    specs: `⚙ Intel Core i7-13700HX 13th Gen
⚙ RAM / DDR5 16GB
⚙ SSD NVMe 1TB
⚙ Ekran / 16.0” QHD+ 240Hz IPS
🎮 RTX 4060 8GB
🧊 RGB klaviatura / Metal korpus
🕘 1 yil kafolat`,
  },
  {
    image: '/acer.jpg',
    model: 'Asus Vivobook',
    price: 339,
    specs: `⚙ Intel Core i5-1135G7
⚙ RAM / DDR4 8GB
⚙ SSD / 512GB
⚙ Ekran / 15.6” Full HD
💡 Yengil dizayn, 1.6kg
🕘 6 oy kafolat`,
  },
  {
    image: '/hp-360.jpg',
    model: 'HP Probook',
    price: 210,
    specs: `⚙ Intel Core i5-7200U
⚙ RAM / 8GB DDR4
⚙ SSD / 256GB
⚙ Ekran / 14” HD
💼 Ish uchun ideal
🕘 3 oy kafolat`,
  },
  {
    image: '/hp-1.jpg',
    model: 'HP Elitebook',
    price: 310,
    specs: `⚙ Intel Core i7-8650U
⚙ RAM / 16GB DDR4
⚙ SSD / 512GB
⚙ Ekran / 14” Full HD IPS
🔒 Fingerprint
🕘 6 oy kafolat`,
  },
  {
    image: '/gaming.jpg',
    model: 'MSI Gaming GF-63',
    price: 390,
    specs: `⚙ Intel Core i5-10300H
⚙ RAM / 16GB DDR4
⚙ SSD / 512GB
🎮 GTX 1650 4GB
⚙ Ekran / 15.6” FHD 144Hz
🧊 Qizishni kamaytiruvchi tizim`,
  },
  {
    image: '/mac.jpg',
    model: 'MacBook Pro 2017',
    price: 299,
    specs: `⚙ Intel Core i5 (7th Gen)
⚙ RAM / 8GB
⚙ SSD / 256GB
⚙ Retina Display 13.3”
🍎 macOS Monterey
🕘 3 oy kafolat`,
  },
  {
    image: '/hp-laptop.jpg',
    model: 'HP Laptop',
    price: 155,
    specs: `⚙ Intel Pentium Gold
⚙ RAM / 8GB
⚙ SSD / 256GB
⚙ Ekran / 15.6” HD
💡 Yengil ofis ishlari uchun
🕘 1 oy kafolat`,
  },
  {
    image: '/acer-1.jpg',
    model: 'Acer Lite',
    price: 435,
    specs: `⚙ AMD Ryzen 5 5500U
⚙ RAM / DDR4 16GB
⚙ SSD / 512GB
⚙ Ekran / 15.6” Full HD IPS
🔋 10 soatgacha batareya
🕘 6 oy kafolat`,
  },
  {
    image: '/hp-ominbook.jpg',
    model: 'HP Omnibook X Flip Laptop',
    price: 659,
    specs: `⚙ AMD Ryzen AI 5 340 APU
⚙ RAM / DDR5 16GB
⚙ SSD / NVMe 512GB
⚙ Ekran / 16.0” 2K Touchscreen 
⚙ Batareyka / 68Wh
⭐️ Holati yangi, ishlamagan
🕘 3 oy servis kafolat`,
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
