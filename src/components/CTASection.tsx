
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  translationPrefix?: string;
}

const CTASection = ({ 
  title,
  subtitle,
  buttonText,
  buttonLink = "/contact",
  backgroundImage = "/lovable-uploads/259ac89e-f9dc-4539-a1d2-7140ab91439d.png",
  translationPrefix,
}: CTASectionProps) => {
  const { t } = useLanguage();
  
  // If translationPrefix is provided, use translations, otherwise use props
  const displayTitle = translationPrefix ? t(`${translationPrefix}.ctaTitle`) : title || t("realEstate.ctaTitle");
  const displaySubtitle = translationPrefix ? t(`${translationPrefix}.ctaSubtitle`) : subtitle || t("realEstate.ctaSubtitle");
  const displayButtonText = translationPrefix ? t(`${translationPrefix}.ctaButton`) : buttonText || t("realEstate.ctaButton");

  return (
    <section className="py-20 bg-novella-navy relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {displayTitle}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {displaySubtitle}
        </p>
        <Link to={buttonLink}>
          <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
            {displayButtonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
