import React, { useState, useEffect } from "react";
import Layout from "../../components/adminLayout/Layout";
import PropertyService from "../../services/property/Property.service";
import Loader from "../../common/Loader/Loader";
import PropertyTable from "../../components/PropertyTable";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("sale");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await PropertyService.getAll();
        setProperties(response.data.properties);
        console.log(response.data.properties);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>Error loading properties: {error.message}</p>
      </Layout>
    );
  }

  const filteredProperties = Array.isArray(properties)
    ? properties.filter(
        (property) => property.selectedOption === selectedOption
      )
    : [];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6">
        <div
          id="sale"
          className="bg-blue-500 p-5 rounded-lg shadow-lg cursor-pointer"
          onClick={() => setSelectedOption("sale")}
        >
          <h2 className="text-2xl text-white font-semibold">Sale</h2>
          <p className="text-white">Manage sale listings here.</p>
        </div>

        <div
          id="lease"
          className="bg-green-500 p-5 rounded-lg shadow-lg cursor-pointer"
          onClick={() => setSelectedOption("lease")}
        >
          <h2 className="text-2xl text-white font-semibold">Lease</h2>
          <p className="text-white">Manage lease listings here.</p>
        </div>

        <div
          id="rent"
          className="bg-yellow-500 p-5 rounded-lg shadow-lg cursor-pointer"
          onClick={() => setSelectedOption("rent")}
        >
          <h2 className="text-2xl text-white font-semibold">Rent</h2>
          <p className="text-white">Manage rent listings here.</p>
        </div>
      </div>

      {/* Property Cards for the selectedOption */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <PropertyTable
              key={property.id}
              property={property}
              index={index}
            />
          ))
        ) : (
          <p>No properties available for {selectedOption}.</p>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
