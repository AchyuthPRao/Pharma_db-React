// Import necessary modules
import React, { useEffect, useState } from "react";
import Table from "../Table"; // Update the path as needed

const HandleManufacturers = () => {
  // State to store manufacturers data
  const [manufacturers, setManufacturers] = useState([]);

  // useEffect to fetch manufacturers data on component mount
  useEffect(() => {
    fetchManufacturers();
  }, []);

  // Function to fetch manufacturers data from the server
  const fetchManufacturers = () => {
    fetch("http://localhost:4000/fetchAllMfData")
      .then((response) => response.json())
      .then((data) => {
        setManufacturers(data[0] || []); // Use data[0], or an empty array if data[0] is undefined
      })
      .catch((error) => console.error("Error:", error));
  };

  // Function to delete a manufacturer by ID
  function deleteManufacturer(manufacturerId) {
    fetch(`http://localhost:4000/deleteManufacturer/${manufacturerId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the manufacturers table after deletion
        fetchManufacturers();
      })
      .catch((error) => console.error("Error:", error));
  }

  // Function to update a manufacturer by ID
  function updateManufacturer(manufacturerId) {
    const formData = {
      name: prompt("Enter new manufacturer name:"),
      address: prompt("Enter new address:"),
      phone_number: prompt("Enter new phone number:"),
    };

    fetch(`http://localhost:4000/updateManufacturer/${manufacturerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log("Updating manufacturer with ID:", manufacturerId);
        // Refresh the manufacturers table after update
        fetchManufacturers();
      })
      .catch((error) => console.error("Error:", error));
  }

  // Function to submit a new manufacturer
  function submitManufacturer() {
    const formData = {
      name: document.getElementById("manufacturerName").value,
      address: document.getElementById("manufacturerAddress").value,
      phone_number: document.getElementById("manufacturerPhoneNumber").value,
    };

    fetch("http://localhost:4000/submitmf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the manufacturers table after submission
        fetchManufacturers();
      })
      .catch((error) => console.error("Error:", error));
  }

  // Define columns for the manufacturers table
  const columns = ["manufacturer_id", "name", "address", "phone_number"];
  return (
    <div className="flex flex-col gap-3 items-center text-black ">
      <div className="mt-4 rounded  bg-white p-2 mb-4 text-center">
        <form id="manufacturerForm" className="flex gap-2 rounded ">
          <h2 className="text-2xl mb-2">Add Manufacturer</h2>
          <label htmlFor="manufacturerName">Manufacturer Name:</label>
          <input
            type="text"
            id="manufacturerName"
            name="manufacturerName"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="manufacturerAddress">Address:</label>
          <input
            type="text"
            id="manufacturerAddress"
            name="manufacturerAddress"
            className="border p-1 mb-3"
          />

          <label htmlFor="manufacturerPhoneNumber">Phone Number:</label>
          <input
            type="text"
            id="manufacturerPhoneNumber"
            name="manufacturerPhoneNumber"
            className="border p-1 mb-3"
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitManufacturer}
          >
            Add Manufacturer
          </button>
        </form>
      </div>
      <h2 className="text-2xl mb-4">View Manufacturers Table</h2>
      <Table
        data={manufacturers} 
        columns={columns}
        updateAction={(manufacturerId) => updateManufacturer(manufacturerId)}
        deleteAction={(manufacturerId) => deleteManufacturer(manufacturerId)}
        formType="manufacturers"
      />
    </div>
  );
};

export default HandleManufacturers;
