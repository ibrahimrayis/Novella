
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-novella-navy text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/a37276e8-d5b1-4fce-967f-f2bf01f89703.png" 
                alt="Novella Logo" 
                className="h-10 mr-2" 
              />
              <span className="text-xl font-bold">Novella</span>
            </div>
            <p className="mb-6 text-gray-300">
              Designing Innovation, Building Success, Transforming Futures
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-novella-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-novella-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-novella-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-novella-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/construction" className="text-gray-300 hover:text-novella-red transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services/import-export" className="text-gray-300 hover:text-novella-red transition-colors">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link to="/services/manufacturing" className="text-gray-300 hover:text-novella-red transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate" className="text-gray-300 hover:text-novella-red transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-novella-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-novella-red transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-novella-red transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-novella-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 flex-shrink-0 text-novella-red" size={20} />
                <span className="text-gray-300">
                  Istanbul, Venezia Mega Outlet, Block G5, Floor 0, Office 49
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-3 flex-shrink-0 text-novella-red" size={20} />
                <span className="text-gray-300">+90-552 88 00005</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 flex-shrink-0 text-novella-red" size={20} />
                <a href="mailto:info@novellaltd.com" className="text-gray-300 hover:text-novella-red transition-colors">
                  info@novellaltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Novella Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-novella-red text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-novella-red text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
