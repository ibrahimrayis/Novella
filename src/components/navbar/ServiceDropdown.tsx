
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/navigationData';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDropdownProps {
  isActive: (path: string) => boolean;
  isMobile?: boolean;
}

const ServiceDropdown = ({ isActive, isMobile = false }: ServiceDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const isServicesActive = services.some(service => isActive(service.href));

  if (isMobile) {
    return (
      <div className="border-t border-white/10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2 text-white hover:bg-white/10 transition-colors",
            isServicesActive && "bg-white/10 text-novella-red font-medium"
          )}
        >
          {t('common.services')}
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </button>
        
        {isOpen && (
          <div className="bg-black/50">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className={cn(
                  "block px-8 py-2 text-sm text-white hover:bg-white/10 transition-colors",
                  isActive(service.href) && "bg-white/10 text-novella-red font-medium"
                )}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "px-3 py-2 rounded-md font-medium text-white hover:text-novella-red transition-colors flex items-center",
          isServicesActive && "text-novella-red font-semibold bg-white/10"
        )}
      >
        {t('common.services')}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {services.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className={cn(
                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors",
                isActive(service.href) && "bg-novella-red/10 text-novella-red font-medium"
              )}
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default ServiceDropdown;
