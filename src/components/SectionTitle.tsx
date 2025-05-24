
import { useLanguage } from "@/contexts/LanguageContext";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '',
  titleClassName = 'text-novella-navy',
  subtitleClassName = 'text-gray-600'
}: SectionTitleProps) => {
  const { direction } = useLanguage();
  
  // Handle RTL text alignment
  let computedAlign = align;
  if (direction === 'rtl') {
    if (align === 'left') computedAlign = 'right';
    else if (align === 'right') computedAlign = 'left';
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[computedAlign]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${computedAlign === 'center' ? 'mx-auto' : ''} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-novella-red mt-4 ${
        computedAlign === 'center' ? 'mx-auto' : computedAlign === 'right' ? 'ml-auto' : ''
      }`} />
    </div>
  );
};

export default SectionTitle;
