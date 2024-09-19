import SliderContent from "./SliderContent";

import image1 from "/images/image13.png";
import image2 from "/images/image24.png";
import image3 from "/images/image22.png";

export default function Slider() {
  return (
    <div className="mt-16 mb-16 flex items-center justify-center gap-9">
      <SliderContent
        setAvailable={true}
        hoverText="SOLD OUT"
        image={image1}
        rating={5.0}
        review={6}
        country="USA"
        caption="Life lessons with Katie zaferes"
        price={136}
      />
      <SliderContent
        setAvailable={true}
        hoverText="ONLINE"
        image={image2}
        rating={5.0}
        review={30}
        country="USA"
        caption="Learn wedding photography"
        price={125}
      />
      <SliderContent
        setAvailable={false}
        hoverText=""
        image={image3}
        rating={4.8}
        review={2}
        country="USA"
        caption="Group mountain biking"
        price={50}
      />
    </div>
  );
}
