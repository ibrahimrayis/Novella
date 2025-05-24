
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, ShoppingBag, Truck, BarChart4, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const ImportExport = () => {
  const { t, direction } = useLanguage();
  
  useEffect(() => {
    document.title = `${t("importExport.title")} - Novella Ltd`;
  }, [t]);

  return (
    <div className={cn("flex flex-col min-h-screen", direction === "rtl" ? "text-right" : "text-left")}>
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Novella Import & Export"
          subtitle={t("importExport.subtitle")}
          ctaText={t("common.contactUs")}
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/d0cf6519-7cc2-4a38-9fda-22271d15a3dd.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={direction === "rtl" ? "order-last" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  {t("importExport.overview")}
                </h2>
                <div className={cn("h-1 w-24 bg-novella-red mb-6", direction === "rtl" ? "mr-0" : "ml-0")}></div>
                <p className="text-gray-700 mb-6">
                  {t("importExport.description1")}
                </p>
                <p className="text-gray-700 mb-6">
                  {t("importExport.description2")}
                </p>
                <Link to="/contact">
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    {t("importExport.getInTouch")}
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png" 
                  alt="Import & Export Services" 
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
              title={t("importExport.services.title")} 
              subtitle={t("importExport.services.subtitle")}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Globe className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.international.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.international.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.international.features.market")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.international.features.partner")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.international.features.negotiation")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ShoppingBag className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.sourcing.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.sourcing.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.sourcing.features.supplier")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.sourcing.features.quality")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.sourcing.features.price")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Truck className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.logistics.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.logistics.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.logistics.features.freight")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.logistics.features.customs")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.logistics.features.supply")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <BarChart4 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.market.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.market.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.market.features.demand")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.market.features.competitor")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.market.features.regulatory")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <FileText className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.compliance.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.compliance.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.compliance.features.documentation")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.compliance.features.audits")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.compliance.features.training")}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ArrowRight className={cn("h-12 w-12 text-novella-red mb-4", direction === "rtl" ? "transform rotate-180" : "")} />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">{t("importExport.services.finance.title")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.services.finance.description")}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.finance.features.letters")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.finance.features.insurance")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={cn("inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3", 
                      direction === "rtl" ? "ml-3 mr-0" : "mr-3")}></span>
                    <span>{t("importExport.services.finance.features.capital")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t("importExport.network.title")} 
              subtitle={t("importExport.network.subtitle")}
            />
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mt-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-novella-navy">{t("importExport.network.strong")}</h3>
                <p className="text-gray-700 mb-6">
                  {t("importExport.network.description1")}
                </p>
                <p className="text-gray-700 mb-6">
                  {t("importExport.network.description2")}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img 
                  src="/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png" 
                  alt="Global Network" 
                  className="h-full object-cover"
                />
                <div className="bg-novella-navy p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">{t("importExport.network.partners")}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">MAB Turkey</p>
                        <p className="text-sm text-white/70">{t("importExport.network.partner1")}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">DEIK</p>
                        <p className="text-sm text-white/70">{t("importExport.network.partner2")}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">TİKA</p>
                        <p className="text-sm text-white/70">{t("importExport.network.partner3")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t("importExport.why.title")} 
              subtitle={t("importExport.why.subtitle")}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">{t("importExport.why.global.title")}</h3>
                <p className="text-gray-600">
                  {t("importExport.why.global.description")}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">{t("importExport.why.expert.title")}</h3>
                <p className="text-gray-600">
                  {t("importExport.why.expert.description")}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">{t("importExport.why.integrated.title")}</h3>
                <p className="text-gray-600">
                  {t("importExport.why.integrated.description")}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">{t("importExport.why.intelligence.title")}</h3>
                <p className="text-gray-600">
                  {t("importExport.why.intelligence.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-novella-red relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("importExport.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("importExport.cta.subtitle")}
            </p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-novella-red font-medium px-8 py-6 text-lg">
                {t("importExport.cta.button")}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImportExport;
