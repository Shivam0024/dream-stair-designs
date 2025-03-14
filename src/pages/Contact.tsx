
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-tds-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-tds-dark">Contact Us</h1>
            <p className="text-tds-neutral-gray text-lg mb-8">
              Have a question or ready to start your project? Get in touch with our team.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Get in Touch</h2>
              <p className="text-tds-neutral-gray mb-10">
                Fill out the form and one of our design consultants will contact you shortly to discuss your project needs.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-tds-dark mb-2">First Name*</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-tds-dark mb-2">Last Name*</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tds-dark mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-tds-dark mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple" 
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-tds-dark mb-2">Project Type*</label>
                  <select 
                    id="projectType" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Interior</option>
                    <option value="commercial">Commercial Interior</option>
                    <option value="kitchen">Kitchen & Bath</option>
                    <option value="ceiling">Fall Ceiling</option>
                    <option value="pop">POP Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-tds-dark mb-2">Your Message*</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tds-purple"
                    required
                  ></textarea>
                </div>
                
                <Button className="bg-tds-purple hover:bg-tds-dark-purple text-white w-full py-6 flex items-center justify-center">
                  Send Message <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-tds-dark">Contact Information</h2>
              <p className="text-tds-neutral-gray mb-10">
                Feel free to reach out to us through any of the following channels. We're here to answer your questions.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex">
                  <div className="w-12 h-12 bg-tds-light-purple rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-tds-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tds-dark mb-1">Visit Our Office</h3>
                    <p className="text-tds-neutral-gray">123 Design Street, Creative District, City, 12345</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-tds-light-purple rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-tds-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tds-dark mb-1">Call Us</h3>
                    <p className="text-tds-neutral-gray">+1 (555) 123-4567</p>
                    <p className="text-tds-neutral-gray">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-tds-light-purple rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-tds-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tds-dark mb-1">Email Us</h3>
                    <p className="text-tds-neutral-gray">info@thedreamstair.com</p>
                    <p className="text-tds-neutral-gray">design@thedreamstair.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-tds-light-purple rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-tds-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-tds-dark mb-1">Working Hours</h3>
                    <p className="text-tds-neutral-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-tds-neutral-gray">Saturday: 10:00 AM - 4:00 PM (By appointment only)</p>
                    <p className="text-tds-neutral-gray">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-tds-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-tds-light-purple rounded-full flex items-center justify-center hover:bg-tds-purple transition-colors">
                    <svg className="w-5 h-5 text-tds-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-tds-light-purple rounded-full flex items-center justify-center hover:bg-tds-purple transition-colors">
                    <svg className="w-5 h-5 text-tds-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-tds-light-purple rounded-full flex items-center justify-center hover:bg-tds-purple transition-colors">
                    <svg className="w-5 h-5 text-tds-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-tds-light-purple rounded-full flex items-center justify-center hover:bg-tds-purple transition-colors">
                    <svg className="w-5 h-5 text-tds-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-96 bg-gray-200">
        {/* This would be replaced with a proper Google Map or other map embed */}
        <div className="h-full flex items-center justify-center bg-tds-light-gray">
          <p className="text-tds-neutral-gray">Map Placeholder - Google Maps would be integrated here</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
