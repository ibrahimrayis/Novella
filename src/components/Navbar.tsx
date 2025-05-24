
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import NavbarLink from './navbar/NavbarLink';
import ServiceDropdown from './navbar/ServiceDropdown';
import MobileMenu from './navbar/MobileMenu';
import LanguageSelector from './LanguageSelector';
import { navItems } from '@/data/navigationData';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check to set correct state based on current scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-2 dark:bg-black/90' : 'bg-transparent backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5971e56a-e915-4ccc-a028-0175de3ca823.png" alt="Novella Logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.titleKey}>
                  <NavbarLink
                    titleKey={item.titleKey}
                    href={item.href}
                    icon={item.icon}
                    isActive={isActive(item.href)}
                  />
                </li>
              ))}
              
              <ServiceDropdown isActive={isActive} />
            </ul>
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageSelector />
              
              <Link to="/contact">
                <Button className="bg-novella-red hover:bg-red-700 text-white">{t('common.contactUs')}</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            
            <button 
              className="text-white p-2 rounded-md hover:bg-white/20" 
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} isActive={isActive} />
      </div>
    </nav>
  );
};

export default Navbar;
