
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import InstagramPost from "@/components/InstagramPost";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { instagramPosts } from "@/data/instagramPosts";

const Events = () => {
  useEffect(() => {
    document.title = "Latest Events - Novella Ltd";
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Latest Events"
          subtitle="Stay updated with our latest news and events from our Instagram feed"
          ctaText="Follow Us"
          ctaLink="https://www.instagram.com/novellaltd"
          backgroundImage="/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png"
        />

        {/* Instagram Feed */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Instagram Feed" 
              subtitle="Follow us on Instagram to stay updated with our latest events, project updates, and company news"
            />
            
            <div className="flex justify-center mb-8">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white flex items-center gap-2">
                <Instagram size={20} />
                Follow @novellaltd
              </Button>
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
                // Actual Instagram posts
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
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected With Us
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Follow us on social media to stay up to date with our latest projects, events, and company news.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#E1306C] hover:bg-[#C13584] text-white flex items-center gap-2 px-8 py-6 text-lg">
                <Instagram size={24} />
                Follow on Instagram
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
