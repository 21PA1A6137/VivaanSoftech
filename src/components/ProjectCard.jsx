import { Star, Code, Clock } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                size={14} 
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-700">{project.rating}</span>
            <span className="text-sm text-gray-500">({project.reviews})</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-start space-x-2 text-sm">
            <Code className="text-primary-500 mt-0.5" size={14} />
            <div>
              <span className="text-gray-500 block mb-1">Tech Stack:</span>
              <div className="flex flex-wrap gap-1">
                {project.technology.split(',').slice(0, 6).map((tech, index) => (
                  <span key={index} className="font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-lg text-xs">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock size={14} />
            <span>Complete Project Available</span>
          </div>
          <button className="btn-primary text-sm px-6 py-2.5">
            View Details
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;