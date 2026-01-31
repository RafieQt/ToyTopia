import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const Data = useLoaderData();
  const { toyId } = useParams();
  
  const [toy, setToy] = useState({});
  useEffect(() => {
    const toyData = Data.find(toy => toy.toyId === Number(toyId));
    setToy(toyData);

  }, [toyId, Data])

  const handleSubmit = (e) => {
    e.preventDefault();

    toast("Your request has been submitted");
    
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-start flex-col gap-2">
                <div>
                  <p>Your Name</p>
                  <input type="text" name="name" placeholder="Your Name" className="border-gray-400 border rounder-2xl p-2 w-full" required/>
                </div>
                <div>
                  <p>Your email</p>
                  <input type="email" name="email" placeholder="Your email" className="border-gray-400 border rounder-2xl p-2 w-full" required/>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToyDetails;
