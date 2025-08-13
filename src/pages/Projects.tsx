import Header from '@/components/Header';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'vibecommerce',
    title: 'VibeCommerce',
    description: 'E-commerce growth, Conversion optimization',
    details: 'A comprehensive e-commerce platform focused on conversion optimization and growth marketing strategies. Built with modern React architecture and advanced analytics.',
    icon: '🛍️',
    color: 'bg-purple-500',
    technologies: ['React', 'Node.js', 'Analytics', 'A/B Testing'],
    status: 'Live'
  },
  {
    id: 'growthhub',
    title: 'GrowthHub',
    description: 'Marketing automation, Analytics platform',
    details: 'Marketing automation platform that helps businesses scale their marketing efforts with data-driven insights and automated workflows.',
    icon: '📊',
    color: 'bg-gray-800',
    technologies: ['TypeScript', 'Python', 'Machine Learning', 'APIs'],
    status: 'In Development'
  },
  {
    id: 'codecrafter',
    title: 'CodeCrafter',
    description: 'Developer tools, Web application',
    details: 'Suite of developer tools designed to streamline the coding workflow and enhance productivity for development teams.',
    icon: '⚡',
    color: 'bg-orange-500',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    status: 'Live'
  },
  {
    id: 'socialvibe',
    title: 'SocialVibe',
    description: 'Social media marketing, Brand strategy',
    details: 'Social media management platform that combines content creation, scheduling, and analytics for comprehensive brand strategy.',
    icon: '💼',
    color: 'bg-blue-500',
    technologies: ['React', 'Social APIs', 'Analytics', 'Design'],
    status: 'Live'
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-text-primary mb-4">My Projects</h1>
            <p className="text-text-secondary text-lg">
              Discover my portfolio, where purposeful marketing strategies meet captivating 
              code. My work strives to enhance growth and create amazing digital experiences.
            </p>
          </div>
          
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card] hover:shadow-[--shadow-card-hover] transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${project.color} rounded-[--border-radius] flex items-center justify-center text-white text-2xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                      <p className="text-text-secondary">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-success-bg text-success' 
                        : 'bg-warning-bg text-warning'
                    }`}>
                      {project.status}
                    </span>
                    <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-secondary transition-colors" />
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.details}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-input-bg text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;