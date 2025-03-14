
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-tds-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Premium interior design solutions for residential and commercial spaces. Creating beautiful, functional spaces since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tds-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tds-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tds-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tds-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/residential" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Residential Design
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Commercial Design
                </Link>
              </li>
              <li>
                <Link to="/kitchen-bath" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Kitchen & Bath
                </Link>
              </li>
              <li>
                <Link to="/fall-ceiling" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Fall Ceiling
                </Link>
              </li>
              <li>
                <Link to="/pop-work" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> POP Work
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Our Projects
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-tds-purple transition-colors flex items-center">
                  <ArrowUpRight size={14} className="mr-2" /> Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and design inspirations.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-tds-purple hover:bg-tds-dark-purple px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Dream Stair. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-tds-purple text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-tds-purple text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-tds-purple text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
