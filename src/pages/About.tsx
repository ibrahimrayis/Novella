import { useEffect } from "react";
import { Shield, CheckCircle, Briefcase, Users, Award, Clock, ChevronRight, Building2, Globe, Factory } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
const About = () => {
  const {
    t
  } = useLanguage();
  useEffect(() => {
    document.title = `${t('about.title')} - Novella Ltd`;
  }, [t]);
  const values = [{
    title: t('about.clientCentric'),
    description: t('about.clientCentricDesc'),
    icon: <Users className="h-10 w-10" />
  }, {
    title: t('about.clearCommunication'),
    description: t('about.clearCommunicationDesc'),
    icon: <CheckCircle className="h-10 w-10" />
  }, {
    title: t('about.unwaveringCommitment'),
    description: t('about.unwaveringCommitmentDesc'),
    icon: <Shield className="h-10 w-10" />
  }];
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection title={t('about.title')} subtitle={t('about.subtitle')} ctaText={t('about.ctaText')} ctaLink="/contact" backgroundImage="/lovable-uploads/df6dc53e-eafa-4252-89b7-88b52e732bf6.png" />

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">{t('about.ourStory')}</h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-4">
                  {t('about.ourStoryDesc1')}
                </p>
                <p className="text-gray-700 mb-4">
                  {t('about.ourStoryDesc2')}
                </p>
                <p className="text-gray-700">
                  {t('about.ourStoryDesc3')}
                </p>
              </div>
              <div className="space-y-6">
                <img src="/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png" alt="Novella Office Building" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('about.ourMission')} subtitle={t('about.ourMissionSubtitle')} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <p className="text-gray-700 mb-6">
                  {t('about.missionDesc1')}
                </p>
                <p className="text-gray-700 mb-6">
                  {t('about.missionDesc2')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-novella-red mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-novella-navy">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>)}
                </div>
              </div>
              
              <img src="/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png" alt="Our Values" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7e0223e0-6cd9-4061-b0e0-71d84dc6a4f6.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionTitle title={t('about.ourAchievements')} subtitle={t('about.ourAchievementsSubtitle')} className="text-white" titleClassName="text-white" subtitleClassName="text-white" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Briefcase className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">150+</h3>
                <p className="text-gray-600">{t('about.projectsCompleted')}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">30+</h3>
                <p className="text-gray-600">{t('about.expertTeamMembers')}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">15+</h3>
                <p className="text-gray-600">{t('about.industryAwards')}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">98%</h3>
                <p className="text-gray-600">{t('about.onTimeDelivery')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Overview */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('about.whatWeDo')} subtitle={t('about.whatWeDoSubtitle')} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">{t('about.constructionService')}</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.architecturalDesign')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.civilEngineering')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.environmentalStandards')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.seamlessCloseout')}</span>
                  </li>
                </ul>
                <Link to="/services/construction">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Globe className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">{t('about.importExportService')}</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.globalTradeNetwork')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.regulatoryCompliance')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.supplyChainManagement')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.tradeFinanceSolutions')}</span>
                  </li>
                </ul>
                <Link to="/services/import-export">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Factory className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">{t('about.manufacturingService')}</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.stateOfTheArtProduction')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.qualityControlSystems')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.customizedSolutions')}</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>{t('about.sustainableManufacturing')}</span>
                  </li>
                </ul>
                <Link to="/services/manufacturing">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection title={t('about.readyToCollaborate')} subtitle={t('about.readyToCollaborateSubtitle')} buttonText={t('about.contactUsToday')} buttonLink="/contact" backgroundImage="/lovable-uploads/aa0dc49a-7bf9-4cf0-9d0e-d488fd9d0539.png" />
      </main>
      
      <Footer />
    </div>;
};
export default About;