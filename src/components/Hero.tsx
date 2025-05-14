
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center bg-gym-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/255da4f8-b037-4678-9dde-496cc249bdef.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            "THE BEST GYM IN THE <span className="text-gym-yellow">CAPITAL REGION</span>."
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We are a local gym skewed towards powerlifting and strength building. With a vast array of squat racks, benches and free weights you'll be able to build the muscle you want!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-yellow" size="lg">LEARN MORE</Button>
            <Button variant="outline" size="lg" className="border-gym-yellow text-gym-yellow hover:bg-gym-yellow hover:text-gym-black">
              VISIT STORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
