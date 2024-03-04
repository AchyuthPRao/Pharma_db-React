import React, { useEffect, useState } from "react";
import Table from "../Table"; // Update the path as needed

const HandleDrugs = () => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    fetchDrugs();
  }, []);

  function deleteDrug(drugId) {
    fetch(`http://localhost:4000/deleteDrug/${drugId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the drugs table after deletion
        fetchDrugs();
      })
      .catch((error) => console.error("Error:", error));
  }

  function updateDrug(drugId) {
    const formData = {
      name: prompt("Enter new drug name:"),
      dosage: prompt("Enter new dosage:"),
      price: prompt("Enter new price:"),
    };

    fetch(`http://localhost:4000/updateDrug/${drugId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log("Updating drug with ID:", drugId);
        // Refresh the drugs table after update
        fetchDrugs();
      })
      .catch((error) => console.error("Error:", error));
  }

  const fetchDrugs = () => {
    fetch("http://localhost:4000/fetchAllDrugData")
      .then((response) => response.json())
      .then((data) => setDrugs(data))
      .catch((error) => console.error("Error:", error));
  };

  function submitDrug() {
    const formData = {
      name: document.getElementById("name").value,
      dosage: document.getElementById("dosage").value,
      price: document.getElementById("price").value,
    };

    fetch("http://localhost:4000/submitDrugs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the drugs table after submission
        fetchDrugs();
      })
      .catch((error) => console.error("Error:", error));
  }

  const columns = ["drug_id", "name", "dosage", "price"];

  return (
    <div className="flex flex-col gap-3 items-center text-black">
      <div className="mt-6 rounded form-contain bg-white p-4 mb-4">
        <form id="drugForm" className="flex gap-2 rounded">
          <h2 className="text-2xl mb-2">Add Drug</h2>
          <label htmlFor="name">Drug Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            className="border p-1 mb-3"
            required
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitDrug}
          >
            Add Drug
          </button>
        </form>
      </div>

      <h2 className="text-2xl mb-4">View Drugs Table</h2>
      <Table
        data={drugs}
        columns={columns}
        updateAction={(drugId) => updateDrug(drugId)}
        deleteAction={(drugId) => deleteDrug(drugId)}
        formType="drugs"
      />
    </div>
  );
};

export default HandleDrugs;
