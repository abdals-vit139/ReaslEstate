import React, { useState } from "react";
import PropertyService from "../services/property/Property.service";

const FormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    selectedOption: "sale",
    propertyType: "",
    askingPrice: "",
    papersAvailable: false,
    sqft: "",
    rooms: "",
    availableFrom: "",
    rentAmount: "",
    deposit: "",
    maintenance: "",
    flatNo: "",
    building: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    photo: null,
  });

  const userId = localStorage.getItem("userID");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userId,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value.name,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PropertyService.create(formData);
      console.log(response);
      // Clear form data after successful submission
      setFormData({
        selectedOption: "sale",
        propertyType: "",
        askingPrice: "",
        papersAvailable: false,
        sqft: "",
        rooms: "",
        availableFrom: "",
        rentAmount: "",
        deposit: "",
        maintenance: "",
        flatNo: "",
        building: "",
        street: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
        photo: null,
      });
      // Display success message or redirect to property listing page after successful submission
      // Example: toast.success("Property added successfully!");
      // Example: navigate("/properties");
    } catch (error) {
      console.error(error);
    }

    console.log(formData);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-700 focus:outline-none"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h1 className="text-3xl font-semibold text-center mb-8">
              Add Property
            </h1>
            <form onSubmit={handleSubmit}>
              {/* Selected Option */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Selected Option
                </label>
                <select
                  name="selectedOption"
                  value={formData.selectedOption}
                  onChange={handleChange}
                  className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="lease">For Lease</option>
                </select>
              </div>

              {/* Conditional Fields */}
              {formData.selectedOption === "sale" && (
                <>
                  <div className="mb-4 grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Property Type
                      </label>
                      <input
                        type="text"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter property type"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Asking Price
                      </label>
                      <input
                        type="number"
                        name="askingPrice"
                        value={formData.askingPrice}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter asking price"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sq.Ft.
                      </label>
                      <input
                        type="number"
                        name="sqft"
                        value={formData.sqft}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter Sq.Ft."
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Rooms
                      </label>
                      <input
                        type="number"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter number of rooms"
                      />
                    </div>
                    <div className="mb-4 grid gap-4">
                      <label className="mt-3 px-3 py-2 block text-sm font-medium text-gray-700">
                        <input
                          type="checkbox"
                          name="papersAvailable"
                          checked={formData.papersAvailable}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Papers Available
                      </label>
                    </div>
                  </div>
                </>
              )}

              {(formData.selectedOption === "rent" ||
                formData.selectedOption === "lease") && (
                <>
                  <div className="mb-4 grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Rent Amount
                      </label>
                      <input
                        type="number"
                        name="rentAmount"
                        value={formData.rentAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter rent amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Deposit
                      </label>
                      <input
                        type="number"
                        name="deposit"
                        value={formData.deposit}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter deposit amount"
                      />
                    </div>

                    {formData.selectedOption === "rent" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Maintenance Fee
                        </label>
                        <input
                          type="number"
                          name="maintenance"
                          value={formData.maintenance}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter maintenance fee"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-4">
                    {(formData.selectedOption === "rent" ||
                      formData.selectedOption === "lease") && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Available From
                        </label>
                        <input
                          type="date"
                          name="availableFrom"
                          value={formData.availableFrom}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Common Address Fields */}
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Flat No
                  </label>
                  <input
                    type="text"
                    name="flatNo"
                    value={formData.flatNo}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter flat number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Building
                  </label>
                  <input
                    type="text"
                    name="building"
                    value={formData.building}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter building name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter street name"
                  />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Area
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter pincode"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
