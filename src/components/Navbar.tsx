
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent backdrop-blur-sm bg-white/10 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5971e56a-e915-4ccc-a028-0175de3ca823.png" alt="Novella Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link to={item.href}>
                      <NavigationMenuLink 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-medium text-novella-navy hover:text-novella-red transition-colors bg-transparent hover:bg-white/20",
                          isActive(item.href) && "text-novella-red font-semibold bg-white/10"
                        )}
                      >
                        {item.title} {item.icon}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-medium text-novella-navy hover:text-novella-red transition-colors bg-transparent hover:bg-white/20",
                      isActive('/services') && "text-novella-red font-semibold bg-white/10"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2 bg-white/90 backdrop-blur-md shadow-lg rounded-md">
                      {services.map((service) => (
                        <li key={service.title}>
                          <Link 
                            to={service.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-novella-lightGray hover:text-novella-red",
                              isActive(service.href) && "bg-novella-lightGray text-novella-red font-medium"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                    <Globe className="h-4 w-4 text-novella-navy" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code} 
                      onClick={() => setLanguage(lang)}
                      className={currentLanguage.code === lang.code ? "bg-muted font-medium" : ""}
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
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <Globe className="h-4 w-4 text-novella-navy" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-md">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setLanguage(lang)}
                    className={currentLanguage.code === lang.code ? "bg-muted font-medium" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button className="text-novella-navy p-2 rounded-md hover:bg-white/20" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-in fade-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link 
                key={item.title}
                to={item.href} 
                className={cn(
                  "flex items-center px-4 py-3 text-novella-navy hover:bg-novella-lightGray transition-colors",
                  isActive(item.href) && "bg-novella-lightGray/50 text-novella-red font-medium"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title} {item.icon}
              </Link>
            ))}
            
            <div className="px-4 py-3 text-novella-navy font-medium border-t border-gray-100 mt-2">Services</div>
            
            {services.map((service) => (
              <Link 
                key={service.title}
                to={service.href} 
                className={cn(
                  "block px-8 py-2 text-novella-navy hover:bg-novella-lightGray transition-colors",
                  isActive(service.href) && "bg-novella-lightGray/50 text-novella-red font-medium"
                )}
                onClick={() => setIsOpen(false)}
              >
                {service.title}
              </Link>
            ))}
            
            <div className="px-4 py-4 mt-2 border-t border-gray-100">
              <Link to="/contact" className="block" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-novella-red hover:bg-red-700 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
