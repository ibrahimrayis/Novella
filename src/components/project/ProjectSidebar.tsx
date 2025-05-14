
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Building2, Phone, Mail, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ProjectDataType, ProjectSlug } from "@/data/projectsData";

interface ProjectSidebarProps {
  project: ProjectDataType[ProjectSlug];
}

const ProjectSidebar = ({ project }: ProjectSidebarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 text-novella-navy">Project Quick Facts</h3>
        <ul className="space-y-3">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile view: Quick access buttons */}
      <div className="md:hidden mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" /> Contact
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Contact Information</DrawerTitle>
                <DrawerDescription>Get in touch about this project</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-novella-red mr-3" />
                  <span className="text-gray-700">{project.contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-novella-red mr-3" />
                  <span className="text-gray-700">{project.contactInfo.email}</span>
                </div>
                <div className="flex items-start">
                  <Map className="h-5 w-5 text-novella-red mr-3 mt-1" />
                  <span className="text-gray-700">{project.contactInfo.salesOffice}</span>
                </div>
              </div>
              <DrawerFooter>
                <Link to="/contact" className="w-full">
                  <Button className="w-full bg-novella-red">Contact Sales Team</Button>
                </Link>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Button className="w-full" onClick={() => document.location.href = `tel:${project.contactInfo.phone.replace(/\s+/g, '')}`}>
            <Phone className="h-4 w-4 mr-2" /> Call Now
          </Button>
        </div>
      </div>
      
      <div className="bg-novella-navy p-6 rounded-lg shadow-md text-white">
        <h3 className="text-xl font-bold mb-4">Interested in This Project?</h3>
        <p className="mb-6">Contact us to discuss how we can help you find your perfect property or answer any questions about this development.</p>
        <Link to="/contact">
          <Button className="w-full bg-novella-red hover:bg-red-700">Contact Our Team</Button>
        </Link>
      </div>
      
      <div className="mt-8 p-5 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-novella-navy">Project Type</h3>
        <div className="flex items-center mb-5">
          {project.category === "Residential" ? (
            <Home className="h-6 w-6 text-novella-red mr-3" />
          ) : (
            <Building2 className="h-6 w-6 text-novella-red mr-3" />
          )}
          <span className="font-medium">{project.category} Project</span>
        </div>
        <Link to={`/services/${project.category === "Residential" ? "real-estate" : "construction"}`}>
          <Button variant="outline" className="w-full">
            View Similar Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSidebar;
