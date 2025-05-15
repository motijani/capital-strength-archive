
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import images from src/assets
import lockerRoom1Img from '@/assets/locker_room1.jpg';
import lockerRoom2Img from '@/assets/locker_room2.jpg';
import mmaImg from '@/assets/mma.jpg';
import room1NImg from '@/assets/room1N.jpg';
import room1NWImg from '@/assets/room1NW.jpg';
import room1NW2Img from '@/assets/room1NW2.jpg';
import room1SImg from '@/assets/room1S.jpg';
import room1S2Img from '@/assets/room1S2.jpg';
import room1SEImg from '@/assets/room1SE.jpg';
import room1SWImg from '@/assets/room1SW.jpg';
import room2NImg from '@/assets/room2N.jpg';
import room2NEImg from '@/assets/room2NE.jpg';
import room2SImg from '@/assets/room2S.jpg';
import room2SWImg from '@/assets/room2SW.jpg';
import room12SImg from '@/assets/room12S.jpg';
import cardioImg from '@/assets/cardio.jpg';


const originalFilenames = [
  "locker_room1.jpg", "locker_room2.jpg", "mma.jpg", "room1N.jpg", "room1NW.jpg",
  "room1NW2.jpg", "room1S.jpg", "room1S2.jpg", "room1SE.jpg", "room1SW.jpg",
  "room2N.jpg", "room2NE.jpg", "room2S.jpg", "room2SW.jpg", "room12S.jpg", "cardio.jpg"
];

const importedImages = [
  lockerRoom1Img, lockerRoom2Img, mmaImg, room1NImg, room1NWImg, room1NW2Img,
  room1SImg, room1S2Img, room1SEImg, room1SWImg, room2NImg, room2NEImg,
  room2SImg, room2SWImg, room12SImg, cardioImg
];

const getImageName = (filename: string) => {
  const namePart = filename.split(".")[0] || "Gym image";
  return namePart.replace(/_/g, " ").replace(/\d+/g, (match) => ` ${match}`).trim();
};

const imagesData = originalFilenames.map((filename, index) => ({
  src: importedImages[index],
  name: getImageName(filename),
}));

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
                  {imagesData.map((image, index) => (
                    <CarouselItem key={index} className="basis-full lg:basis-1/2">
                      <div className="p-1 aspect-square overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center mt-2 text-sm">{image.name}</p>
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
