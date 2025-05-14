
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gym-dark-gray pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              ALBANY <span className="text-gym-yellow">STRENGTH</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Your one stop shop for all things fitness related. From our gym with a vast amount of weights and machines, to our competitively priced supplement store.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gym-yellow transition">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gym-yellow transition">Services</Link></li>
              <li><Link to="/gym" className="text-gray-300 hover:text-gym-yellow transition">Gym</Link></li>
              <li><Link to="/hours" className="text-gray-300 hover:text-gym-yellow transition">Hours & Rates</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-gym-yellow transition">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gym-yellow transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gym-black p-3 rounded-full hover:bg-gym-yellow hover:text-gym-black transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-gym-black p-3 rounded-full hover:bg-gym-yellow hover:text-gym-black transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-gym-black p-3 rounded-full hover:bg-gym-yellow hover:text-gym-black transition">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-300">
                <span className="block">527 Central Avenue</span>
                <span className="block">Albany, NY 12206</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © Copyright 2025 ALBANY STRENGTH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
