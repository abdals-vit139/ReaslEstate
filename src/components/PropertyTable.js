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
      setModalImageUrl(photoUrl);
      setIsModalOpen(true);
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
      {/* Property Table Wrapper */}
      <div className="property-table-wrapper overflow-auto mx-auto p-4">
        <table className="min-w-full table-auto border-gray-300">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-4 text-left">Index</th>
              <th className="border-b border-gray-300 p-4 text-left">
                User ID
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                User Name
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                Available From
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                Building Name
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                Property Type
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                Address
              </th>
              <th className="border-b border-gray-300 p-4 text-left">
                Details
              </th>
              <th className="border-b border-gray-300 p-4 text-left">Price</th>
              <th className="border-b border-gray-300 p-4 text-left">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">{index + 1}</p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">{user_id}</p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">{username}</p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">{availableFrom}</p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {building}
                </h3>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg font-semibold text-gray-800">
                  {propertyType}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">
                  Flat No: {flatNo}, Street: {street}, Area: {area}, City:{" "}
                  {city}, State: {state}, PinCode: {pincode}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg text-gray-800">
                  Rooms: {rooms} Square Feet: {sqft} sqft Rent Amount:{" "}
                  {formattedRentAmount} Deposit: {formattedDeposit} Maintenance:{" "}
                  {formattedMaintenance}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4">
                <p className="text-lg font-bold text-gray-800">
                  {formattedPrice}
                </p>
              </td>
              <td className="border-b border-gray-300 p-4">
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
          <div className="bg-white p-4 rounded-md relative max-w-full mx-2">
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
