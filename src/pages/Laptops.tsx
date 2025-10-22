import ProductCard from '../components/ProductCard';

const laptopsData = [
  {
    image: '/hp-ominbook.jpg',
    model: 'Hp Omnibook X Flip Laptop',
    price: 659,
  },
  {
    image: '/asus.jpg',
    model: 'Asus Rog Strix G614J',
    price: 960,
  },
  {
    image: '/acer.jpg',
    model: 'Asus Vivobook',
    price: 339,
  },
  {
    image: '/hp-360.jpg',
    model: 'Hp Probook',
    price: 210,
  },
  {
    image: '/hp-1.jpg',
    model: 'Hp Elitebook',
    price: 310,
  },
  {
    image: '/gaming.jpg',
    model: 'MSI Gaming GF-63',
    price: 390,
  },
  {
    image: '/mac.jpg',
    model: 'Macbook Pro 2017',
    price: 299,
  },
  {
    image: '/hp-laptop.jpg',
    model: 'Hp Laptop',
    price: 155,
  },
  {
    image: '/acer-1.jpg',
    model: 'Acer Lite',
    price: 435,
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
