import  { useState } from "react";
import { ShoppingCart, Info } from "lucide-react";

interface ProductCardProps {
  image: string;
  model: string;
  price: number;
  specs: string; // Har bir noutbuk uchun alohida ma’lumot
  index: number;
}

const ADMIN_USERNAME = "Orgtech_notebooks";

export default function ProductCard({
  image,
  model,
  price,
  specs,
  index,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    const message = `
Salom! 😊
Menga quyidagi noutbuk yoqdi:

🖥️ Model: ${model}
💰 Narxi: $${price}
🖼️ Rasm: ${window.location.origin}${image}

Men shu noutbukni sotib olmoqchiman. Iltimos, bog‘laning!
    `;
    const encodedMessage = encodeURIComponent(message.trim());
    const url = `https://t.me/${ADMIN_USERNAME}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* CARD */}
      <div
        className="group relative bg-gradient-to-br from-[#0f0f19] to-[#0a0a0a] rounded-xl overflow-hidden border border-[#00BFFF]/20 hover:border-[#00BFFF]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/30 hover:-translate-y-2"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        }}
      >
        <div className="relative h-60 overflow-hidden bg-[#1a1a2e]">
          <img
            src={image}
            alt={model}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="p-5 relative z-10">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
            {model}
          </h3>

          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold gradient-text">${price}</span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 py-2 px-3 rounded-lg border border-[#00BFFF]/40 text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all duration-300 font-semibold flex items-center justify-center space-x-1"
            >
              <Info size={18} />
              <span>Ma’lumot</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#00BFFF]/90 hover:to-[#8A2BE2]/90 transition-all duration-300 font-semibold text-white flex items-center justify-center space-x-1 hover:shadow-lg hover:shadow-[#00BFFF]/40"
            >
              <ShoppingCart size={18} />
              <span>Sotib olish</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#12121a] border border-[#00BFFF]/40 rounded-2xl p-5 w-[90%] max-w-md relative shadow-2xl shadow-[#00BFFF]/20">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <img
              src={image}
              alt={model}
              className="w-full h-44 object-cover rounded-xl mb-3"
            />
            <h3 className="text-xl font-bold text-[#00BFFF] mb-1">{model}</h3>
            <p className="text-gray-300 mb-2">💰 ${price}</p>
            <p className="text-gray-400 mb-4 whitespace-pre-line text-sm leading-relaxed">
              {specs}
            </p>

            <button
              onClick={handleBuyNow}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold hover:shadow-lg hover:shadow-[#00BFFF]/40 transition-all duration-300"
            >
              Admin bilan bog‘lanish
            </button>
          </div>
        </div>
      )}
    </>
  );
}
