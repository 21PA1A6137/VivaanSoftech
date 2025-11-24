import { Code, FileText, Headphones, Shield, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="text-white" size={28} />,
      title: "100% Original Code",
      description: "Every project is built from scratch with clean, well-documented code that follows industry standards.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="text-white" size={28} />,
      title: "Complete Documentation",
      description: "Detailed project reports, user manuals, and technical documentation included with every project.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Headphones className="text-white" size={28} />,
      title: "Lifetime Support",
      description: "Get unlimited support and assistance even after project delivery. We're here to help you succeed.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="text-white" size={28} />,
      title: "Quality Guarantee",
      description: "All projects are thoroughly tested and come with a quality guarantee. Your satisfaction is our priority.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="text-white" size={28} />,
      title: "Quick Delivery",
      description: "Get your project files instantly after purchase. No waiting time, start working immediately.",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Award className="text-white" size={28} />,
      title: "Expert Developed",
      description: "Projects developed by industry experts with years of experience in software development.",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Vivaan Softech</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide everything you need to excel in your final year project with confidence and achieve outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">Latest</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-gray-600 text-sm">Original Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">Complete</div>
                <div className="text-gray-600 text-sm">Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;