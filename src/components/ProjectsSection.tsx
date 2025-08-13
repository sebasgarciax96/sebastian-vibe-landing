import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'vibecommerce',
    title: 'VibeCommerce',
    description: 'E-commerce growth, Conversion optimization',
    icon: '🛍️',
    color: 'bg-purple-500',
  },
  {
    id: 'growthhub',
    title: 'GrowthHub',
    description: 'Marketing automation, Analytics platform',
    icon: '📊',
    color: 'bg-gray-800',
  },
  {
    id: 'codecrafter',
    title: 'CodeCrafter',
    description: 'Developer tools, Web application',
    icon: '⚡',
    color: 'bg-orange-500',
  },
  {
    id: 'socialvibe',
    title: 'SocialVibe',
    description: 'Social media marketing, Brand strategy',
    icon: '💼',
    color: 'bg-blue-500',
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-text-muted rounded-full"></div>
          <span className="text-sm text-text-secondary">Projects</span>
        </div>
        <Link to="/projects">
          <Button variant="ghost" className="text-text-secondary hover:text-text-primary text-sm flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold text-text-primary mb-6">My Works</h2>
      <p className="text-text-secondary mb-8">
        Discover my portfolio, where purposeful marketing strategies meet captivating 
        code. My work strives to enhance growth and create amazing digital experiences.
      </p>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between p-4 rounded-[--border-radius] hover:bg-input-bg transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${project.color} rounded-[--border-radius] flex items-center justify-center text-white text-xl`}>
                {project.icon}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{project.title}</h3>
                <p className="text-text-secondary text-sm">{project.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-secondary transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;