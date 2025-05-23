
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigationData';
import ServiceDropdown from './ServiceDropdown';
import NavbarLink from './NavbarLink';
import LanguageSelector from '../LanguageSelector';

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isOpen, isActive }: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden mt-3 py-3 bg-black/95 backdrop-blur-md dark:bg-black/98 rounded-lg shadow-lg animate-in fade-in slide-in-from-top duration-300">
      <div className="flex flex-col">
        {navItems.map((item) => (
          <Link 
            key={item.title}
            to={item.href} 
            className={cn(
              "flex items-center px-4 py-2 text-white hover:bg-white/10 transition-colors",
              isActive(item.href) && "bg-white/10 text-novella-red font-medium"
            )}
          >
            {item.title}
          </Link>
        ))}
        
        <ServiceDropdown isActive={isActive} isMobile={true} />
        
        <div className="px-4 py-2 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">Language</span>
            <LanguageSelector />
          </div>
        </div>
        
        <div className="px-4 py-3 border-t border-white/10">
          <Link to="/contact" className="block">
            <Button className="w-full bg-novella-red hover:bg-red-700 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
