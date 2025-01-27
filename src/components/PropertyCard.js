import React, { useState } from "react";
import Modal from "./Modal";

const PropertyCard = ({ property }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sale");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sqft, setSqft] = useState("");
  const [rooms, setRooms] = useState("");
  const [papersAvailable, setPapersAvailable] = useState(false);
  const [deposit, setDeposit] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [date, setDate] = useState("");

  const handleOpenModal = (option) => {
    setSelectedOption(option);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      price,
      propertyType,
      sqft,
      rooms,
      papersAvailable,
      deposit,
      maintenance,
      date,
    });
    setOpenModal(false);
  };

  if (!property) return <div>Property details are unavailable.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
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
        <h3 className="text-xl font-semibold text-gray-800">
          {property?.building || "Unnamed Building"}
        </h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          {property?.area || "Area not specified"}
        </p>
        <p className="text-lg font-semibold text-primary mt-2">
          ₹{property?.askingPrice || "Not available"}
        </p>
        <p className="text-gray-500 mt-1 text-sm md:text-base">
          {property?.flatNo}, {property?.street}, {property?.city},{" "}
          {property?.state}
        </p>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded w-full sm:w-auto"
          onClick={() => handleOpenModal("Sale")}
        >
          Edit Property Details
        </button>
      </div>

      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        selectedOption={selectedOption}
        handleSubmit={handleSubmit}
        date={date}
        setDate={setDate}
        price={price}
        setPrice={setPrice}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        papersAvailable={papersAvailable}
        setPapersAvailable={setPapersAvailable}
        sqft={sqft}
        setSqft={setSqft}
        rooms={rooms}
        setRooms={setRooms}
        deposit={deposit}
        setDeposit={setDeposit}
        maintenance={maintenance}
        setMaintenance={setMaintenance}
      />
    </div>
  );
};

export default PropertyCard;
