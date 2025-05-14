
const AboutSection = () => {
  return (
    <section className="bg-gym-dark-gray py-20" id="about">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">About Us</h2>
            <p className="text-lg mt-8 text-gray-300">
              ALBANY STRENGTH GYM is geared to strength training, size building, and rehabilitation. We're your one stop shop for all things fitness related.
            </p>
            <p className="text-lg mt-4 text-gray-300">
              From our gym with a vast amount of weights and machines, to our competitively priced supplement store; we have everything you need to reach your fitness goals!
            </p>
            <p className="text-lg mt-4 text-gray-300">
              We also offer MMA classes and have a licensed massage therapist in the building who specializes in ART therapy to fix injuries.
            </p>
            <div className="mt-8">
              <h3 className="uppercase text-gym-yellow font-bold text-xl mb-2">Albany Strength XXXL</h3>
              <p className="text-gray-300">527 Central Avenue Albany, NY 12206</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[400px] bg-[url('/lovable-uploads/9c8e0ea0-c6c7-4e91-bd42-775b7b62b285.png')] bg-cover bg-center rounded"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gym-yellow flex items-center justify-center p-6">
              <span className="font-extrabold text-3xl text-gym-black uppercase leading-tight">Open 365 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
