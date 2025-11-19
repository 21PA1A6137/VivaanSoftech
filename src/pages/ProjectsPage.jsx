// import { useState } from 'react';
// import { ArrowLeft, Search, Filter } from 'lucide-react';
// import { projects, categories } from '../data/projects1';

// const ProjectsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Projects');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Remove duplicates and normalize categories
//   const uniqueProjects = projects.filter((project, index, self) => 
//     index === self.findIndex(p => p.id === project.id)
//   );

//   const filteredProjects = uniqueProjects.filter(project => {
//     const matchesCategory = selectedCategory === 'All Projects' || 
//                            project.category.toLowerCase() === selectedCategory.toLowerCase() ||
//                            (selectedCategory === 'CyberSecurity' && project.category.toLowerCase().includes('cyber'));
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={() => window.history.back()}
//               className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
//             >
//               <ArrowLeft className="mr-2" size={20} />
//               Back to Home
//             </button>
//             <h1 className="text-2xl font-bold text-gradient">All Projects</h1>
//             <div></div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="gradient-bg py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Choose Your Perfect <span className="text-gradient">Project</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Browse our complete collection of premium final year projects built with the latest technologies
//           </p>
          
//           {/* Search and Filter */}
//           <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-4xl mx-auto">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search projects by title..."
//                 className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             <div className="flex items-center space-x-3 bg-white rounded-2xl shadow-lg p-2">
//               <Filter className="text-gray-400 ml-2" size={20} />
//               <select
//                 className="px-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 bg-transparent font-medium text-gray-700 cursor-pointer"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Results Count */}
//           <div className="mb-8">
//             <p className="text-gray-600">
//               Showing <span className="font-semibold text-primary-600">{filteredProjects.length}</span> projects
//               {selectedCategory !== 'All Projects' && (
//                 <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
//               )}
//             </p>
//           </div>

//           {/* Projects List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredProjects.map(project => (
//               <div key={project.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
//                 <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
//                   {project.title}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           {/* No Results */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-16">
//               <div className="text-6xl mb-4">🔍</div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
//               <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
//               <button 
//                 onClick={() => {
//                   setSearchTerm('');
//                   setSelectedCategory('All Projects');
//                 }}
//                 className="btn-primary"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-primary-600 to-purple-600 py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Need Help Choosing the Right Project?
//           </h2>
//           <p className="text-primary-100 mb-8 text-lg">
//             Our team is here to help you find the perfect project for your requirements
//           </p>
//           <button 
//             className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
//             onClick={() => window.open('https://wa.me/919493865533?text=Hi%20Vivaan%20Softech!%20I%20need%20help%20choosing%20the%20right%20final%20year%20project.%20Can%20you%20assist%20me%3F', '_blank')}
//           >
//             Chat with Our Experts
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

import { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { projects, categories } from '../data/projects1';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, []);

  // Remove duplicates and normalize categories
  const uniqueProjects = projects.filter((project, index, self) => 
    index === self.findIndex(p => p.id === project.id)
  );

  // Helper to normalize category strings
  const normalize = str => str?.toLowerCase().replace(/\s+/g, '');

  const filteredProjects = uniqueProjects.filter(project => {
    const projectCategory = normalize(project.category);
    const selectedCat = normalize(selectedCategory);

    let matchesCategory = selectedCat === normalize('All Projects') || projectCategory === selectedCat;

    // Allow partial match for CyberSecurity or similar parent topics
    if (selectedCat === 'cybersecurity') {
      matchesCategory = projectCategory.includes('cyber');
    }

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gradient">All Projects</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect <span className="text-gradient">Project</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our complete collection of premium final year projects built with the latest technologies
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by title..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-3 bg-white rounded-2xl shadow-lg p-2">
              <Filter className="text-gray-400 ml-2" size={20} />
              <select
                className="px-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 bg-transparent font-medium text-gray-700 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary-600">{filteredProjects.length}</span> projects
              {selectedCategory !== 'All Projects' && (
                <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Projects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Projects');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
