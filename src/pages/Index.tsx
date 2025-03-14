
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <ProjectShowcase />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
