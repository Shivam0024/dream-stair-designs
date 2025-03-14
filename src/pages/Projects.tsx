
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const projectCategories = {
  all: [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Clean lines and minimalist design for a spacious feel",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
      category: "Residential"
    },
    {
      id: 2,
      title: "Corporate Office",
      description: "Professional workspace designed for productivity and comfort",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Luxury Kitchen",
      description: "High-end appliances and premium finishes for cooking enthusiasts",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
      category: "Kitchen & Bath"
    },
    {
      id: 4,
      title: "Hotel Lobby",
      description: "Welcoming entrance with elegant seating and statement lighting",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Master Bedroom",
      description: "Serene retreat with luxurious textiles and soft lighting",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
      category: "Residential"
    },
    {
      id: 6,
      title: "Modern Bathroom",
      description: "Spa-like experience with sleek fixtures and natural elements",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
      category: "Kitchen & Bath"
    },
    {
      id: 7,
      title: "Retail Store",
      description: "Strategic layout designed to enhance customer experience",
      image: "https://images.unsplash.com/photo-1604176424472-9d7e13c3d5d4?q=80&w=800&auto=format&fit=crop",
      category: "Commercial"
    },
    {
      id: 8,
      title: "Designer Ceiling",
      description: "Custom fall ceiling with integrated lighting and architectural details",
      image: "https://images.unsplash.com/photo-1625585598750-3d2aa5981fa0?q=80&w=800&auto=format&fit=crop",
      category: "Fall Ceiling"
    }
  ]
};

const Projects = () => {
  // Filter projects by category
  const residentialProjects = projectCategories.all.filter(p => p.category === "Residential");
  const commercialProjects = projectCategories.all.filter(p => p.category === "Commercial");
  const kitchenBathProjects = projectCategories.all.filter(p => p.category === "Kitchen & Bath");
  const fallCeilingProjects = projectCategories.all.filter(p => p.category === "Fall Ceiling");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-tds-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-tds-dark">Our Projects</h1>
            <p className="text-tds-neutral-gray text-lg mb-8">
              Explore our portfolio of completed projects across residential and commercial spaces.
              Each design reflects our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-tds-light-gray">
                <TabsTrigger value="all" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">All Projects</TabsTrigger>
                <TabsTrigger value="residential" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Residential</TabsTrigger>
                <TabsTrigger value="commercial" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Commercial</TabsTrigger>
                <TabsTrigger value="kitchenBath" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Kitchen & Bath</TabsTrigger>
                <TabsTrigger value="fallCeiling" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Fall Ceiling</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.all.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="residential">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {residentialProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="commercial">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="kitchenBath">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kitchenBathProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fallCeiling">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fallCeilingProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="bg-tds-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can transform your space into something extraordinary.
          </p>
          <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">Contact Us</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium py-1 px-3 bg-tds-light-purple text-tds-purple rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2 text-tds-dark">{project.title}</h3>
        <p className="text-tds-neutral-gray mb-4">{project.description}</p>
        <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">
          View Details <ExternalLink size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Projects;
