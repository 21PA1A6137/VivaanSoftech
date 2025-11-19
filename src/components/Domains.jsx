import { Brain, Code, Globe, BarChart3, Shield, Smartphone } from 'lucide-react';

const Domains = () => {
  const domains = [
    {
      icon: <Brain className="text-white" size={28} />,
      title: "Artificial Intelligence",
      description: "AI-powered solutions, computer vision, and intelligent systems",
      gradient: "from-purple-500 to-purple-600",
      count: "45+ Projects"
    },
    {
      icon: <BarChart3 className="text-white" size={28} />,
      title: "Machine Learning",
      description: "Predictive models, data analysis, and ML algorithms",
      gradient: "from-blue-500 to-blue-600",
      count: "60+ Projects"
    },
    {
      icon: <Globe className="text-white" size={28} />,
      title: "Web Applications",
      description: "Modern web solutions and responsive websites",
      gradient: "from-green-500 to-green-600",
      count: "80+ Projects"
    },
    {
      icon: <BarChart3 className="text-white" size={28} />,
      title: "Data Science",
      description: "Data visualization, analytics, and insights",
      gradient: "from-orange-500 to-orange-600",
      count: "35+ Projects"
    },
    {
      icon: <Shield className="text-white" size={28} />,
      title: "CyberSecurity",
      description: "Security systems, threat detection, and protection",
      gradient: "from-red-500 to-red-600",
      count: "25+ Projects"
    },
    {
      icon: <Smartphone className="text-white" size={28} />,
      title: "Mobile Development",
      description: "Android apps and mobile solutions",
      gradient: "from-indigo-500 to-indigo-600",
      count: "55+ Projects"
    }
  ];

  return (
    <section id="domains" className="py-12 sm:py-16 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Domains We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of project domains covering the latest technologies and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-purple-50 rounded-bl-full opacity-50"></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${domain.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {domain.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {domain.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {domain.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {domain.count}
                  </span>
                  <button 
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm hover:underline transition-colors"
                    onClick={() => window.location.href = `/projects?category=${encodeURIComponent(domain.title)}`}
                  >
                    View Projects →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="btn-primary"
            onClick={() => window.location.href = '/projects'}
          >
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domains;