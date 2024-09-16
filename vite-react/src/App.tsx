import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <MyApp />
    </div>
  );
}

function MyApp() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
