
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gym-black" id="contact">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-left">OUR HOURS</h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Clock size={24} className="text-gym-yellow mr-3" />
                <div>
                  <p className="font-bold">Mon-Fri</p>
                  <p className="text-gray-300">5:00am-10:00pm</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock size={24} className="text-gym-yellow mr-3" />
                <div>
                  <p className="font-bold">Sat</p>
                  <p className="text-gray-300">7:00am-7:00pm</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock size={24} className="text-gym-yellow mr-3" />
                <div>
                  <p className="font-bold">Sun</p>
                  <p className="text-gray-300">7:00am-5:00pm</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold">Open 365 days a year!</p>
            </div>
          </div>

          <div>
            <h2 className="section-title text-left">Contact Us</h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <MapPin size={24} className="text-gym-yellow mr-3" />
                <p>527 Central Avenue Albany, NY 12206</p>
              </div>
              <div className="flex items-center">
                <Mail size={24} className="text-gym-yellow mr-3" />
                <p>support@albanystrength.com</p>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="text-gym-yellow mr-3" />
                <p>518-433-1703</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-300">For supplement orders, call the store at 518-433-1703.</p>
              <p className="text-gray-300">For a site like this contact: 929-423-611 / email: mohammedtjay@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
