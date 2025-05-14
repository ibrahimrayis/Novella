
import { Link } from "react-router-dom";
import { ArrowLeft, Map, Users, Clock } from "lucide-react";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectHeaderProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <section className="relative h-[60vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-novella-navy/95 to-novella-navy/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-end pb-12">
        <Link to="/projects" className="flex items-center text-white hover:text-novella-red transition-colors mb-6">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center text-white">
            <Map className="mr-2 h-5 w-5 text-novella-red" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-white">
            <Users className="mr-2 h-5 w-5 text-novella-red" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center text-white">
            <Clock className="mr-2 h-5 w-5 text-novella-red" />
            <span>Completed: {project.completionDate}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
