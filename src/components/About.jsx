import { Target, Users, Code, Lightbulb, Heart, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Code className="text-white" size={24} />,
      title: "Quality Code",
      description: "We write clean, well-documented code following industry best practices and modern standards.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Student Success",
      description: "Our primary goal is to help students excel in their final year with outstanding projects.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Lightbulb className="text-white" size={24} />,
      title: "Innovation",
      description: "We focus on cutting-edge technologies and innovative solutions for modern challenges.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Heart className="text-white" size={24} />,
      title: "Passion",
      description: "We're passionate about technology and committed to delivering exceptional project solutions.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="mr-2" size={16} />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Vivaan Softech</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate developers dedicated to helping final year students succeed with high-quality, innovative project solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Vivaan Softech, we understand the challenges final year students face when developing their capstone projects. 
              That's why we've created a platform that provides premium, ready-to-use project solutions built with the 
              latest technologies and industry standards.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our projects are designed to not only help you meet academic requirements but also to showcase your 
              technical skills to potential employers. Each project comes with comprehensive documentation, clean code, 
              and modern technology stacks that reflect current industry trends.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Rocket className="text-primary-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Launched in 2025</h4>
                <p className="text-gray-600 text-sm">Starting our journey to help students succeed</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-primary-600 mb-1">Fresh Start</div>
              <div className="text-gray-600 text-sm">New platform, proven quality</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} mb-4`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why We Started Vivaan Softech</h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            We noticed that many talented students struggle with their final year projects due to time constraints, 
            complex requirements, or lack of exposure to modern technologies. Vivaan Softech bridges this gap by providing 
            professionally developed projects that serve as excellent learning resources and submission-ready solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Latest Tech</div>
              <div className="text-primary-100 text-sm">Modern frameworks & tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Clean Code</div>
              <div className="text-primary-100 text-sm">Industry-standard practices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Full Support</div>
              <div className="text-primary-100 text-sm">Complete documentation</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;