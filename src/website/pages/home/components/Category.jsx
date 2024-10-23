import { casinoImg, sportImg } from "../../../../assets/images";
import {
  FaBasketball,
  MdCasino,
  IoGameControllerOutline,
} from "../../../../assets/icons";

const Category = () => {
  return (
    <div className="py-5 md:px-16">
      <div className="md:grid md:grid-cols-2 gap-10 md:p-0 p-6">
        <div
          className="p-6 rounded-lg shadow-md text-white md:mb-0 mb-6"
          style={{
            backgroundImage: `url(${casinoImg})`,
            backgroundSize: "cover",
          }}>
          {/* Casino Title and Description */}
          <div className="mt-6">
            <div className="flex items-center space-x-3 mb-4 mt-32">
              <MdCasino size={20} />
              <h2 className="text-2xl font-semibold">Casino</h2>
            </div>
            <p className="text-gray-300">
              Dive into our wide range of in-house games, live casino, and slots
              to experience a thrilling casino adventure.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
              {/* Button Icon */}
              <IoGameControllerOutline />
              Casino
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
              {/* Button Icon */}
              <MdCasino />
              Live Casino
            </button>
          </div>
        </div>

        {/* Grid 2 */}
        <div
          className="p-6 rounded-lg shadow-md text-white  "
          style={{
            backgroundImage: `url(${sportImg})`,
            backgroundSize: "cover",
          }}>
          {/* Casino Title and Description */}
          <div className="mt-6">
            <div className="flex items-center space-x-4 mb-4 mt-32">
              <FaBasketball size={20} />
              <h2 className="text-2xl font-semibold">Sport</h2>
            </div>
            <p className="text-gray-300">
              Dive in to our wide range of in-house games, live casino and slots
              to experience a thrilling casino adventure.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
              {/* Button Icon */}
              <FaBasketball />
              Sport
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
              {/* Button Icon */}
              <MdCasino />
              Live Casino
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
