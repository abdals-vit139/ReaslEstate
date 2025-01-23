import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormModal from "../../components/FormModal";
import Loader from "../../common/Loader/Loader";
import PropertyService from "../../services/property/Property.service";
import PropertyCard from "../../components/PropertyCard";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await PropertyService.getByUserId(userId);
        // console.log("API Response:", response);
        // console.log("Properties:", response?.data?.properties);
        setPropertyDetails(response?.data?.properties || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProperties();
    }
  }, [userId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* navbar */}
      <nav className="bg-accent p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold">Dashboard</div>
          <div className="space-x-6">
            <Link to="#" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="#" className="text-white hover:text-gray-400">
              Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Add Property button positioned to the right */}
      <div className="flex justify-end mt-4 mr-4">
        <button
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-gray-400"
          onClick={openModal}
        >
          Add Property
        </button>
        <FormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {loading ? (
          <Loader />
        ) : (
          <>
            {Array.isArray(propertyDetails) && propertyDetails.length > 0 ? (
              propertyDetails.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                <p>
                  No properties found. You can{" "}
                  <button onClick={openModal} className="text-primary">
                    add a property
                  </button>
                  !
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
