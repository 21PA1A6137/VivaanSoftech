import { Star, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      university: "IIT Delhi",
      course: "Computer Science",
      rating: 5,
      text: "Amazing quality projects! The code was clean, well-documented, and helped me understand complex concepts. Got excellent grades in my final year.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      project: "E-Commerce Platform",
      grade: "A+"
    },
    {
      name: "Rahul Kumar",
      university: "NIT Trichy",
      course: "Information Technology",
      rating: 5,
      text: "The support team was incredibly helpful. They explained every part of the project and helped me customize it according to my requirements.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Hospital Management",
      grade: "A"
    },
    {
      name: "Sneha Patel",
      university: "BITS Pilani",
      course: "Software Engineering",
      rating: 5,
      text: "Best investment for my final year! The project was exactly what I needed and the documentation was comprehensive. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      project: "AI Chatbot",
      grade: "A+"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="mr-2" size={16} />
            Student Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Students</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who trusted us with their final year projects and achieved outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-purple-100 rounded-bl-full opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">5.0</span>
                </div>
                
                <Quote className="text-primary-200 mb-4 group-hover:text-primary-300 transition-colors" size={28} />
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 ring-2 ring-primary-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.university}</p>
                      <p className="text-xs text-primary-600 font-medium">{testimonial.course}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">
                      Grade: {testimonial.grade}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Join Our Success Community</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">Premium</div>
                <div className="text-primary-100 text-sm">Quality Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">Latest</div>
                <div className="text-primary-100 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">Complete</div>
                <div className="text-primary-100 text-sm">Source Code</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">Full</div>
                <div className="text-primary-100 text-sm">Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;