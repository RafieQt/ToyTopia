const ReviewCard = ({ review }) => {
  const { name, image, review: description, rating } = review;

  return (
    <div className="mx-4 w-72 h-60 bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      
      {/* Customer Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-3 border"
      />

      {/* Customer Name */}
      <h3 className="font-semibold text-gray-800">{name}</h3>

      {/* Rating */}
      <p className="text-yellow-500 text-sm mb-2">
        {"⭐".repeat(rating)}
      </p>

      {/* Review Text */}
      <p className="text-sm text-gray-600">
        “{description}”
      </p>
    </div>
  );
};

export default ReviewCard;
