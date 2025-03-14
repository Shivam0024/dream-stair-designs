
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Residential",
    description: "Transform your home with our expert interior design services",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    link: "/residential"
  },
  {
    title: "Kitchen & Bath",
    description: "Functional and stylish designs for the heart of your home",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    link: "/kitchen-bath"
  },
  {
    title: "Commercial",
    description: "Elevate your business space to impress clients and employees",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=800&auto=format&fit=crop",
    link: "/commercial"
  },
  {
    title: "Fall Ceiling",
    description: "Stunning ceiling designs that transform the look of any room",
    image: "https://images.unsplash.com/photo-1573100925118-c7e081c6925d?q=80&w=800&auto=format&fit=crop",
    link: "/fall-ceiling"
  },
  {
    title: "POP Work",
    description: "Decorative plaster of Paris creations for walls and ceilings",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    link: "/pop-work"
  },
  {
    title: "Office Design",
    description: "Productive and inspiring workspaces tailored to your needs",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop",
    link: "/office-design"
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-tds-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tds-dark mb-4">Explore Our Design Categories</h2>
          <p className="text-tds-neutral-gray text-lg max-w-2xl mx-auto">
            From residential spaces to commercial projects, we offer comprehensive design solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2 text-tds-dark">{category.title}</h3>
                <p className="text-tds-neutral-gray mb-4">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="inline-flex items-center text-tds-purple font-medium hover:text-tds-dark-purple transition-colors"
                >
                  Explore Designs <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
