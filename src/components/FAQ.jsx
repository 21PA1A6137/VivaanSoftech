import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What programming languages and technologies do you cover?",
      answer: "We cover a wide range of modern technologies including Python, React, Node.js, React Native, Flask, Machine Learning, MongoDB, and many more. Each project uses industry-standard tools and frameworks."
    },
    {
      question: "Do you provide complete source code?",
      answer: "Yes! Every project comes with complete, well-commented source code. You'll get all files needed to run the project including frontend, backend, database schemas, and configuration files."
    },
    {
      question: "Is documentation included with projects?",
      answer: "Absolutely! Each project includes comprehensive documentation covering installation steps, project structure, features explanation, and user guides to help you understand and present your project."
    },
    {
      question: "Can I customize the projects according to my requirements?",
      answer: "Yes, all projects are designed to be easily customizable. The clean, modular code structure allows you to modify features, add new functionality, or adapt the project to your specific needs."
    },
    {
      question: "What if I face issues while setting up the project?",
      answer: "We provide detailed setup instructions with each project. If you encounter any issues, you can reach out to our support team, and we'll help you resolve any technical problems."
    },
    {
      question: "Are these projects suitable for final year submissions?",
      answer: "Yes! All projects are designed specifically for final year students. They demonstrate complex functionality, use modern technologies, and include proper documentation required for academic submissions."
    },
    {
      question: "Do you add new projects regularly?",
      answer: "We're constantly working on new projects covering emerging technologies and trending domains. Follow us to stay updated on new releases and upcoming project categories."
    },
    {
      question: "What makes your projects different from others?",
      answer: "Our projects use latest technologies, follow industry best practices, include comprehensive documentation, and are built by experienced developers. Each project is unique and production-ready."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-18 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="mr-2" size={16} />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our final year projects
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
              <button
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-6 animate-slide-up">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Feel free to reach out to us.</p>
            <button 
              className="btn-primary"
              onClick={() => window.open('https://wa.me/919493865533?text=Hi%20Vivaan%20Softech!%20I%20have%20some%20questions%20about%20your%20final%20year%20projects.%20Can%20you%20help%20me%3F', '_blank')}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;