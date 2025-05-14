
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { projectsData, ProjectSlug } from "@/data/projectsData";

// Import components
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectSpecifications from "@/components/project/ProjectSpecifications";
import ProjectContact from "@/components/project/ProjectContact";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import RelatedProjects from "@/components/project/RelatedProjects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const validSlug = slug as ProjectSlug | undefined;
  const project = validSlug ? projectsData[validSlug] : null;
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Novella Ltd`;
    } else {
      document.title = "Project Not Found - Novella Ltd";
    }
  }, [project]);

  if (!project || !validSlug) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Project Header */}
        <ProjectHeader project={project} />

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Tabs Navigation */}
                <Tabs defaultValue="overview" className="mb-8">
                  <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full bg-gray-100">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="specifications" className="hidden md:block">Specs</TabsTrigger>
                    <TabsTrigger value="contact" className="hidden md:block">Contact</TabsTrigger>
                  </TabsList>
                  
                  {/* Tab Contents */}
                  <TabsContent value="overview">
                    <ProjectOverview project={project} />
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <ProjectDetails project={project} />
                  </TabsContent>
                  
                  <TabsContent value="gallery">
                    <ProjectGallery project={project} />
                  </TabsContent>
                  
                  <TabsContent value="specifications">
                    <ProjectSpecifications project={project} />
                  </TabsContent>
                  
                  <TabsContent value="contact">
                    <ProjectContact project={project} />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div>
                <ProjectSidebar project={project} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        <RelatedProjects currentProjectSlug={validSlug} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
