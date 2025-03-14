
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    content: "The Dream Stair completely transformed our home. Their attention to detail and understanding of our vision was remarkable. We couldn't be happier with the results!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Raj Malhotra",
    role: "Restaurant Owner",
    content: "Working with TDS for our restaurant redesign was a fantastic experience. They understood the unique needs of a commercial space and delivered beyond our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Aarti Patel",
    role: "Office Manager",
    content: "The fall ceiling and POP work done by The Dream Stair in our office has received countless compliments. Their team was professional and completed the work on schedule.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 bg-tds-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tds-dark mb-4">What Our Clients Say</h2>
          <p className="text-tds-neutral-gray text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with The Dream Stair.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="flex mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#9b87f5" color="#9b87f5" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} size={20} color="#9b87f5" />
                ))}
              </div>
              
              <blockquote className="text-tds-dark text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div>
                <h4 className="font-medium text-tds-dark">{testimonials[currentIndex].name}</h4>
                <p className="text-tds-neutral-gray">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-tds-neutral-gray/30 hover:bg-tds-light-gray transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-tds-neutral-gray/30 hover:bg-tds-light-gray transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
