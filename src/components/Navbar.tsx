
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gym-black py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          ALBANY <span className="text-gym-yellow">STRENGTH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gym-yellow transition">Home</Link>
          <Link to="/services" className="text-white hover:text-gym-yellow transition">Services</Link>
          <Link to="/gym" className="text-white hover:text-gym-yellow transition">Gym</Link>
          <Link to="/hours" className="text-white hover:text-gym-yellow transition">Hours & Rates</Link>
          <Link to="/events" className="text-white hover:text-gym-yellow transition">Events</Link>
          <Link to="/contact" className="text-white hover:text-gym-yellow transition">Contact</Link>
          <Link to="/cart" className="text-white hover:text-gym-yellow transition flex items-center">
            <ShoppingCart size={20} />
            <span className="ml-1">$0.00</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gym-black border-t border-gray-800 py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gym-yellow transition px-2 py-1">Home</Link>
            <Link to="/services" className="text-white hover:text-gym-yellow transition px-2 py-1">Services</Link>
            <Link to="/gym" className="text-white hover:text-gym-yellow transition px-2 py-1">Gym</Link>
            <Link to="/hours" className="text-white hover:text-gym-yellow transition px-2 py-1">Hours & Rates</Link>
            <Link to="/events" className="text-white hover:text-gym-yellow transition px-2 py-1">Events</Link>
            <Link to="/contact" className="text-white hover:text-gym-yellow transition px-2 py-1">Contact</Link>
            {<Link to="/cart" className="text-white hover:text-gym-yellow transition px-2 py-1 flex items-center">
              <ShoppingCart size={20} />
              <span className="ml-1">$0.00</span>
            </Link>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
