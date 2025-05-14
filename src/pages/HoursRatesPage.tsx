
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Check } from "lucide-react";

const HoursRatesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Hours & Rates</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Hours */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gym-yellow">Our Hours</h2>
                <div className="bg-gym-dark-gray p-8 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Clock size={24} className="text-gym-yellow mr-4" />
                      <div>
                        <p className="font-bold text-xl">Mon-Fri</p>
                        <p className="text-gray-300">5:00am-10:00pm</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={24} className="text-gym-yellow mr-4" />
                      <div>
                        <p className="font-bold text-xl">Sat</p>
                        <p className="text-gray-300">7:00am-7:00pm</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={24} className="text-gym-yellow mr-4" />
                      <div>
                        <p className="font-bold text-xl">Sun</p>
                        <p className="text-gray-300">7:00am-5:00pm</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-xl font-bold text-gym-yellow">Open 365 days a year!</p>
                  </div>
                </div>
              </div>
              
              {/* Rates */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gym-yellow">Gym Rates</h2>
                <div className="space-y-6">
                  <div className="bg-gym-dark-gray p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">One Month Pass</h3>
                      <p className="text-2xl font-bold text-gym-yellow">$39</p>
                    </div>
                  </div>
                  
                  <div className="bg-gym-dark-gray p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Three Month Pass</h3>
                      <p className="text-2xl font-bold text-gym-yellow">$89</p>
                    </div>
                  </div>
                  
                  <div className="bg-gym-dark-gray p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Six Month Pass</h3>
                      <p className="text-2xl font-bold text-gym-yellow">$139</p>
                    </div>
                  </div>
                  
                  <div className="bg-gym-dark-gray p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">One Year Pass</h3>
                      <p className="text-2xl font-bold text-gym-yellow">$199</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex items-center">
                    <Check size={20} className="text-gym-yellow mr-2" />
                    <span>No Contracts</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={20} className="text-gym-yellow mr-2" />
                    <span>No Start Up Fees</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={20} className="text-gym-yellow mr-2" />
                    <span>No Tax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HoursRatesPage;
