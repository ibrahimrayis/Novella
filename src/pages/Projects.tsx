import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "SELVI PARK",
    category: "Commercial",
    image: "/lovable-uploads/3a26d2ae-2056-4b75-b471-50d3557c57f2.png",
    slug: "modern-office-complex"
  },
  {
    id: 2,
    title: "BAHARYAKA",
    category: "Residential",
    image: "/lovable-uploads/2740304c-e48e-47fd-bd15-965a7f730604.png",
    slug: "residential-tower"
  },
  {
    id: 3,
    title: "MEGA GARDEN",
    category: "Residential",
    image: "/lovable-uploads/830bd7c6-9ca8-45b8-bc0d-d79c3d34adb2.png",
    slug: "industrial-facility"
  },
  {
    id: 4,
    title: "SELVI PARK",
    category: "Commercial",
    image: "/lovable-uploads/bfbad59d-2149-412c-a006-9919fdccf225.png",
    slug: "shopping-center"
  },
  {
    id: 5,
    title: "Luxury Apartments",
    category: "Residential",
    image: "/lovable-uploads/c2d3c0ca-753b-4a98-afca-7ef9890dcd22.png",
    slug: "luxury-apartments"
  },
  {
    id: 6,
    title: "Manufacturing Plant",
    category: "Industrial",
    image: "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
    slug: "manufacturing-plant"
  },
  {
    id: 7,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
    slug: "corporate-headquarters"
  },
  {
    id: 8,
    title: "VENEZIA MEGA RESIDENCE",
    category: "Residential",
    image: "/lovable-uploads/87845749-0d05-4085-a80b-0d9c1eb49d4d.png",
    slug: "mixed-use-development"
  },
  {
    id: 9,
    title: "Aviation and Infrastructure",
    category: "Industrial",
    image: "/lovable-uploads/6e594632-4f2c-41f8-8df6-63b1ced480bc.png",
    slug: "logistics-center"
  }
];

const Projects = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = `${t("common.projects")} - Novella Ltd`;
  }, [t]);

  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(projectsData.map(project => project.category)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.category === filter) 
    : projectsData;

  // Translation mapping for categories
  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "Commercial":
        return t("projects.commercial");
      case "Residential":
        return t("projects.residential");
      case "Industrial":
        return t("projects.industrial");
      default:
        return category;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t("projects.title")}
          subtitle={t("projects.heroSubtitle")}
          ctaText={t("common.contactUs")}
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/db878a62-c16f-47dd-8984-e97a9a7156d8.png"
        />

        {/* Projects Gallery */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title={t("projects.portfolioTitle")} 
              subtitle={t("projects.portfolioSubtitle")}
            />
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                variant={filter === null ? "default" : "outline"} 
                className={filter === null ? "bg-novella-navy" : "border-novella-navy text-novella-navy"}
                onClick={() => setFilter(null)}
              >
                {t("projects.allProjects")}
              </Button>
              
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={filter === category ? "default" : "outline"} 
                  className={filter === category ? "bg-novella-navy" : "border-novella-navy text-novella-navy"}
                  onClick={() => setFilter(category)}
                >
                  {getCategoryTranslation(category)}
                </Button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={getCategoryTranslation(project.category)}
                  image={project.image}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/508c237b-68d6-4271-a574-e1fde52b8324.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("projects.ctaTitle")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("projects.ctaSubtitle")}
            </p>
            <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
              {t("projects.ctaButton")}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
