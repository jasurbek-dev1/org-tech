import ProductCard from '../components/ProductCard';

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
     {
      image: 'public/acer-1.jpg',
      model: '  Acer Lite  ',
      price: 435,
    },
];

const Laptops = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Bizning Premium Noutbuklar To‘plami
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Quvvat, dizayn va innovatsiyani birlashtirgan zamonaviy noutbuklarni kashf eting. 
            Har bir model mukammallik uchun yaratilgan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Laptops;
