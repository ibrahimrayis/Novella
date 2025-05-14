
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectOverviewProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  const { t } = useLanguage();
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">{t("projects.projectOverview")}</h2>
      <p className="text-gray-700 mb-8">{project.description}</p>
      
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">{t("projects.keyHighlights")}</h2>
      <p className="text-gray-700 mb-8">This exceptional property offers premium living with thoughtfully designed spaces and excellent amenities. Located in a prime area, it provides both convenience and luxury for residents.</p>
      
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">{t("projects.sellingPoints")}</h2>
      <p className="text-gray-700 mb-8">This development features a master-planned approach with a focus on community spaces and modern architecture. Each building is designed to maximize natural light and provide optimal views, while shared amenities create a sense of community.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <img 
              src={project.images[0]}
              alt={`${project.title} - Garden View with Pool`} 
              className="rounded-lg shadow-md h-48 w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            />
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogTitle className="text-lg font-semibold mb-1">{project.title} - Garden View with Pool</DialogTitle>
            <AspectRatio ratio={16 / 9}>
              <img 
                src={project.images[0]}
                alt={`${project.title} - Garden View with Pool`} 
                className="w-full h-full object-cover rounded"
              />
            </AspectRatio>
          </DialogContent>
        </Dialog>
        {project.images.slice(1, 3).map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img 
                src={image} 
                alt={`${project.title} - Image ${index + 1}`} 
                className="rounded-lg shadow-md h-48 w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogTitle className="text-lg font-semibold mb-1">{`${project.title} - Image ${index + 1}`}</DialogTitle>
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
