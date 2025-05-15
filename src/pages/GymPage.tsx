
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imagePaths = [
  "locker_room1.jpg",
  "locker_room2.jpg",
  "mma.jpg",
  "room1N.jpg",
  "room1NW.jpg",
  "room1NW2.jpg",
  "room1S.jpg",
  "room1S2.jpg",
  "room1SE.jpg",
  "room1SW.jpg",
  "room2N.jpg",
  "room2NE.jpg",
  "room2S.jpg",
  "room2SW.jpg",
  "room12S.jpg",
];

const getImageName = (path: string) => {
  const fileName = path.split("/").pop()?.split(".")[0] || "Gym image";
  return fileName.replace(/_/g, " ").replace(/\d+/g, (match) => ` ${match}`).trim();
};

const GymPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Gym</h1>

            <div className="mb-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {imagePaths.map((path, index) => (
                    <CarouselItem key={index} className="basis-full lg:basis-1/2">
                      <div className="p-1 aspect-square overflow-hidden rounded-lg">
                        <img
                          src={`/${path}`}
                          alt={getImageName(path)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">{getImageName(path)}</p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Albany Strength Gym is geared to strength training, size building, and rehabilitation.
                  It is pro heavy training and encourages big lifts.
                </p>
                <p className="text-lg mb-6">
                  With a vast array of squat racks, benches and free weights you'll be able to build the
                  muscle you want! Along with that is our Olympic Lifting section with plenty of bumper
                  plates, boxes and bars.
                </p>
                <p className="text-lg">
                  We're your one stop shop for all things fitness related. From our gym with a vast amount
                  of weights and machines, to our competitively priced supplement store; we have everything
                  you need to reach your fitness goals!
                </p>
              </div>
              <div className="bg-gym-dark-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Gym Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Multiple squat racks and power cages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Olympic lifting platforms with bumper plates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Extensive dumbbell selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Specialized bars (safety bar, trap bar, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Strongman equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Cardio machines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gym-yellow mr-2">•</span>
                    <span>Locker rooms with showers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GymPage;
