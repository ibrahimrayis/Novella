
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const TechPricingSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const websitePackages = [
    {
      title: "Starter Pack",
      subtitle: "For Beginners",
      price: "6,500 TL",
      vat: "+ VAT",
      promo: "For only 25 TL per day 🎯",
      payment: "One-time payment",
      features: [
        { name: "4-5 page corporate website", included: true },
        { name: "Responsive (mobile friendly) design", included: true },
        { name: "Basic SEO compatibility", included: true },
        { name: "Contact form integration", included: true },
        { name: "Domain & Hosting (first year)", included: true },
        { name: "SSL installation (HTTPS)", included: true },
        { name: "Google Analytics setup", included: true },
        { name: "Fast page loading optimization", included: true },
        { name: "Advanced SEO settings", included: false },
        { name: "Multi-language support", included: false },
      ]
    },
    {
      title: "Professional Package",
      subtitle: "Most Preferred",
      price: "12,000 TL",
      vat: "+ VAT",
      promo: "For only 46 TL per day 🚀",
      payment: "One-time payment",
      features: [
        { name: "10+ pages of custom design", included: true },
        { name: "Responsive (mobile friendly) design", included: true },
        { name: "Basic SEO compatibility", included: true },
        { name: "Contact form integration", included: true },
        { name: "Domain & Hosting (first year)", included: true },
        { name: "SSL installation (HTTPS)", included: true },
        { name: "Google Analytics setup", included: true },
        { name: "Fast page loading optimization", included: true },
        { name: "Advanced SEO settings", included: true },
        { name: "Multi-language support", included: true },
      ]
    },
    {
      title: "Corporate Solution",
      subtitle: "Institutional",
      price: "Special For You",
      vat: "",
      promo: "Let's talk about solutions specific to your needs",
      payment: "One-time payment",
      features: [
        { name: "10+ pages of custom design", included: true },
        { name: "Responsive (mobile friendly) design", included: true },
        { name: "Basic SEO compatibility", included: true },
        { name: "Contact form integration", included: true },
        { name: "Domain & Hosting (first year)", included: true },
        { name: "SSL installation (HTTPS)", included: true },
        { name: "Google Analytics setup", included: true },
        { name: "Fast page loading optimization", included: true },
        { name: "Advanced SEO settings", included: true },
        { name: "Multi-language support", included: true },
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Website Development Packages"
          subtitle="Choose the package that best suits your needs and start your digital journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websitePackages.map((pkg, index) => (
            <div key={index} className="relative">
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 flex justify-center -mt-4 z-10">
                  <Badge className="bg-novella-red text-white px-4 py-1.5 text-base font-medium shadow-md">
                    {pkg.subtitle}
                  </Badge>
                </div>
              )}
              <Card 
                className={`pricing-card animate-on-scroll h-full flex flex-col ${
                  index === 1 ? 'border-2 border-novella-red shadow-xl' : ''
                }`} 
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <CardHeader className={`${
                  index === 1 
                  ? 'bg-gradient-to-br from-novella-red to-red-700 text-white pt-8' 
                  : 'bg-gray-100'
                }`}>
                  <CardTitle className={index === 1 ? 'text-white' : ''}>{pkg.title}</CardTitle>
                  <CardDescription className={index === 1 ? 'text-gray-100' : ''}>
                    {index !== 1 && pkg.subtitle}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-sm"> {pkg.vat}</span>
                    <p className="text-sm mt-1">{pkg.promo}</p>
                    <p className="text-xs mt-3 opacity-80">{pkg.payment}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 h-5 w-5 ${feature.included ? 'text-green-500' : 'text-gray-300'}`}>
                          <Check size={20} />
                        </div>
                        <span className={`ml-2 ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pt-6 pb-6 mt-auto">
                  <Button className={`w-full ${
                    index === 1 
                    ? 'bg-novella-red hover:bg-red-700 text-white' 
                    : 'border-novella-red text-novella-red hover:bg-novella-red hover:text-white'
                  }`}>
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPricingSection;
