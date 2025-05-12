
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();
  const isMobile = useIsMobile();
  const location = useLocation();

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

  const services = [
    { title: "Construction", href: "/services/construction" },
    { title: "Import & Export", href: "/services/import-export" },
    { title: "Manufacturing", href: "/services/manufacturing" },
    { title: "Real Estate", href: "/services/real-estate" },
    { title: "B2B Solutions", href: "/services/b2b" },
  ];

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Events", href: "/events", icon: <Instagram size={16} className="ml-1" /> },
    { title: "About", href: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLanguageChange = (lang: typeof languages[0]) => {
    console.log(`Setting language to ${lang.label}`);
    setLanguage(lang);
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
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md font-medium text-white hover:text-novella-red transition-colors",
                      isActive(item.href) && "text-novella-red font-semibold bg-white/10"
                    )}
                  >
                    <span className="flex items-center">
                      {item.title} {item.icon && item.icon}
                    </span>
                  </Link>
                </li>
              ))}
              
              <li className="relative group">
                <button 
                  className={cn(
                    "px-3 py-2 rounded-md font-medium text-white hover:text-novella-red transition-colors flex items-center",
                    isActive('/services') && "text-novella-red font-semibold bg-white/10"
                  )}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {services.map((service) => (
                      <Link 
                        key={service.title}
                        to={service.href}
                        className={cn(
                          "block px-4 py-2 text-sm text-white hover:bg-white/10",
                          isActive(service.href) && "bg-white/10 text-novella-red font-medium"
                        )}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                    <Languages className="h-4 w-4 text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-md dark:bg-black/95">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code} 
                      onClick={() => handleLanguageChange(lang)}
                      className={cn(
                        "text-white hover:bg-white/10",
                        currentLanguage.code === lang.code ? "bg-white/10 font-medium" : ""
                      )}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/contact">
                <Button className="bg-novella-red hover:bg-red-700 text-white">Contact Us</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <Languages className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-md dark:bg-black/95">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => handleLanguageChange(lang)}
                    className={cn(
                      "text-white hover:bg-white/10",
                      currentLanguage.code === lang.code ? "bg-white/10 font-medium" : ""
                    )}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
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
        {isOpen && (
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
                  {item.title} {item.icon && item.icon}
                </Link>
              ))}
              
              <div className="px-4 py-2 text-white font-medium border-t border-white/10 mt-1">Services</div>
              
              {services.map((service) => (
                <Link 
                  key={service.title}
                  to={service.href} 
                  className={cn(
                    "block px-6 py-2 text-white hover:bg-white/10 transition-colors",
                    isActive(service.href) && "bg-white/10 text-novella-red font-medium"
                  )}
                >
                  {service.title}
                </Link>
              ))}
              
              <div className="px-4 py-3 mt-1 border-t border-white/10">
                <Link to="/contact" className="block">
                  <Button className="w-full bg-novella-red hover:bg-red-700 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
