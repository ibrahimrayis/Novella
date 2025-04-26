
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", label: "English" },
  { code: "tr", label: "Turkish" },
  { code: "ar", label: "Arabic" },
  { code: "ru", label: "Russian" },
];

const LanguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
          <Globe className="h-4 w-4 text-white" />
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
  );
};

export default LanguageSelector;
