
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Map, Users, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

// Sample project data
const projectsData = {
  "modern-office-complex": {
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Istanbul, Turkey",
    client: "TechSphere Solutions",
    completionDate: "June 2022",
    description: "A state-of-the-art office complex designed with sustainability and employee well-being in mind. The project features open workspaces, collaborative areas, and cutting-edge technology infrastructure.",
    challenge: "The main challenge was to create a flexible workspace that could adapt to the changing needs of a growing technology company while maintaining energy efficiency and sustainability standards.",
    solution: "We implemented a modular design approach with movable partitions and furniture systems. The building incorporates smart technology for climate control and energy management, alongside green spaces and natural lighting to enhance employee well-being.",
    images: [
      "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
      "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
      "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png"
    ],
    features: [
      "LEED Gold certification",
      "Smart building management system",
      "Collaborative workspace design",
      "Green roof and vertical gardens",
      "Energy-efficient lighting and HVAC systems"
    ]
  },
  "residential-tower": {
    title: "Residential Tower",
    category: "Residential",
    location: "Istanbul, Turkey",
    client: "Urban Living Developers",
    completionDate: "September 2023",
    description: "A luxury residential tower featuring contemporary apartments with stunning city views. The project combines elegant design with modern amenities to create an exceptional living experience.",
    challenge: "Designing a high-rise residential building that maximizes views and natural light while ensuring privacy and comfort for residents, all within a compact urban site.",
    solution: "Our design incorporated staggered balconies and strategic unit placement to optimize views and privacy. We implemented high-performance glazing systems and sound insulation to enhance comfort, along with common areas designed to foster community.",
    images: [
      "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
      "/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png",
      "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png"
    ],
    features: [
      "24/7 concierge service",
      "Rooftop infinity pool",
      "Fitness center and spa",
      "Private parking garage",
      "Smart home technology"
    ]
  },
  "industrial-facility": {
    title: "Industrial Facility",
    category: "Industrial",
    location: "Izmit, Turkey",
    client: "Global Manufacturing Inc.",
    completionDate: "March 2023",
    description: "A cutting-edge industrial facility designed for optimal production efficiency and worker safety. The project includes manufacturing areas, warehousing, and administrative offices.",
    challenge: "Creating an industrial space that balances production efficiency with worker comfort and safety, while minimizing environmental impact.",
    solution: "We developed a layout that optimizes material flow and production processes, with segregated zones for different activities. The design incorporates natural lighting, advanced ventilation systems, and ergonomic workstations to enhance the working environment.",
    images: [
      "/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png",
      "/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png",
      "/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png"
    ],
    features: [
      "Automated production lines",
      "Energy-efficient systems",
      "Advanced safety protocols",
      "Integrated quality control stations",
      "Sustainable waste management"
    ]
  },
  "shopping-center": {
    title: "Shopping Center",
    category: "Commercial",
    location: "Ankara, Turkey",
    client: "Retail Developments Ltd",
    completionDate: "November 2022",
    description: "A modern shopping center that combines retail spaces, dining options, and entertainment venues in a vibrant and accessible environment.",
    challenge: "Creating a retail environment that attracts diverse tenants and visitors, while ensuring efficient circulation and space utilization.",
    solution: "Our design features a central atrium with multiple levels, providing visibility for all retail units. We incorporated flexible spaces that can adapt to changing retail trends and seasonal promotions, with careful attention to pedestrian flow and accessibility.",
    images: [
      "/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png",
      "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
      "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png"
    ],
    features: [
      "Central food court",
      "Underground parking",
      "Interactive directory systems",
      "Children's play area",
      "Outdoor seasonal market space"
    ]
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Novella Ltd`;
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
                <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Overview</h2>
                <p className="text-gray-700 mb-8">{project.description}</p>
                
                <h2 className="text-2xl font-bold mb-6 text-novella-navy">Challenge</h2>
                <p className="text-gray-700 mb-8">{project.challenge}</p>
                
                <h2 className="text-2xl font-bold mb-6 text-novella-navy">Solution</h2>
                <p className="text-gray-700 mb-8">{project.solution}</p>
                
                <h2 className="text-2xl font-bold mb-6 text-novella-navy">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {project.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="rounded-lg shadow-md h-48 w-full object-cover"
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4 text-novella-navy">Project Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-novella-navy p-6 rounded-lg shadow-md text-white">
                  <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                  <p className="mb-6">Contact us to discuss how we can bring your vision to life with our expertise and dedication to excellence.</p>
                  <Link to="/contact">
                    <Button className="w-full bg-novella-red hover:bg-red-700">Contact Our Team</Button>
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
