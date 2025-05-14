
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { services } from '@/data/navigationData';

interface ServiceDropdownProps {
  isActive: (path: string) => boolean;
  isMobile?: boolean;
}

const ServiceDropdown = ({ isActive, isMobile = false }: ServiceDropdownProps) => {
  if (isMobile) {
    return (
      <>
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
      </>
    );
  }
  
  return (
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
  );
};

export default ServiceDropdown;
