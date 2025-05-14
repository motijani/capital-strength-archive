
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Events</h1>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gym-yellow">Powerlifting Meet Results</h2>
              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">March 30, 2019 – Powerlifting Meet</h3>
                <p className="mb-6">
                  Congratulations to all participants in our March 2019 powerlifting meet! 
                  We had amazing performances across all weight classes and divisions.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gym-yellow">Men's Open Division</h4>
                    <ul className="space-y-2 mt-2">
                      <li>• 1st Place - John Smith (Total: 1450 lbs)</li>
                      <li>• 2nd Place - Mike Johnson (Total: 1380 lbs)</li>
                      <li>• 3rd Place - Chris Williams (Total: 1325 lbs)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gym-yellow">Women's Open Division</h4>
                    <ul className="space-y-2 mt-2">
                      <li>• 1st Place - Sarah Davis (Total: 950 lbs)</li>
                      <li>• 2nd Place - Jennifer Brown (Total: 875 lbs)</li>
                      <li>• 3rd Place - Ashley Taylor (Total: 800 lbs)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gym-yellow">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="bg-gym-dark-gray p-6 rounded-lg">
                  <div className="flex items-start">
                    <Calendar size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Powerlifting Seminar</h3>
                      <p className="text-gray-300 mb-2">June 15, 2025 – 10:00am to 2:00pm</p>
                      <p>Learn proper techniques and training strategies from experienced powerlifters.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gym-dark-gray p-6 rounded-lg">
                  <div className="flex items-start">
                    <Calendar size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Summer Strength Competition</h3>
                      <p className="text-gray-300 mb-2">July 22, 2025 – All Day Event</p>
                      <p>Annual competition featuring multiple strength events. Open to members and non-members.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gym-dark-gray p-6 rounded-lg">
                  <div className="flex items-start">
                    <Calendar size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Nutrition Workshop</h3>
                      <p className="text-gray-300 mb-2">August 5, 2025 – 6:30pm to 8:00pm</p>
                      <p>Learn about proper nutrition for strength athletes and bodybuilders.</p>
                    </div>
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

export default EventsPage;
