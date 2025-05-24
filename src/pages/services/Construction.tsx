
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, HardHat, Ruler, Hammer, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";

const Construction = () => {
  const { t, direction } = useLanguage();

  useEffect(() => {
    document.title = `${t('construction.title')} - Novella Ltd`;
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t('construction.title')}
          subtitle={t('construction.subtitle')}
          ctaText={t('common.contactUs')}
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/4b387313-45b5-4968-9402-3b8c0271e5e9.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  {t('construction.overview')}
                </h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-6">
                  {t('construction.description1')}
                </p>
                <p className="text-gray-700 mb-6">
                  {t('construction.description2')}
                </p>
                <Link to="/contact">
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    {t('construction.getInTouch')}
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                  alt={t('construction.title')} 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t('construction.services.title')} 
              subtitle={t('construction.services.subtitle')}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.architectural.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.architectural.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.conceptualDesign')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.visualization')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.sustainableDesign')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <HardHat className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.project.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.project.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.planning')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.budget')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.quality')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Ruler className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.civil.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.civil.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.structural')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.site')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.infrastructure')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Hammer className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.management.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.management.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.contractor')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.supervision')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.progress')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ShieldCheck className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.safety.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.safety.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.safetyProgram')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.regulatory')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.safetyTraining')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ArrowRight className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t('construction.services.postConstruction.title')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('construction.services.postConstruction.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.facility')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.documentation')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>{t('construction.features.maintenance')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t('construction.projectsShowcase.title')} 
              subtitle={t('construction.projectsShowcase.subtitle')}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png" 
                  alt={t('construction.projectsShowcase.commercial')} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('construction.projectsShowcase.officeComplex')}</h3>
                  <p className="text-white/80">{t('construction.projectsShowcase.istanbul')}</p>
                </div>
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png" 
                  alt={t('construction.projectsShowcase.residential')} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('construction.projectsShowcase.residentialTower')}</h3>
                  <p className="text-white/80">{t('construction.projectsShowcase.istanbul')}</p>
                </div>
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                  alt={t('construction.projectsShowcase.industrial')} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('construction.projectsShowcase.industrialFacility')}</h3>
                  <p className="text-white/80">{t('construction.projectsShowcase.izmit')}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" className="border-novella-navy text-novella-navy hover:bg-novella-navy hover:text-white">
                  {t('common.viewAllProjects')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title={t('construction.ctaTitle')}
          subtitle={t('construction.ctaSubtitle')}
          buttonText={t('construction.ctaButton')}
          buttonLink="/contact"
          backgroundImage="/lovable-uploads/d8980877-f8be-43e6-84cb-5abe8f6e70e5.png"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Construction;
