import { Home, User, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <Link to="/">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isActive('/') ? 'text-text-primary' : 'text-text-secondary'} hover:text-text-primary`}
              >
                <Home className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isActive('/projects') ? 'text-text-primary' : 'text-text-secondary'} hover:text-text-primary`}
              >
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isActive('/contact') ? 'text-text-primary' : 'text-text-secondary'} hover:text-text-primary`}
              >
                <Calendar className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${isActive('/products') ? 'text-text-primary' : 'text-text-secondary'} hover:text-text-primary`}
              >
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </Link>
          </nav>
          
          <Link to="/contact">
            <Button className="bg-button-primary hover:bg-button-primary-hover text-white px-6 py-2 rounded-full">
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;