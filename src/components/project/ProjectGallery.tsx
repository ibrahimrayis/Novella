
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectGalleryProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const [activeImage, setActiveImage] = useState(project.images[0]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Gallery</h2>
      <div className="mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-pointer">
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full h-full object-cover hover:opacity-95 transition-opacity"
              />
            </AspectRatio>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full h-full object-cover rounded"
              />
            </AspectRatio>
          </DialogContent>
        </Dialog>
        
        <div className="grid grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${project.title} - Image ${index + 1}`} 
              className={`h-24 w-full object-cover rounded-md cursor-pointer transition-all
                ${activeImage === image ? 'ring-2 ring-novella-red' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
