import logo from "../assets/react.svg";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-black bg-opacity-80 text-white flex  justify-center">
      <div className="mt-32">
        <h3 className="text-5xl font-extrabold mb-6">Fun facts about React</h3>
        <ul className="gap-40 ml-12 list-disc text-2xl marker:text-blue-300 marker:text-3xl text-gray-300">
          <li>Was released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <img
        src={logo}
        alt="React logo"
        className="w-[500px] absolute top-[200px] right-[-11%] grayscale opacity-50"
      />
    </div>
  );
}
