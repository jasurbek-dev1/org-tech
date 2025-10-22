import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const laptopImages = [
  '/ChatGPT-Image-Oct-22-2025-06_17_57-PM.png', // public ichidagi fayl
  'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % laptopImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % laptopImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + laptopImages.length) % laptopImages.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-2xl group">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00BFFF]/20 via-transparent to-[#8A2BE2]/20 z-10 pointer-events-none"></div>

      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {laptopImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Laptop ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-effect hover:bg-[#00BFFF]/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={28} className="text-[#00BFFF]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-effect hover:bg-[#00BFFF]/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={28} className="text-[#00BFFF]" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {laptopImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
