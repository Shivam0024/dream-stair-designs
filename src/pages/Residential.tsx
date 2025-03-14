
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const residentialProjects = {
  livingRoom: [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Clean lines and minimalist design for a spacious feel",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Traditional Elegance",
      description: "Classic design with rich textures and warm colors",
      image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Contemporary Chic",
      description: "Blend of modern and traditional elements for a timeless look",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Urban Loft Style",
      description: "Industrial elements meet cozy comfort in this living space",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
  ],
  bedroom: [
    {
      id: 1,
      title: "Serene Master Bedroom",
      description: "Peaceful retreat with soft colors and luxurious textiles",
      image: "https://images.unsplash.com/photo-1551105378-78e609e1d468?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Children's Bedroom",
      description: "Playful and practical design for growing children",
      image: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Guest Bedroom",
      description: "Comfortable and welcoming space for visitors",
      image: "https://images.unsplash.com/photo-1617098600599-256b66be0153?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Luxury Master Suite",
      description: "Spacious bedroom with attached sitting area and custom built-ins",
      image: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=800&auto=format&fit=crop",
    },
  ],
  diningRoom: [
    {
      id: 1,
      title: "Formal Dining Room",
      description: "Elegant space for entertaining guests and special occasions",
      image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c55?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Open Concept Dining",
      description: "Seamless flow between kitchen and dining areas for modern living",
      image: "https://images.unsplash.com/photo-1585128903994-9788298932a6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Compact Dining Nook",
      description: "Smart solution for small spaces with built-in seating",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Breakfast Area",
      description: "Bright and airy casual dining space for everyday meals",
      image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?q=80&w=800&auto=format&fit=crop",
    },
  ],
};

const Residential = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-tds-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-tds-dark">Residential Interior Design</h1>
            <p className="text-tds-neutral-gray text-lg mb-8">
              Transform your home into a personalized sanctuary with our thoughtfully crafted interior design solutions. From living rooms to bedrooms, we create spaces that reflect your unique style and meet your functional needs.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="livingRoom" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-tds-light-gray">
                <TabsTrigger value="livingRoom" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Living Room</TabsTrigger>
                <TabsTrigger value="bedroom" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Bedroom</TabsTrigger>
                <TabsTrigger value="diningRoom" className="data-[state=active]:bg-tds-purple data-[state=active]:text-white">Dining Room</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="livingRoom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {residentialProjects.livingRoom.map((project) => (
                  <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2 text-tds-dark">{project.title}</h3>
                      <p className="text-tds-neutral-gray mb-4">{project.description}</p>
                      <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">
                        View Details <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bedroom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {residentialProjects.bedroom.map((project) => (
                  <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2 text-tds-dark">{project.title}</h3>
                      <p className="text-tds-neutral-gray mb-4">{project.description}</p>
                      <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">
                        View Details <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="diningRoom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {residentialProjects.diningRoom.map((project) => (
                  <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2 text-tds-dark">{project.title}</h3>
                      <p className="text-tds-neutral-gray mb-4">{project.description}</p>
                      <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">
                        View Details <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="bg-tds-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our expert designers. We'll help you create the home of your dreams.
          </p>
          <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white">Contact Us</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Residential;
