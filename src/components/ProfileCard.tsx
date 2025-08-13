import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import sebastianProfile from '@/assets/sebastian-profile.png';

const ProfileCard = () => {
  return (
    <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-sm text-text-secondary">Growth Marketer & Vibe Coder</span>
        </div>
        <Badge className="bg-success-bg text-success border-0 px-3 py-1 text-xs font-medium">
          AVAILABLE FOR WORK
        </Badge>
      </div>
      
      <div className="flex items-center gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-text-primary mb-2">I'm Sebastian Garcia</h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Growth marketer from Miami, FL.<br />
            Currently vibing and coding amazing projects.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img 
            src={sebastianProfile} 
            alt="Sebastian Garcia" 
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex gap-3">
        <Link to="/contact">
          <Button className="bg-button-primary hover:bg-button-primary-hover text-white px-6 py-2 rounded-full">
            Hire Me
          </Button>
        </Link>
        <Button variant="outline" className="border-input-border text-text-secondary hover:text-text-primary px-6 py-2 rounded-full flex items-center gap-2">
          <Copy className="w-4 h-4" />
          Copy Email
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;