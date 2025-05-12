
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", label: "English" },
  { code: "tr", label: "Turkish" },
  { code: "ar", label: "Arabic" },
  { code: "ru", label: "Russian" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent backdrop-blur-sm bg-white/10 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5971e56a-e915-4ccc-a028-0175de3ca823.png" alt="Novella Logo" className="h-10 md:h-12" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-novella-navy hover:text-novella-red transition-colors px-3 py-1 rounded-md hover:bg-white/20">Home</Link>
            <div className="relative group">
              <button className="flex items-center font-medium text-novella-navy hover:text-novella-red transition-colors px-3 py-1 rounded-md hover:bg-white/20">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg rounded-md py-2">
                <Link to="/services/construction" className="block px-4 py-2 hover:bg-novella-lightGray">Construction</Link>
                <Link to="/services/import-export" className="block px-4 py-2 hover:bg-novella-lightGray">Import & Export</Link>
                <Link to="/services/manufacturing" className="block px-4 py-2 hover:bg-novella-lightGray">Manufacturing</Link>
                <Link to="/services/real-estate" className="block px-4 py-2 hover:bg-novella-lightGray">Real Estate</Link>
                <Link to="/services/b2b" className="block px-4 py-2 hover:bg-novella-lightGray">B2B Solutions</Link>
              </div>
            </div>
            <Link to="/projects" className="font-medium text-novella-navy hover:text-novella-red transition-colors px-3 py-1 rounded-md hover:bg-white/20">Projects</Link>
            <Link to="/events" className="font-medium text-novella-navy hover:text-novella-red transition-colors flex items-center px-3 py-1 rounded-md hover:bg-white/20">
              Events <Instagram size={16} className="ml-1" />
            </Link>
            <Link to="/about" className="font-medium text-novella-navy hover:text-novella-red transition-colors px-3 py-1 rounded-md hover:bg-white/20">About</Link>
            
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                    <Globe className="h-4 w-4 text-novella-navy" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => console.log(`Switching to ${lang.label}`)}>
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

          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  <Globe className="h-4 w-4 text-novella-navy" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => console.log(`Switching to ${lang.label}`)}>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button className="text-novella-navy" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && <div className="md:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
            <Link to="/" className="block px-4 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="px-4 py-2 text-novella-navy font-medium">Services</div>
            <Link to="/services/construction" className="block px-8 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Construction
            </Link>
            <Link to="/services/import-export" className="block px-8 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Import & Export
            </Link>
            <Link to="/services/manufacturing" className="block px-8 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Manufacturing
            </Link>
            <Link to="/services/real-estate" className="block px-8 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Real Estate
            </Link>
            <Link to="/services/b2b" className="block px-8 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              B2B Solutions
            </Link>
            <Link to="/projects" className="block px-4 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/events" className="block px-4 py-2 text-novella-navy hover:bg-novella-lightGray flex items-center" onClick={() => setIsOpen(false)}>
              Events <Instagram size={16} className="ml-1" />
            </Link>
            <Link to="/about" className="block px-4 py-2 text-novella-navy hover:bg-novella-lightGray" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 mt-2" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-novella-red hover:bg-red-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
