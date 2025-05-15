
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gym-yellow">Gym Membership</h2>
                <p className="mb-4">
                  Albany Strength Gym is geared to strength training, size building, and rehabilitation.
                  It is pro heavy training and encourages big lifts.
                </p>
                <p className="mb-4">
                  Join our community of strength enthusiasts with flexible membership options:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• One Month Pass: $39</li>
                  <li>• Three Month Pass: $89</li>
                  <li>• Six Month Pass: $139</li>
                  <li>• One Year Pass: $199</li>
                </ul>
                <p>No contracts, no start-up fees, no tax!</p>
              </div>

              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gym-yellow">Supplement Store</h2>
                <p className="mb-4">
                  Our Supplement Store features the highest quality supplements for the best price,
                  and is now available online.
                </p>
                <p className="mb-4">
                  We offer a wide range of products including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• Protein powder</li>
                  <li>• Pre-workout formulas</li>
                  <li>• Amino acids</li>
                  <li>• Vitamins and minerals</li>
                  <li>• Recovery supplements</li>
                  <li>• Gym Merchandise</li>
                </ul>
                <p>For supplement orders, call the store at 518-433-1703.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gym-yellow">MMA Classes</h2>
                <p className="mb-4">
                  We offer MMA classes for all skill levels. Contact us for more information on
                  schedule and pricing.
                </p>
              </div>

              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gym-yellow">Massage Therapy</h2>
                <p className="mb-4">
                  We have a licensed massage therapist in the building who specializes in ART therapy
                  to fix injuries. Contact us to schedule an appointment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
