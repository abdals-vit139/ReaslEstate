import React, { useState } from "react";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import Modal from "../components/Modal";
import axios from "axios";

const FormPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [papersAvailable, setPapersAvailable] = useState(false);
  const [sqft, setSqft] = useState("");
  const [rooms, setRooms] = useState("");
  const [deposit, setDeposit] = useState("");
  const [maintenance, setMaintenance] = useState("");

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDate("");
    setPrice("");
    setPropertyType("");
    setPapersAvailable(false);
    setSqft("");
    setRooms("");
    setDeposit("");
    setMaintenance("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data to be sent to the backend
    const data = {
      selectedOption,
      propertyType,
      askingPrice: price,
      papersAvailable,
      sqft,
      rooms,
      availableFrom: date,
      rentAmount: price,
      deposit,
      maintenance,
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/v1/property/create",
        data
      );
      console.log("Form Submitted:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded shadow-md w-full sm:w-96">
          <h1 className="text-xl font-semibold mb-4 text-center">
            Select an Option
          </h1>
          <form className="space-y-4">
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="Sale"
                    checked={selectedOption === "Sale"}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="Sale"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Lease"
                    checked={selectedOption === "Lease"}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="Lease"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Rent"
                    checked={selectedOption === "Rent"}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="Rent"
              />
            </Box>
          </form>
        </div>

        <Modal
          open={isModalOpen}
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
    </>
  );
};

export default FormPage;
