
import { DumbbellIcon, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import supp from '@/assets/supplements.jpg'
const ServicesSection = () => {
  return (
    <section className="py-20 bg-gym-black" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">WHAT WE'RE OFFERING</h2>
          <p className="text-xl mt-8 text-gray-300">Our Services</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Gym Service */}
          <div className="bg-gym-dark-gray p-8 rounded-lg flex flex-col h-full">
            <div className="bg-gym-yellow rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DumbbellIcon size={32} className="text-gym-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">GYM</h3>
            <p className="text-lg text-gray-300 mb-8 flex-grow">
              Albany Strength Gym is geared to strength training, size building, and rehabilitation. It is pro heavy training and encourages big lifts.
            </p>
            <div className="mt-auto">
              <Button variant="ghost" className="border border-gym-yellow text-gym-yellow hover:bg-gym-yellow hover:text-gym-black">
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Store Service */}
          <div className="bg-gym-dark-gray p-8 rounded-lg flex flex-col h-full">
            <div className="bg-gym-yellow rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-gym-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">STORE</h3>
            <p className="text-lg text-gray-300 mb-8 flex-grow">
              Our Supplement Store which features the highest quality supplements for the best price, is now available online.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black rounded p-4">
                <img
                  src={supp}
                  alt="Supplement store shelves"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
            <div className="mt-auto">
              <Button variant="ghost" className="border border-gym-yellow text-gym-yellow hover:bg-gym-yellow hover:text-gym-black">
                VISIT STORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
