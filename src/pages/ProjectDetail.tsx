
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Map, Users, ArrowLeft, Check, Phone, Mail, Home, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ProjectCard } from "@/components/ProjectCard";

// Sample project data
const projectsData = {
  "modern-office-complex": {
    title: "SELVI PARK",
    category: "Residential",
    location: "Bağcılar, Istanbul",
    client: "Novella Development",
    completionDate: "April 30, 2024",
    description: "Covers an area of 11,500 square meters and includes 6 residential blocks with 586 apartment units and 8 stores. The project offers a premium living experience in the heart of Istanbul.",
    challenge: "Creating a large-scale residential complex with multiple buildings while maintaining cohesive design and ensuring efficient use of space within an urban environment.",
    solution: "We implemented a master-planned approach with a focus on community spaces and modern architecture. Each building was designed to maximize natural light and provide optimal views, while shared amenities create a sense of community.",
    images: [
      "/lovable-uploads/c2d3c0ca-753b-4a98-afca-7ef9890dcd22.png",
      "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
      "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png"
    ],
    features: [
      "586 Apartment Units",
      "8 Commercial Stores",
      "Underground Parking",
      "Children's Playground",
      "Fitness Center",
      "24/7 Security"
    ],
    specifications: {
      "Land Area": "11,500 square meters",
      "Building Type": "Residential & Commercial",
      "Number of Buildings": "6 Blocks",
      "Number of Units": "586 Apartments, 8 Stores",
      "Construction Type": "Reinforced Concrete",
      "Exterior Finish": "Modern Facade with Thermal Insulation"
    },
    amenities: [
      "Swimming Pool",
      "Sauna & Turkish Bath",
      "Fitness Center",
      "Children's Playground",
      "Landscaped Gardens",
      "Walking Paths"
    ],
    contactInfo: {
      phone: "+90 212 555 1234",
      email: "info@novella.com",
      salesOffice: "Bağcılar, Istanbul - Near Project Site"
    }
  },
  "residential-tower": {
    title: "BAHARYAKA",
    category: "Residential",
    location: "Bağcılar, Istanbul",
    client: "Novella Residences",
    completionDate: "December 2023",
    description: "Located next to the Golden Horn in a central area. Consists of 27 blocks with various apartment types and extensive social facilities, covering an area of 120,000 square meters.",
    challenge: "Designing a multi-block residential development that integrates with the historical context of the Golden Horn area while providing modern living spaces.",
    solution: "Our design incorporated elements that respect the historical significance of the area while introducing contemporary living standards. The 27 blocks are arranged to create community-focused neighborhoods within the larger development.",
    images: [
      "/lovable-uploads/e6d71d7a-a12e-422f-8042-d51d3b2ef4e0.png",
      "/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png",
      "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png"
    ],
    features: [
      "Various Apartment Types",
      "Extensive Social Facilities",
      "Prime Golden Horn Location",
      "Modern Architecture",
      "Green Spaces",
      "Secure Community"
    ],
    specifications: {
      "Land Area": "120,000 square meters",
      "Building Type": "Residential",
      "Number of Buildings": "27 Blocks",
      "Number of Units": "Over 1,500 Apartments",
      "Construction Type": "High-Quality Reinforced Concrete",
      "Exterior Finish": "Contemporary Design with Natural Elements"
    },
    amenities: [
      "Olympic-sized Swimming Pool",
      "Tennis Courts",
      "Spa & Wellness Center",
      "Mini Golf Course",
      "Indoor Sports Hall",
      "Community Center"
    ],
    contactInfo: {
      phone: "+90 212 555 7890",
      email: "sales@novella.com",
      salesOffice: "Bağcılar, Istanbul - Main Sales Office"
    }
  },
  "industrial-facility": {
    title: "MEGA GARDEN",
    category: "Residential",
    location: "Istanbul, Zeytinburnu",
    client: "Novella Urban Living",
    completionDate: "March 2024",
    description: "Consists of 4 blocks, 528 units, and 11 floors. Conveniently located near Aqua Florya, Marmara Forum Shopping Center, and various transportation options.",
    challenge: "Creating a medium-scale residential development in the established Zeytinburnu district that offers modern living without disrupting the existing urban fabric.",
    solution: "We designed a balanced approach with 4 residential blocks that complement the surrounding architecture. The 11-floor buildings maximize space efficiency while ensuring each of the 528 units has excellent access to light and views.",
    images: [
      "/lovable-uploads/c9b49626-f18c-4dbf-a2de-a6e89645ec27.png",
      "/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png",
      "/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png"
    ],
    features: [
      "Strategic Urban Location",
      "Proximity to Shopping Centers",
      "Excellent Transportation Access",
      "Modern Building Design",
      "Family-Oriented Amenities",
      "Secure Environment"
    ],
    specifications: {
      "Land Area": "25,000 square meters",
      "Building Type": "Residential",
      "Number of Buildings": "4 Blocks",
      "Number of Units": "528 Apartments",
      "Number of Floors": "11 Floors",
      "Construction Type": "Earthquake-Resistant Design"
    },
    amenities: [
      "Central Garden Area",
      "Children's Play Zones",
      "Fitness Center",
      "Walking & Jogging Paths",
      "Community Meeting Rooms",
      "Underground Parking"
    ],
    contactInfo: {
      phone: "+90 212 555 4321",
      email: "megagarden@novella.com",
      salesOffice: "Zeytinburnu, Istanbul - On-site Sales Office"
    }
  },
  "shopping-center": {
    title: "NIVO ISTANBUL",
    category: "Commercial",
    location: "Küçükçekmece district, Istanbul, European side",
    client: "Novella Commercial Developments",
    completionDate: "October 2023",
    description: "Located in the commercial center on Basin Express, near a metro station and Atatürk International Airport, offering prime commercial real estate in a strategic location.",
    challenge: "Developing a commercial center that serves as a hub for business while taking advantage of the strategic location near transportation nodes.",
    solution: "The design emphasizes accessibility and visibility, with a modern commercial complex that maximizes exposure for businesses while providing efficient internal circulation and connection to nearby transportation.",
    images: [
      "/lovable-uploads/35a35189-1081-4b7f-8d9a-752d623087bc.png",
      "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
      "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png"
    ],
    features: [
      "Prime Commercial Location",
      "Metro Accessibility",
      "Airport Proximity",
      "Modern Business Spaces",
      "Flexible Office Layouts",
      "High Visibility"
    ],
    specifications: {
      "Land Area": "18,000 square meters",
      "Building Type": "Commercial",
      "Number of Floors": "15 Floors",
      "Office Spaces": "120 Units",
      "Retail Spaces": "45 Units",
      "Parking Capacity": "500 Vehicles"
    },
    amenities: [
      "Conference Center",
      "Business Lounges",
      "Restaurants & Cafes",
      "24/7 Security",
      "High-Speed Elevators",
      "Technical Infrastructure"
    ],
    contactInfo: {
      phone: "+90 212 555 9876",
      email: "commercial@novella.com",
      salesOffice: "Basin Express Road, Istanbul - Main Office"
    }
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;
  const [activeImage, setActiveImage] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Novella Ltd`;
      setActiveImage(project.images[0]);
    } else {
      document.title = "Project Not Found - Novella Ltd";
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Project Header */}
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
                  
                  {/* Overview Tab Content */}
                  <TabsContent value="overview">
                    <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Overview</h2>
                    <p className="text-gray-700 mb-8">{project.description}</p>
                    
                    <h2 className="text-2xl font-bold mb-6 text-novella-navy">Challenge</h2>
                    <p className="text-gray-700 mb-8">{project.challenge}</p>
                    
                    <h2 className="text-2xl font-bold mb-6 text-novella-navy">Solution</h2>
                    <p className="text-gray-700 mb-8">{project.solution}</p>
                    
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
                  </TabsContent>
                  
                  {/* Details Tab Content */}
                  <TabsContent value="details">
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
                  </TabsContent>
                  
                  {/* Gallery Tab Content */}
                  <TabsContent value="gallery">
                    <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Gallery</h2>
                    <div className="mb-8">
                      <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={activeImage || project.images[0]} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`} 
                            className={`h-24 w-full object-cover rounded-md cursor-pointer 
                              ${activeImage === image ? 'ring-2 ring-novella-red' : 'opacity-70 hover:opacity-100'}`}
                            onClick={() => setActiveImage(image)}
                          />
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Specifications Tab Content */}
                  <TabsContent value="specifications">
                    <h2 className="text-2xl font-bold mb-6 text-novella-navy">Technical Specifications</h2>
                    <div className="mb-8">
                      <dl className="divide-y divide-gray-200">
                        {Object.entries(project.specifications).map(([key, value], index) => (
                          <div key={index} className="py-4 flex flex-col sm:flex-row">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">{key}</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </TabsContent>
                  
                  {/* Contact Tab Content */}
                  <TabsContent value="contact">
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
                  </TabsContent>
                </Tabs>
              </div>
              
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
            </div>
          </div>
        </section>
        
        {/* Related Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-novella-navy">
              Related Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(projectsData)
                .filter(([key]) => key !== slug)
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
