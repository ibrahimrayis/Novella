import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import InstagramPost from "@/components/InstagramPost";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { instagramPosts } from "@/data/instagramPosts";
import { useLanguage } from "@/contexts/LanguageContext";

const Events = () => {
  const { currentLanguage } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Latest Events - Novella Ltd";
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const translations = {
    en: {
      title: "Latest Events",
      subtitle: "Stay updated with our latest news and events from our Instagram feed",
      ctaText: "Follow Us",
      feedTitle: "Our Instagram Feed",
      feedSubtitle: "Follow us on Instagram to stay updated with our latest events, project updates, and company news",
      followButton: "Follow @novellaltd",
      stayConnected: "Stay Connected With Us",
      stayConnectedDesc: "Follow us on social media to stay up to date with our latest projects, events, and company news.",
      followInstagram: "Follow on Instagram",
      viewOnInstagram: "View Our Instagram Page"
    },
    tr: {
      title: "Son Etkinlikler",
      subtitle: "Instagram akışımızdan en son haberlerimiz ve etkinliklerimizle güncel kalın",
      ctaText: "Bizi Takip Et",
      feedTitle: "Instagram Akışımız",
      feedSubtitle: "En son etkinliklerimiz, proje güncellemelerimiz ve şirket haberlerimizden haberdar olmak için bizi Instagram'da takip edin",
      followButton: "@novellaltd'yi takip et",
      stayConnected: "Bizimle Bağlantıda Kalın",
      stayConnectedDesc: "En son projelerimiz, etkinliklerimiz ve şirket haberlerinden haberdar olmak için bizi sosyal medyada takip edin.",
      followInstagram: "Instagram'da Takip Et",
      viewOnInstagram: "Instagram Sayfamızı Görüntüleyin"
    },
    ar: {
      title: "أحدث الفعاليات",
      subtitle: "ابق على اطلاع بأخبارنا وأحداثنا الأخيرة من خلال تغذية انستغرام الخاصة بنا",
      ctaText: "تابعنا",
      feedTitle: "تغذية انستغرام الخاصة بنا",
      feedSubtitle: "تابعنا على انستغرام للبقاء على اطلاع بأحدث الفعاليات وتحديثات المشاريع وأخبار الشركة",
      followButton: "تابع @novellaltd",
      stayConnected: "ابق على اتصال معنا",
      stayConnectedDesc: "ابق على اتصال معنا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث مشاريعنا وفعالياتنا وأخبار الشركة.",
      followInstagram: "تابعنا على انستغرام",
      viewOnInstagram: "عرض صفحتنا على انستغرام"
    },
    ru: {
      title: "Последние События",
      subtitle: "Будьте в курсе наших последних новостей и событий из нашей ленты Instagram",
      ctaText: "Подписаться",
      feedTitle: "Наша лента Instagram",
      feedSubtitle: "Подписывайтесь на нас в Instagram, чтобы быть в курсе наших последних событий, обновлений проектов и новостей компании",
      followButton: "Подписаться на @novellaltd",
      stayConnected: "Оставайтесь на связи",
      stayConnectedDesc: "Подписывайтесь на нас в социальных сетях, чтобы быть в курсе наших последних проектов, событий и новостей компании.",
      followInstagram: "Подписаться в Instagram",
      viewOnInstagram: "Посмотреть нашу страницу в Instagram"
    }
  };

  const t = translations[currentLanguage.code] || translations.en;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t.title}
          subtitle={t.subtitle}
          ctaText={t.ctaText}
          ctaLink="https://www.instagram.com/novellaltd/"
          backgroundImage="/lovable-uploads/d2a575be-7111-4156-a375-dbc7340581b6.png"
        />

        {/* Instagram Feed */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t.feedTitle}
              subtitle={t.feedSubtitle}
            />
            
            <div className="flex justify-center mb-8">
              <a 
                href="https://www.instagram.com/novellaltd/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white flex items-center gap-2">
                  <Instagram size={20} />
                  {t.followButton}
                </Button>
              </a>
            </div>
            
            {/* Instagram Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {isLoading ? (
                // Loading skeleton
                Array(9).fill(0).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
                    <Skeleton className="h-64 w-full" />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))
              ) : (
                // Real Instagram posts with updated content
                instagramPosts.map(post => (
                  <InstagramPost
                    key={post.id}
                    id={post.id}
                    imageUrl={post.imageUrl}
                    caption={post.caption}
                    timestamp={post.timestamp}
                    likes={post.likes}
                    permalink={post.permalink}
                  />
                ))
              )}
            </div>

            <div className="flex justify-center mt-12">
              <a 
                href="https://www.instagram.com/novellaltd/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="flex items-center gap-2 border-novella-red text-novella-red hover:bg-novella-red/10">
                  <ExternalLink size={18} />
                  {t.viewOnInstagram}
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/d2a575be-7111-4156-a375-dbc7340581b6.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.stayConnected}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.stayConnectedDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.instagram.com/novellaltd/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#E1306C] hover:bg-[#C13584] text-white flex items-center gap-2 px-8 py-6 text-lg">
                  <Instagram size={24} />
                  {t.followInstagram}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
