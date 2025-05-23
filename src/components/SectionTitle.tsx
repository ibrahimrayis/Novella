
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-novella-red mt-4 ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />
    </div>
  );
};

export default SectionTitle;
