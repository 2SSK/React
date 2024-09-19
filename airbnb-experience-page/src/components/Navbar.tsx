import logo from "/logo.svg";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center p-4 justify-start shadow-lg shadow-gray-300">
      <img src={logo} alt="" className="w-12 mr-1" />
      <span className="text-3xl font-extrabold font-sans text-red-500">airbnb</span>
    </nav>
  );
}
