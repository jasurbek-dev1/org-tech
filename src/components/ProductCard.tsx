'use client';

import { useState } from "react";
import { ShoppingCart, Info } from "lucide-react";

interface ProductCardProps {
  image: string;
  model: string;
  price: number;
  specs: string;
  index: number;
}

const ADMIN_USERNAME = "Orgtech_notebooks";

export default function ProductCard({ image, model, price, specs, index }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    const message = `
Assalomu alaykum!
Menga quyidagi noutbuk yoqdi:

🖥️ Model: ${model}
💰 Narxi: $${price}
🖼️ Rasm: ${window.location.origin}${image}

Menga shu noutbuk yoqdi! Javobingizni kutaman.
    `;
    const encodedMessage = encodeURIComponent(message.trim());
    window.open(
      `https://t.me/${ADMIN_USERNAME}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <div
        className="flex flex-col bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:-translate-y-2"
        style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
      >
        {/* IMAGE */}
        <div className="h-44 w-full overflow-hidden relative">
          <img
            src={image}
            alt={model}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{model}</h3>
            <p className="text-lg sm:text-xl font-bold text-gray-300">${price}</p>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex gap-2 flex-wrap">
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 py-2 px-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all flex items-center justify-center gap-1 text-sm"
            >
              <Info size={16} />
              <span>Ma’lumot</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-white to-gray-200 text-black font-semibold hover:from-gray-300 hover:to-white transition-all flex items-center justify-center gap-1 text-sm"
            >
              <ShoppingCart size={16} />
              <span>Sotib olish</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#0d0d0d] border border-gray-700 rounded-2xl p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <img src={image} alt={model} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold text-white mb-1">{model}</h3>
            <p className="text-gray-300 mb-2">💰 ${price}</p>
            <p className="text-gray-400 mb-5 whitespace-pre-line text-sm leading-relaxed">{specs}</p>

            <button
              onClick={handleBuyNow}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-white to-gray-200 text-black font-semibold hover:from-gray-300 hover:to-white transition-all"
            >
              Admin bilan bog‘lanish
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
