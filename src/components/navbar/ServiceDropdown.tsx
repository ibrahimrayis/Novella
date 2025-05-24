
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { services } from '@/data/navigationData';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceDropdownProps {
  isActive: (path: string) => boolean;
  isMobile?: boolean;
}

const ServiceDropdown = ({ isActive, isMobile = false }: ServiceDropdownProps) => {
  const { t, direction } = useLanguage();
  
  if (isMobile) {
    return (
      <div className="border-t border-white/10 mt-2">
        <div className={cn(
          "px-4 py-2 text-white font-medium",
          direction === 'rtl' ? 'text-right' : 'text-left'
        )}>
          {t('common.services')}
        </div>
        {services.map((service) => (
          service.isExternal ? (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center px-8 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors",
                direction === 'rtl' ? 'text-right justify-between flex-row-reverse' : 'text-left justify-between'
              )}
            >
              <span>{service.title}</span>
              <ExternalLink size={16} className="opacity-60" />
            </a>
          ) : (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "block px-8 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors",
                direction === 'rtl' ? 'text-right' : 'text-left',
                isActive(service.href) && "bg-white/10 text-novella-red"
              )}
            >
              {service.title}
            </Link>
          )
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={cn(
              "px-3 py-2 rounded-md font-medium text-white hover:text-novella-red transition-colors bg-transparent",
              services.some(service => !service.isExternal && isActive(service.href)) && "text-novella-red font-semibold bg-white/10"
            )}
          >
            {t('common.services')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-48 p-2 bg-white dark:bg-gray-800 shadow-lg rounded-md">
              {services.map((service) => (
                service.isExternal ? (
                  <a
                    key={service.title}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <span>{service.title}</span>
                    <ExternalLink size={14} className="opacity-60" />
                  </a>
                ) : (
                  <Link
                    key={service.title}
                    to={service.href}
                    className={cn(
                      "block w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors",
                      isActive(service.href) && "bg-gray-100 dark:bg-gray-700 text-novella-red"
                    )}
                  >
                    {service.title}
                  </Link>
                )
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceDropdown;
