import { Home, User, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <Home className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <Calendar className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </nav>
          
          <Button className="bg-button-primary hover:bg-button-primary-hover text-white px-6 py-2 rounded-full">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;