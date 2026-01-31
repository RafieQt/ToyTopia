import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
    const Data = useLoaderData();
    const {toyId} = useParams();
  const [toy, setToy] = useState({});
  useEffect(()=>{
    const toyData = Data.find(toy=> toy.toyId === Number(toyId));
    setToy(toyData);

  },[toyId, Data])

  console.log(toyId);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="rounded-xl max-h- object-cover shadow-md"
            />
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {toy.toyName}
            </h2>

            <p className="text-blue-600 font-semibold text-lg mb-3">
              ${toy.price}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              ⭐ {toy.rating} / 5
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {toy.description}
            </p>

            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p>
                <span className="font-medium text-gray-800">
                  Seller:
                </span>{" "}
                {toy.sellerName}
              </p>
              <p>
                <span className="font-medium text-gray-800">
                  Available Quantity:
                </span>{" "}
                {toy.availableQuantity}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Add to Cart
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition">
                Back to Toys
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToyDetails;
