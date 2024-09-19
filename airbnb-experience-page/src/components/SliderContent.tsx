import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

interface SliderContentProps {
  setAvailable: boolean;
  hoverText: string;
  image: string;
  rating: number;
  country: string;
  caption: string;
  review: number;
  price: number;
}

export default function SliderContent({
  setAvailable,
  hoverText,
  image,
  rating,
  country,
  caption,
  review,
  price,
}: SliderContentProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-52 h-80">
        {setAvailable && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-white text-gray-500 border-2 border-gray-700 text-sm rounded-md z-10">
            {hoverText}
          </span>
        )}
        <img
          src={image}
          alt=""
          className="w-full h-full border-none object-cover rounded-md"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div className="flex items-center justify-start space-x-1 text-gray-500">
          <FontAwesomeIcon icon={faStar} className="text-orange-500" />
          <span className="font-bold text-black">{rating}</span>
          <span>({review})</span>
          <span> . {country}</span>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-gray-600">{caption}</p>
          <p className="text-gray-700">
            <span className="font-bold">From ${price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}
