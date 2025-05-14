
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectOverviewProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Overview</h2>
      <p className="text-gray-700 mb-8">{project.description}</p>
      
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Key Highlights</h2>
      <p className="text-gray-700 mb-8">This exceptional property offers premium living with thoughtfully designed spaces and excellent amenities. Located in a prime area, it provides both convenience and luxury for residents.</p>
      
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Selling Points</h2>
      <p className="text-gray-700 mb-8">This development features a master-planned approach with a focus on community spaces and modern architecture. Each building is designed to maximize natural light and provide optimal views, while shared amenities create a sense of community.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {project.images.slice(0, 3).map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img 
                src={image} 
                alt={`${project.title} - Image ${index + 1}`} 
                className="rounded-lg shadow-md h-48 w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  className="w-full h-full object-cover rounded"
                />
              </AspectRatio>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default ProjectOverview;
