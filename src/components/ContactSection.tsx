
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message. We'll get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tds-dark mb-4">Get In Touch</h2>
          <p className="text-tds-neutral-gray text-lg max-w-2xl mx-auto">
            Have a project in mind? Contact us to discuss how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-tds-dark">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-tds-dark mb-1">Your Name *</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tds-dark mb-1">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-tds-dark mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-tds-dark mb-1">Your Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-tds-purple hover:bg-tds-dark-purple text-white">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-tds-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-tds-purple mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tds-dark mb-1">Phone</h4>
                    <p className="text-tds-neutral-gray">+91 98765 43210</p>
                    <p className="text-tds-neutral-gray">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-tds-purple mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tds-dark mb-1">Email</h4>
                    <p className="text-tds-neutral-gray">info@thedreamstair.com</p>
                    <p className="text-tds-neutral-gray">support@thedreamstair.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={24} className="text-tds-purple mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-tds-dark mb-1">Location</h4>
                    <p className="text-tds-neutral-gray">123 Design Street, Creative District</p>
                    <p className="text-tds-neutral-gray">New Delhi, India - 110001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-tds-purple rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-serif font-semibold mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
