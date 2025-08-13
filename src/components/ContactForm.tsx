import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { X, Instagram, Dribbble, Linkedin } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-card rounded-[--border-radius-lg] p-8 shadow-[--shadow-card]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-success rounded-full"></div>
        <span className="text-sm text-text-secondary">Hire Me</span>
        <Badge className="bg-success-bg text-success border-0 px-3 py-1 text-xs font-medium ml-4">
          AVAILABLE FOR WORK
        </Badge>
      </div>
      
      <h2 className="text-3xl font-bold text-text-primary mb-4">Growth Inquiry</h2>
      <p className="text-text-secondary mb-8">
        Got a growth opportunity and need marketing help? Reach out now
      </p>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input 
            placeholder="Name"
            className="bg-input-bg border-input-border rounded-[--border-radius] px-4 py-3"
          />
          <Input 
            placeholder="Email"
            type="email"
            className="bg-input-bg border-input-border rounded-[--border-radius] px-4 py-3"
          />
        </div>
        
        <Textarea 
          placeholder="Message"
          rows={6}
          className="bg-input-bg border-input-border rounded-[--border-radius] px-4 py-3 resize-none"
        />
        
        <Button className="w-full bg-button-primary hover:bg-button-primary-hover text-white py-3 rounded-[--border-radius] font-medium">
          Submit Inquiry
        </Button>
      </form>
      
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-text-muted rounded-full"></div>
          <span className="text-sm text-text-secondary">Follow Me</span>
        </div>
        
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
            <X className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
            <Dribbble className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-text-muted text-sm">© 2024 Sebastian Garcia — Growth Marketer</p>
      </div>
    </div>
  );
};

export default ContactForm;