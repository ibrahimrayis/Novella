
import { useEffect } from "react";
import { Home, Check, Star, MapPin, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const RealEstate = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = `${t("realEstate.title")} - Novella Ltd`;
  }, [t]);

  const features = [
    t("realEstate.features.residentialProperties"),
    t("realEstate.features.commercialRealEstate"),
    t("realEstate.features.propertyManagement"),
    t("realEstate.features.investmentConsultation"),
    t("realEstate.features.realEstateDevelopment"),
    t("realEstate.features.propertyValuationServices")
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t("realEstate.title")}
          subtitle={t("realEstate.subtitle")}
          ctaText={t("common.contactUs")}
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/da50d497-0226-498b-bdfe-69b204bbd486.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title={t("realEstate.overview")} 
                  subtitle={t("realEstate.overviewSubtitle")}
                  align="left"
                  className="mb-6"
                />
                <p className="text-gray-700 mb-6">
                  {t("realEstate.description1")}
                </p>
                <p className="text-gray-700 mb-8">
                  {t("realEstate.description2")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-novella-red mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/5e569e4d-1488-42b3-bb18-b1bcb6bd48cf.png" 
                  alt={t("realEstate.title")} 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-novella-red text-white p-4 rounded shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5" />
                  </div>
                  <p className="mt-1">{t("realEstate.trustedClients")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t("realEstate.offerings")}
              subtitle={t("realEstate.offeringsSubtitle")}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Home className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">{t("realEstate.residential.title")}</h3>
                <p className="text-gray-600 mb-4">
                  {t("realEstate.residential.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.residential.features.premiumLocations")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.residential.features.modernAmenities")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.residential.features.financingOptions")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">{t("realEstate.commercial.title")}</h3>
                <p className="text-gray-600 mb-4">
                  {t("realEstate.commercial.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.commercial.features.primeLocations")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.commercial.features.customizableSpaces")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.commercial.features.retailProperties")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <MapPin className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">{t("realEstate.management.title")}</h3>
                <p className="text-gray-600 mb-4">
                  {t("realEstate.management.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.management.features.tenantAcquisition")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.management.features.propertyMaintenance")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{t("realEstate.management.features.financialReporting")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title={t("realEstate.ctaTitle")}
          subtitle={t("realEstate.ctaSubtitle")}
          buttonText={t("realEstate.ctaButton")}
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default RealEstate;
