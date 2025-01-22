import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const PropertyTable = ({ property, index }) => {
  const {
    availableFrom,
    askingPrice,
    photoUrl,
    building,
    propertyType,
    street,
    area,
    city,
    state,
    pincode,
    rentAmount,
    deposit,
    maintenance,
    flatNo,
    rooms,
    sqft,
    username,
    user_id,
  } = property;

  const formattedPrice =
    askingPrice > 0
      ? new Intl.NumberFormat().format(askingPrice)
      : "Price not available";

  const formattedRentAmount =
    rentAmount > 0
      ? new Intl.NumberFormat().format(rentAmount)
      : "Rent not available";

  const formattedDeposit =
    deposit > 0
      ? new Intl.NumberFormat().format(deposit)
      : "Deposit not available";

  const formattedMaintenance =
    maintenance > 0
      ? new Intl.NumberFormat().format(maintenance)
      : "Maintenance not available";

  // Modal visibility state and image state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  // Handler for image click
  const handleImageClick = () => {
    if (photoUrl) {
      setModalImageUrl(photoUrl); // Set the image URL to display in the modal
      setIsModalOpen(true); // Open the modal
    } else {
      alert("No image available for this property.");
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <>
      <div className="overflow-x-full max-w-screen-xl mx-auto p-4">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                Index
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                User ID
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                User Name
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                Available From
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                Building Name
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                Property Type
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/4">
                Address
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/4">
                Details
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-1/6">
                Price
              </th>
              <th className="border-b border-gray-300 p-4 text-left w-11/12">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg text-gray-800">{index + 1}</p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg text-gray-800">{user_id}</p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg text-gray-800">{username}</p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg text-gray-800">{availableFrom}</p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {building}
                </h3>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg font-semibold text-gray-800">
                  {propertyType}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/4">
                <p className="text-lg text-gray-800">
                  Flat No: {flatNo}, Street: {street}, Area: {area}, City:{" "}
                  {city}, State: {state}, PinCode: {pincode}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/4">
                <p className="text-lg text-gray-800">
                  Rooms: {rooms} Square Feet: {sqft} sqft Rent Amount:{" "}
                  {formattedRentAmount} Deposit: {formattedDeposit} Maintenance:{" "}
                  {formattedMaintenance}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4 w-1/6">
                <p className="text-lg font-bold text-gray-800">
                  {formattedPrice}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4 w-11/12">
                <FaImage
                  className="text-2xl cursor-pointer"
                  onClick={handleImageClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 p-2 text-2xl text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={modalImageUrl}
              alt="Property"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyTable;
