
import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Novella Ltd";
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Our Location",
      details: "Istanbul, Venezia Mega Outlet, Block G5, Floor 0, Office 49"
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: "Phone Number",
      details: "+90-552 88 00005"
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email Address",
      details: "info@novellaltd.com"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your project or inquire about our services"
          ctaText="Our Services"
          ctaLink="/services/construction"
          backgroundImage="/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png"
        />

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Get In Touch" 
              subtitle="We're here to answer any questions you have about our services"
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
                <h2 className="text-3xl font-bold mb-6 text-novella-navy">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-novella-navy">Our Location</h2>
                <p className="text-gray-600 mb-8">
                  Visit our office in Istanbul or contact us using the details below.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8535600252754!2d28.949119!3d41.015908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x7d75715e081dfa5c!2sVenezia%20Mega%20Outlet!5e0!3m2!1sen!2sus!4v1650888285760!5m2!1sen!2sus"
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
              title="Our Offices" 
              subtitle="A glimpse of our modern workspace where we bring ideas to life"
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
