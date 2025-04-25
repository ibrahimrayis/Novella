import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5971e56a-e915-4ccc-a028-0175de3ca823.png" alt="Novella Logo" className="h-10 md:h-12" />
            <span className="ml-2 font-script text-novella-red font-bold text-sm md:text-base tracking-wide hover:text-novella-navy transition-colors">
              Your Success, Our Story
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-novella-navy hover:text-novella-red transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center font-medium text-novella-navy hover:text-novella-red transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md py-2">
                <Link to="/services/construction" className="block px-4 py-2 hover:bg-novella-lightGray">Construction</Link>
                <Link to="/services/import-export" className="block px-4 py-2 hover:bg-novella-lightGray">Import & Export</Link>
                <Link to="/services/manufacturing" className="block px-4 py-2 hover:bg-novella-lightGray">Manufacturing</Link>
              </div>
            </div>
            <Link to="/projects" className="font-medium text-novella-navy hover:text-novella-red transition-colors">Projects</Link>
            <Link to="/events" className="font-medium text-novella-navy hover:text-novella-red transition-colors flex items-center">
              Events <Instagram size={16} className="ml-1" />
            </Link>
            <Link to="/about" className="font-medium text-novella-navy hover:text-novella-red transition-colors">About</Link>
            <Link to="/contact">
              <Button className="bg-novella-red hover:bg-red-700 text-white">Contact Us</Button>
            </Link>
          </div>

          <button className="md:hidden text-novella-navy" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
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
