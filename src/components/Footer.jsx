import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sparkles, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-6 sm:p-8 mb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with Latest Projects</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get notified about new project releases, special offers, and success tips for your final year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Subscribe <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-2 rounded-xl">
                <Sparkles className="text-white" size={24} />
              </div> */}
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Vivaan Softech
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium final year projects. We help students excel with 
              high-quality, original projects and comprehensive support to achieve academic success.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Home</a></li>
              <li><a href="#domains" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Domains</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Features</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Projects</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />About</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-400">Project Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Artificial Intelligence</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Web Applications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Data Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />CyberSecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"><ArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />Mobile Development</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center sm:justify-start space-x-3 bg-gray-800/50 p-4 rounded-xl">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="text-white font-medium">vivaansoftech@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 bg-gray-800/50 p-4 rounded-xl">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="text-white font-medium">+91 9493865533</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 flex items-center">
              © 2025 Vivaan Softech. Made with <Heart className="mx-2 text-red-500" size={16} /> for students
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;