import HeroImage from "/Group.png";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={HeroImage} alt="" className="w-[50%] mt-24" />
      <HeroText />
    </div>
  );
}

function HeroText() {
  return (
    <div className="ml-[-10%] md:ml-8">
      <h2 className="text-4xl lg:text-6xl  font-bold font-sans mt-8">
        Online Experiences
      </h2>
      <p className="text-2xl mt-4 text-gray-500 text-wrap font-sans">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}
