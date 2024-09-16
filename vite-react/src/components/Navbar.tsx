import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-black bg-opacity-90 shadow-md shadow-gray-300 flex items-center justify-between px-8 py-4 text-white">
      <div className="flex gap-2">
        <img src={logo} alt="" className="w-30" />
        <p className="text-3xl font-extrabold">ReactFacts</p>
      </div>
      <div className="flex gap-2 text-3xl font-extrabold">
        <p>React Course -</p>
        <p>Project 1</p>
      </div>
    </nav>
  );
}
