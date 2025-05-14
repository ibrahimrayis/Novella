
import { Check } from "lucide-react";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectDetailsProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
            <Check className="h-5 w-5 text-novella-red mr-3 mt-1" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {project.amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <span className="inline-block w-2 h-2 bg-novella-red rounded-full mr-3"></span>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
