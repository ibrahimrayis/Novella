
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Factory, Settings, Microscope, Recycle, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";

const Manufacturing = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  useEffect(() => {
    document.title = "Manufacturing Services - Novella Ltd";
  }, []);

  return (
    <div className="flex flex-col min-h-screen" dir={direction}>
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t("manufacturing.title")}
          subtitle={t("manufacturing.subtitle")}
          ctaText={t("common.contactUs")}
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/29ece65d-6b3c-40f3-84ea-bacdcfae4839.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-novella-navy ${isRTL ? 'text-right' : ''}`}>
                  {t("manufacturing.overview")}
                </h2>
                <div className={`h-1 w-24 bg-novella-red mb-6 ${isRTL ? 'mr-auto' : ''}`}></div>
                <p className={`text-gray-700 mb-6 ${isRTL ? 'text-right' : ''}`}>
                  {t("manufacturing.description1")}
                </p>
                <p className={`text-gray-700 mb-6 ${isRTL ? 'text-right' : ''}`}>
                  {t("manufacturing.description2")}
                </p>
                <Link to="/contact" className={`block ${isRTL ? 'text-right' : ''}`}>
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    {t("manufacturing.getInTouch")}
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png" 
                  alt="Manufacturing Facility" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-16 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/b1c20e73-d9d1-43f7-8b5c-07f6f8f46e55.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("manufacturing.markets.title")}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {t("manufacturing.markets.subtitle")}
              </p>
              <div className={`h-1 w-24 bg-novella-red mt-6 ${isRTL ? 'mr-auto' : 'mx-auto'}`}></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Server className="h-12 w-12 text-novella-red mx-auto mb-4" />
                <h3 className="font-bold text-novella-navy">{t("manufacturing.markets.dataCenters")}</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">{t("manufacturing.markets.education")}</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
                <h3 className="font-bold text-novella-navy">{t("manufacturing.markets.foodProducts")}</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">{t("manufacturing.markets.consumerGoods")}</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                  <path d="M10 10L8 12l2 2M14 10l2 2-2 2"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">{t("manufacturing.markets.clothing")}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t("manufacturing.services.title")}
              subtitle={t("manufacturing.services.subtitle")}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <Factory className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.production.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.production.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.lean")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.production")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.workflow")}</span>
                  </li>
                </ul>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <Settings className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.engineering.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.engineering.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.design")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.material")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.prototyping")}</span>
                  </li>
                </ul>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <Microscope className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.quality.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.quality.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.inspection")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.process")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.improvement")}</span>
                  </li>
                </ul>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <Recycle className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.sustainable.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.sustainable.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.energy")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.waste")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.eco")}</span>
                  </li>
                </ul>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <svg className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.supply.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.supply.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.supplier")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.inventory")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.logistics")}</span>
                  </li>
                </ul>
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red ${isRTL ? 'text-right' : ''}`}>
                <ArrowRight className={`h-12 w-12 text-novella-red mb-4 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("manufacturing.services.custom.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("manufacturing.services.custom.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.specialized")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.equipment")}</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 flex-shrink-0"></span>
                    <span>{t("manufacturing.features.control")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t("manufacturing.facilities.title")}
              subtitle={t("manufacturing.facilities.subtitle")}
            />
            
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`p-8 ${isRTL ? 'order-last text-right' : ''}`}>
                    <h3 className="text-2xl font-bold mb-6 text-novella-navy">{t("manufacturing.facilities.capability")}</h3>
                    <p className="text-gray-700 mb-6">
                      {t("manufacturing.facilities.description")}
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t("manufacturing.facilities.space")}</span>
                      </li>
                      <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t("manufacturing.facilities.lines")}</span>
                      </li>
                      <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t("manufacturing.facilities.lab")}</span>
                      </li>
                      <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{t("manufacturing.facilities.certified")}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-0">
                    <img 
                      src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                      alt="Manufacturing Facility" 
                      className="h-full object-cover"
                    />
                    <img 
                      src="/lovable-uploads/8952e562-8a43-4f85-8290-8f6282dd237d.png" 
                      alt="Production Line" 
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          translationPrefix="manufacturing"
          backgroundImage="/lovable-uploads/7bf88ef9-e0c5-461d-9221-61177ef8c483.png"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Manufacturing;
