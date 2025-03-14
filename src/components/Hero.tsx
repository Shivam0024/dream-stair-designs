
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop')", 
          filter: "brightness(0.9)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-tds-dark/70 to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transform Your Space <br />
            <span className="text-tds-purple">Into a Dream</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Premium interior design solutions for residential and commercial spaces. 
            We bring your vision to life with expert craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white px-8 py-6">
              View Our Work
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
