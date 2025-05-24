
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';

const TechServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const servicesRef = useRef<HTMLDivElement>(null);
  
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

  const adPlans = [
    {
      title: "Standard",
      subtitle: "Google Ads Standard",
      price: "5,000₺",
      period: "Monthly Management Fee",
      features: [
        "Google Search Network Ads",
        "Keyword Analysis",
        "Competitor Analysis",
        "Ad Copy Optimization",
        "Cost Per Click Optimization",
        "Monthly Performance Reports",
      ]
    },
    {
      title: "Advanced Level",
      subtitle: "Google Ads Advanced",
      price: "7,500₺",
      period: "Monthly Management Fee",
      features: [
        "All Features of the Standard Package",
        "Display Ads",
        "YouTube Ads",
        "Remarketing Campaigns",
        "Advanced Targeting",
        "Weekly Performance Reports",
      ]
    },
    {
      title: "Meta Ads",
      subtitle: "Facebook & Instagram Ads",
      price: "7,500₺",
      period: "Monthly Management Fee",
      features: [
        "Facebook & Instagram Ads",
        "Instagram Story Ads",
        "Carousel Ads",
        "Target Audience Analysis",
        "Detailed Targeting",
        "Weekly Performance Reports",
      ]
    }
  ];

  const seoPlans = [
    {
      title: "Beginning",
      subtitle: "SEO Starter Package",
      price: "3,500₺",
      period: "Monthly Service Fee",
      features: [
        "Technical SEO Analysis",
        "On-Site SEO Optimization",
        "Keyword Analysis",
        "Meta Tags Optimization",
        "Google Search Console Setup",
        "Monthly SEO Report",
      ]
    },
    {
      title: "Pro",
      subtitle: "SEO Pro Package",
      price: "6,000₺",
      period: "Monthly Service Fee",
      features: [
        "All Features of the Starter Package",
        "Creating a Content Strategy",
        "Competitor Analysis",
        "Backlink Study",
        "Blog Content Management",
        "Local SEO Optimization",
      ]
    }
  ];
  
  const renderPricingCards = (plans: any[]) => {
    return plans.map((plan, index) => (
      <Card key={index} className="pricing-card animate-on-scroll h-full" style={{animationDelay: `${index * 0.15}s`}}>
        <CardHeader className="bg-gradient-to-br from-novella-red to-red-700 text-white">
          <div className="flex justify-between items-center">
            <CardTitle>{plan.title}</CardTitle>
            <Badge className="bg-white text-novella-red">NO Setup Fees!</Badge>
          </div>
          <CardDescription className="text-gray-100 font-medium text-lg">
            {plan.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 flex-grow">
          <div className="mb-6 text-center">
            <span className="text-4xl font-bold text-novella-navy">{plan.price}</span>
            <p className="text-gray-600 text-sm">{plan.period}</p>
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature: any, i: number) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center pt-6 pb-6 mt-auto">
          <Button className="bg-novella-red hover:bg-red-700 text-white w-full">
            Contact Us
          </Button>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <section id="services" ref={servicesRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Advertisement Management Services"
          subtitle="Boost your digital presence with our comprehensive advertising solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderPricingCards(adPlans)}
        </div>
        
        <div className="mt-24">
          <SectionTitle 
            title="SEO Services"
            subtitle="Improve your search engine rankings with our professional SEO services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderPricingCards(seoPlans)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-gray-300 rounded-lg p-8 bg-white shadow-sm animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Do You Need a Professional Website?</h3>
            <p className="text-gray-600 mb-6">Highlight your brand in the digital world with modern design and powerful technologies.</p>
            <Button variant="outline" className="border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
              Check Out Our Web Design Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechServicesSection;
