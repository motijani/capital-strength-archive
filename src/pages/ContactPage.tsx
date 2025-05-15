
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gym-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-yellow"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gym-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-yellow"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gym-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gym-yellow text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-300">527 Central Avenue</p>
                      <p className="text-gray-300">Albany, NY 12206</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-300">support@albanystrength.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={24} className="text-gym-yellow mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-300">518-433-1703</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Hours</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-bold">Monday-Friday</span>
                      <span className="text-gray-300">5:00am-10:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Saturday</span>
                      <span className="text-gray-300">7:00am-7:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Sunday</span>
                      <span className="text-gray-300">7:00am-5:00pm</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gym-yellow font-bold">Open 365 days a year!</p>
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

export default ContactPage;
