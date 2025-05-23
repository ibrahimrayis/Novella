
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface InstagramPostProps {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
  likes: number;
  permalink: string;
  username?: string;
}

const InstagramPost = ({ 
  imageUrl, 
  caption, 
  timestamp, 
  likes, 
  permalink, 
  username = "novellaltd" 
}: InstagramPostProps) => {
  const { currentLanguage } = useLanguage();
  
  // Format the timestamp to a readable date
  const formattedDate = new Date(timestamp).toLocaleDateString(
    currentLanguage.code === "en" ? "en-US" : 
    currentLanguage.code === "tr" ? "tr-TR" : 
    currentLanguage.code === "ar" ? "ar-SA" : 
    currentLanguage.code === "ru" ? "ru-RU" : "en-US", 
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // Truncate caption if too long
  const shortCaption = caption.length > 100 ? `${caption.substring(0, 100)}...` : caption;

  const translations = {
    en: {
      viewOnInstagram: "View on Instagram"
    },
    tr: {
      viewOnInstagram: "Instagram'da Görüntüle"
    },
    ar: {
      viewOnInstagram: "عرض على انستغرام"
    },
    ru: {
      viewOnInstagram: "Посмотреть в Instagram"
    }
  };

  const t = translations[currentLanguage.code] || translations.en;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src="/lovable-uploads/9db85d57-4473-4a6d-b3ae-4d5a17718d30.png" 
          alt={shortCaption} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-novella-red text-white p-2 rounded-tl-lg">
          <div className="flex items-center space-x-1">
            <span className="text-sm">❤️ {likes}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Instagram size={18} className="text-novella-red" />
            <span className="text-sm font-medium text-gray-500">@{username}</span>
          </div>
          <span className="text-xs text-gray-400">{formattedDate}</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{shortCaption}</p>
        
        <a 
          href={permalink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-novella-navy font-medium text-sm hover:text-novella-red transition-colors"
        >
          {t.viewOnInstagram} →
        </a>
      </div>
    </div>
  );
};

export default InstagramPost;
