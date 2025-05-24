
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            "transition-all h-9 px-3",
            isMobile 
              ? "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20" 
              : "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
          )}
        >
          <div className="flex items-center justify-center space-x-1.5">
            <Globe className="h-4 w-4 text-white opacity-70" />
            <span className="text-white text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white dark:bg-gray-800 z-50">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => setLanguage(lang)}
            className={cn(
              "cursor-pointer flex items-center justify-between py-2.5", 
              currentLanguage.code === lang.code ? "bg-muted font-medium" : ""
            )}
          >
            <span>{lang.label}</span>
            {currentLanguage.code === lang.code && 
              <span className="h-2 w-2 rounded-full bg-novella-red"></span>
            }
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
