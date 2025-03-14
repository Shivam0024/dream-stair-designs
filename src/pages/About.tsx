
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building, Users, History, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-tds-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-tds-dark">About The Dream Stair</h1>
            <p className="text-tds-neutral-gray text-lg mb-8">
              Bringing your interior design dreams to reality since 2008
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Our Story</h2>
              <p className="text-tds-neutral-gray mb-6">
                Founded in 2008, The Dream Stair began with a simple vision: to transform ordinary spaces into extraordinary environments. What started as a small studio has now grown into one of the region's most respected interior design firms.
              </p>
              <p className="text-tds-neutral-gray mb-6">
                Our journey has been defined by a passion for innovative design, attention to detail, and an unwavering commitment to exceeding client expectations. Through economic ups and downs, we've remained steadfast in our mission to create spaces that inspire and endure.
              </p>
              <p className="text-tds-neutral-gray">
                Today, The Dream Stair continues to push the boundaries of what's possible in interior design, blending cutting-edge techniques with timeless principles to craft environments that are both beautiful and functional.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop" 
                alt="The Dream Stair Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-tds-dark text-center">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                    alt="Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-tds-dark">John Doe</h3>
                  <p className="text-tds-purple font-medium mb-4">Founder & CEO</p>
                  <p className="text-tds-neutral-gray">
                    With over 20 years of experience in interior design, John leads our company with passion and vision.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                    alt="Creative Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-tds-dark">Sarah Johnson</h3>
                  <p className="text-tds-purple font-medium mb-4">Creative Director</p>
                  <p className="text-tds-neutral-gray">
                    Sarah brings creativity and innovation to every project, ensuring unique and personalized designs.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                    alt="Technical Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1 text-tds-dark">Michael Chen</h3>
                  <p className="text-tds-purple font-medium mb-4">Technical Director</p>
                  <p className="text-tds-neutral-gray">
                    Michael oversees the technical aspects of our projects, ensuring flawless execution and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Our Approach</h2>
              <p className="text-tds-neutral-gray mb-6">
                At The Dream Stair, we believe that great design starts with listening. We take the time to understand your needs, preferences, and lifestyle before creating spaces that reflect who you are and how you live.
              </p>
              <p className="text-tds-neutral-gray">
                Our collaborative process involves you at every stage, from initial concept to final installation. We combine creativity, technical expertise, and industry connections to deliver results that exceed expectations while respecting your timeline and budget.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-tds-dark">What areas do you serve?</AccordionTrigger>
                  <AccordionContent className="text-tds-neutral-gray">
                    We primarily serve the metropolitan area and surrounding suburbs, but we also take on select projects nationwide for our clients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-tds-dark">How much does your service cost?</AccordionTrigger>
                  <AccordionContent className="text-tds-neutral-gray">
                    Our pricing varies based on the scope and scale of your project. We offer flexible fee structures including fixed-fee, hourly rates, and percentage-based fees. Contact us for a personalized quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-tds-dark">How long does a typical project take?</AccordionTrigger>
                  <AccordionContent className="text-tds-neutral-gray">
                    Project timelines vary based on complexity and scope. A room refresh might take 6-8 weeks, while a complete home renovation could take 6 months or more. We'll provide a detailed timeline during our initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-tds-dark">Do you work with clients remotely?</AccordionTrigger>
                  <AccordionContent className="text-tds-neutral-gray">
                    Yes, we offer virtual design services for clients outside our immediate service area. We use video conferencing, digital mood boards, and 3D renderings to communicate designs effectively.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-tds-light-purple rounded-full flex items-center justify-center mb-6">
                <History className="w-8 h-8 text-tds-purple" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-tds-dark">Established 2008</h3>
              <p className="text-tds-neutral-gray">
                Over 15 years of excellence in transforming spaces and creating beautiful interiors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-tds-light-purple rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-tds-purple" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-tds-dark">Award Winning</h3>
              <p className="text-tds-neutral-gray">
                Recognized for our innovative designs and exceptional client satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-tds-light-purple rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-tds-purple" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-tds-dark">Expert Team</h3>
              <p className="text-tds-neutral-gray">
                Our talented designers bring a wealth of expertise and creativity to every project.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Our Office</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-tds-purple mr-3" />
                <p className="text-tds-neutral-gray">123 Design Street, Creative District, City</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-tds-purple mr-3" />
                <p className="text-tds-neutral-gray">Mon-Fri: 9AM-6PM | Sat: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-tds-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our expert designers. Let's bring your vision to life.
          </p>
          <a href="/contact" className="bg-tds-purple hover:bg-tds-dark-purple text-white px-6 py-3 rounded-md transition-colors inline-block">Contact Us</a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
