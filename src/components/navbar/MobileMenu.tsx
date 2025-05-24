
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigationData';
import ServiceDropdown from './ServiceDropdown';
import NavbarLink from './NavbarLink';
import LanguageSelector from '../LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isOpen, isActive }: MobileMenuProps) => {
  const { t, direction } = useLanguage();
  
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden mt-3 py-3 bg-black/95 backdrop-blur-md dark:bg-black/98 rounded-lg shadow-lg animate-in fade-in slide-in-from-top duration-300">
      <div className="flex flex-col">
        {navItems.map((item) => (
          <Link 
            key={item.titleKey}
            to={item.href} 
            className={cn(
              "flex items-center px-4 py-3 text-white hover:bg-white/10 transition-colors",
              direction === 'rtl' ? 'text-right' : 'text-left',
              isActive(item.href) && "bg-white/10 text-novella-red font-medium"
            )}
          >
            {t(item.titleKey)}
          </Link>
        ))}
        
        <ServiceDropdown isActive={isActive} isMobile={true} />
        
        <div className={cn(
          "px-4 py-3 border-t border-white/10",
          direction === 'rtl' ? 'text-right' : 'text-left'
        )}>
          <div className={cn(
            "flex items-center",
            direction === 'rtl' ? 'justify-between flex-row-reverse' : 'justify-between'
          )}>
            <span className="text-white text-sm">{direction === 'rtl' ? 'اللغة' : 'Language'}</span>
            <LanguageSelector />
          </div>
        </div>
        
        <div className="px-4 py-3 border-t border-white/10">
          <Link to="/contact" className="block">
            <Button className="w-full bg-novella-red hover:bg-red-700 text-white">
              {t('common.contactUs')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
