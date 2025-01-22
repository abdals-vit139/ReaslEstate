import React from "react";

const PropertyCard = ({ property }) => {
  if (!property) return <div>Property details are unavailable.</div>;
  // console.log(property);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {property?.photoUrl ? (
        <img
          src={property.photoUrl}
          alt={property.title || "Property"}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-300"></div>
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {property?.building || "Unnamed Building"}
        </h3>
        <p className="text-gray-600 mt-2">
          {property?.area || "Area not specified"}
        </p>
        <p className="text-lg font-semibold text-primary mt-2">
          ₹{property?.askingPrice || "Not available"}
        </p>
        <p className="text-gray-500 mt-1">
          {property?.flatNo}, {property?.street}, {property?.city},{" "}
          {property?.state}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
