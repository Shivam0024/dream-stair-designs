
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Home",
    location: "Delhi, India",
    category: "Residential",
    description: "A clean, minimalist design focusing on functionality and space optimization for a family home.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Restaurant Redesign",
    location: "Mumbai, India",
    category: "Commercial",
    description: "High-end restaurant interior featuring custom lighting, bespoke furniture, and elegant decor.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Executive Office Suite",
    location: "Bangalore, India",
    category: "Office",
    description: "Sophisticated office space designed for productivity, featuring custom fall ceiling and elegant finishes.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Contemporary Kitchen Renovation",
    location: "Jaipur, India",
    category: "Kitchen",
    description: "Modern kitchen with clean lines, high-end appliances, and custom cabinetry for a family home.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?q=80&w=1200&auto=format&fit=crop",
  },
];

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tds-dark mb-4">Featured Projects</h2>
          <p className="text-tds-neutral-gray text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful design projects that showcase our expertise and attention to detail.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="lg:w-1/2 h-96 lg:h-[500px] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          
          <div className="lg:w-1/2 p-8">
            <Badge className="mb-4 bg-tds-purple text-white hover:bg-tds-dark-purple">{project.category}</Badge>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-tds-dark">{project.title}</h3>
            <p className="text-tds-neutral-gray mb-4">{project.location}</p>
            <p className="text-tds-dark mb-6">{project.description}</p>
            
            <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">
              View Project Details <ExternalLink size={16} className="ml-2" />
            </Button>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center">
                <button 
                  onClick={prevProject}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-tds-neutral-gray/30 hover:bg-tds-light-gray transition-colors mr-2"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextProject}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-tds-neutral-gray/30 hover:bg-tds-light-gray transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <div className="text-tds-neutral-gray">
                {currentProject + 1} / {projects.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
