import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Vivaan Softech Logo" 
              className="h-20 w-20 object-contain mu-2 ml-1"
            />
            <h1 className="text-2xl lg:text-3xl font-bold text-gradient mr-8">Vivaan Softech</h1>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">Home</a>
            <a href="#domains" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">Domains</a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">Features</a>
            <a href="#projects" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">About</a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 hover:scale-105">FAQ</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <button 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
              onClick={() => window.open('https://wa.me/919493865533?text=Hi%20Vivaan%20Softech!%20I%27m%20interested%20in%20your%20final%20year%20projects.%20Can%20you%20help%20me%3F', '_blank')}
            >
              Chat with Us
            </button>
          </div>

          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Home</a>
              <a href="#domains" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Domains</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Features</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">About</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">FAQ</a>
              <button 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 w-full mt-4"
                onClick={() => window.open('https://wa.me/919493865533?text=Hi%20Vivaan%20Softech!%20I%27m%20interested%20in%20your%20final%20year%20projects.%20Can%20you%20help%20me%3F', '_blank')}
              >
                Chat with Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;