
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projectsData, ProjectSlug } from "@/data/projectsData";

interface RelatedProjectsProps {
  currentProjectSlug: ProjectSlug;
}

const RelatedProjects = ({ currentProjectSlug }: RelatedProjectsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-novella-navy">
          Related Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(projectsData)
            .filter(([key]) => key !== currentProjectSlug)
            .slice(0, 3)
            .map(([key, relatedProject]) => (
              <Link key={key} to={`/projects/${key}`} className="group block">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={relatedProject.images[0]} 
                    alt={relatedProject.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novella-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-novella-red text-white px-2 py-1 text-xs rounded mb-2">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{relatedProject.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="border-novella-navy text-novella-navy hover:bg-novella-navy hover:text-white">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
