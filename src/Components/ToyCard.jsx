import React from 'react';

const ToyCard = ({ toy, onReadMore }) => {
    return (
        <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border-gray-400 bg-white hover:shadow-xl  transition-transform duration-300 hover:scale-105">
            {/* Image */}
            <div className="relative">
                <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black to-transparent"></div>
                <h3 className="absolute bottom-2 left-3 text-white text-lg font-bold drop-shadow-md">
                    {toy.toyName}
                </h3>
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {toy.description || "A fun toy for kids of all ages."}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">
                        ${toy.price || "19.99"}
                    </span>
                    <button
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                        onClick={() => onReadMore(toy)}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;