import { ArrowRight, CheckCircle, Play, Star, Users, Award, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="gradient-bg py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premium Project Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Premium <span className="text-gradient">Final Year</span> Projects
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Get high-quality, ready-to-submit final year projects with complete source code, 
              comprehensive documentation, and lifetime support from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                className="btn-primary flex items-center justify-center group"
                onClick={() => window.location.href = '/projects'}
              >
                Browse Projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                className="btn-secondary flex items-center justify-center group"
                onClick={() => window.open('https://wa.me/919493865533?text=Hi%20Vivaan%20Softech!%20I%20would%20like%20to%20talk%20to%20an%20expert%20about%20final%20year%20projects.%20Can%20you%20help%20me%20choose%20the%20right%20project%3F', '_blank')}
              >
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Talk to Expert
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">100% Original Code</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Complete Documentation</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl sm:col-span-2 lg:col-span-1">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Lifetime Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop" 
                alt="Students working on projects"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center space-x-2">
                <Users className="text-primary-600" size={24} />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-600">Latest</div>
                  <div className="text-gray-600 text-sm">Projects Available</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2">
                <Award className="text-yellow-500" size={24} />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-gray-600 text-sm">Quality Code</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                <Play className="text-primary-600 ml-1" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;