
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Commercial = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-tds-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-tds-dark">Commercial Interior Design</h1>
            <p className="text-tds-neutral-gray text-lg mb-8">
              Create functional and impressive commercial spaces that elevate your business. From offices to retail and restaurants, we design environments that work for you and your customers.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-tds-dark">Coming Soon</h2>
          <p className="text-tds-neutral-gray mb-8">
            We're currently updating our commercial projects portfolio. Check back soon to see our latest work.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Commercial;
