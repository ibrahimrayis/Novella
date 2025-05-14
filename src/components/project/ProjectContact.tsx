
import { Phone, Mail, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectContactProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectContact = ({ project }: ProjectContactProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-novella-navy">Contact Information</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Phone className="h-5 w-5 text-novella-red mr-3" />
          <span className="text-gray-700">{project.contactInfo.phone}</span>
        </div>
        <div className="flex items-center mb-4">
          <Mail className="h-5 w-5 text-novella-red mr-3" />
          <span className="text-gray-700">{project.contactInfo.email}</span>
        </div>
        <div className="flex items-start mb-4">
          <Map className="h-5 w-5 text-novella-red mr-3 mt-1" />
          <span className="text-gray-700">{project.contactInfo.salesOffice}</span>
        </div>
        
        <Link to="/contact" className="mt-4 block">
          <Button className="w-full bg-novella-red hover:bg-red-700">
            Contact Sales Team
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ProjectContact;
