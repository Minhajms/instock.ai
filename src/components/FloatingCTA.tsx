import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to workshops section or navigate to workshops page
    window.location.href = '/workshops';
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">Book a Workshop</span>
    </button>
  );
};

export default FloatingCTA;