
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

const RatesSection = () => {
  const membershipPlans = [
    {
      title: "One Month Pass",
      price: "$39",
      id: "monthly"
    },
    {
      title: "Three Month Pass",
      price: "$89",
      id: "quarterly"
    },
    {
      title: "Six Month Pass",
      price: "$139",
      id: "biannual"
    },
    {
      title: "One Year Pass",
      price: "$199",
      id: "annual"
    }
  ];

  return (
    <section className="py-20 bg-gym-dark-gray" id="rates">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Get To Know</h2>
          <p className="text-xl mt-8 text-gray-300">Our Rates</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.id} 
              className="bg-gym-black border border-gray-800 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 text-center border-b border-gray-800">
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-extrabold text-gym-yellow">{plan.price}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon size={20} className="text-gym-yellow mr-2" />
                    <span>No Contracts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon size={20} className="text-gym-yellow mr-2" />
                    <span>No Start Up Fees</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon size={20} className="text-gym-yellow mr-2" />
                    <span>No Tax</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon size={20} className="text-gym-yellow mr-2" />
                    <span>Open 365 Days</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border-t border-gray-800">
                <Button className="w-full bg-gym-yellow text-gym-black hover:bg-white font-bold">
                  BOOK NOW
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gym-yellow">GYM PASS</p>
          <h3 className="text-3xl font-bold mt-2">Albany Strength XXXL</h3>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
