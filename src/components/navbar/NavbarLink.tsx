
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarLinkProps {
  title: string;
  href: string;
  icon?: string;
  isActive: boolean;
}

const NavbarLink = ({ title, href, icon, isActive }: NavbarLinkProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "px-3 py-2 rounded-md font-medium text-white hover:text-novella-red transition-colors",
        isActive && "text-novella-red font-semibold bg-white/10"
      )}
    >
      <span className="flex items-center">
        {title} {icon === "Instagram" && <Instagram size={16} className="ml-1" />}
      </span>
    </Link>
  );
};

export default NavbarLink;
