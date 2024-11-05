import { Button } from "./Button";

export const Card = ({ title, image, price, onShowDetails }) => {
  return (
    <div className="card max-w-xs bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <figure className="w-full h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img src={image} alt="Product" className="object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>
        <div className="flex justify-between">
          <p className="text-xl font-bold text-blue-600 mt-2">{price}</p>
          <Button children={"Show Details"} onClick={onShowDetails} />
        </div>
      </div>
    </div>
  );
};
