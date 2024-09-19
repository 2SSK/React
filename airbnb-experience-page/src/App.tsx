import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

export default function App() {
  return <MyApp />;
}

function MyApp() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
    </>
  );
}
