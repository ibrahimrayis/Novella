
import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t('contact.title')} - Novella Ltd`;
  }, [t]);

  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10" />,
      title: t('contact.ourLocation'),
      details: t('contact.locationDetails')
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: t('contact.phoneNumber'),
      details: t('contact.phoneDetails')
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: t('contact.emailAddress'),
      details: t('contact.emailDetails')
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: t('contact.workingHours'),
      details: t('contact.hoursDetails')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          ctaText={t('common.services')}
          ctaLink="/services/construction"
          backgroundImage="/lovable-uploads/bd2e6280-5b16-49f3-a868-acd23fcc6d33.png"
        />

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t('contact.getInTouch')} 
              subtitle={t('contact.getInTouchSubtitle')}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="mx-auto text-novella-red mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-novella-navy">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-novella-navy">{t('contact.sendMessage')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('contact.sendMessageDesc')}
                </p>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-novella-navy">{t('contact.ourLocationSection')}</h2>
                <p className="text-gray-600 mb-8">
                  {t('contact.locationSectionDesc')}
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96239.62300378433!2d28.72405499726561!3d41.0801783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb4e6b12ffdb%3A0xe402d5173c0df704!2sNovella!5e0!3m2!1sen!2str!4v1747992306538!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Novella Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Images */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t('contact.ourOffices')} 
              subtitle={t('contact.officesSubtitle')}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <img 
                src="/lovable-uploads/8952e562-8a43-4f85-8290-8f6282dd237d.png" 
                alt="Novella Office" 
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img 
                src="/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png" 
                alt="Novella Building" 
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img 
                src="/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png" 
                alt="Novella Workspace" 
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
