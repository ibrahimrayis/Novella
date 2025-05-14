
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

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all"
        >
          <div className="flex items-center justify-center">
            <Globe className="h-4 w-4 mr-1 text-white opacity-70" />
            <span className="text-white text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => setLanguage(lang)}
            className={cn(
              "cursor-pointer flex items-center justify-between", 
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
