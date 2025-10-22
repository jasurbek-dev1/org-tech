import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  model: string;
  price: number;
  index: number;
}

const ProductCard = ({ image, model, price, index }: ProductCardProps) => {
  const handleBuyNow = () => {
    window.open('https://t.me/Orgtech_notebooks', '_blank');
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-[#0f0f19] to-[#0a0a0a] rounded-xl overflow-hidden border border-[#00BFFF]/20 hover:border-[#00BFFF]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/30 hover:-translate-y-2"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/0 to-[#8A2BE2]/0 group-hover:from-[#00BFFF]/10 group-hover:to-[#8A2BE2]/10 transition-all duration-500 pointer-events-none"></div>

      <div className="relative h-64 overflow-hidden bg-[#1a1a2e]">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
          {model}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold gradient-text">${price}</span>
        </div>

        <button
          onClick={handleBuyNow}
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#00BFFF]/90 hover:to-[#8A2BE2]/90 transition-all duration-300 font-semibold text-white flex items-center justify-center space-x-2 group/btn hover:shadow-lg hover:shadow-[#00BFFF]/50"
        >
          <ShoppingCart size={20} className="group-hover/btn:rotate-12 transition-transform" />
          <span>Sotib olish</span>
        </button>
      </div>

      <div className="absolute top-4 right-4 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="absolute inset-0 rounded-full border-2 border-[#00BFFF] animate-ping"></div>
        <div className="absolute inset-2 rounded-full border-2 border-[#8A2BE2]"></div>
      </div>
    </div>
  );
};

export default ProductCard;
