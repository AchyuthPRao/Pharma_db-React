import React, { useEffect, useState } from "react";
import Table from "../Table";

const HandleSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = () => {
    fetch("http://localhost:4000/fetchAllSupplierData")
      .then((response) => response.json())
      .then((data) => setSuppliers(data))
      .catch((error) => console.error("Error:", error));
  };

  const deleteSupplier = (supplierId) => {
    fetch(`http://localhost:4000/deleteSupplier/${supplierId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        fetchSuppliers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const updateSupplier = (supplierId) => {
    const formData = {
      supp_name: prompt("Enter new supplier name:"),
      address: prompt("Enter new address:"),
    };

    fetch(`http://localhost:4000/updateSupplier/${supplierId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log("Updating supplier with ID:", supplierId);
        fetchSuppliers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const submitSupplier = () => {
    const formData = {
      name: document.getElementById("supp_name").value,
      address: document.getElementById("supplierAddress").value,
    };

    fetch("http://localhost:4000/submitSupplier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        fetchSuppliers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const columns = ["supplier_id", "name", "address"];

  return (
    <div className="flex flex-col gap-3 items-center text-black">
      <div className="m-6 rounded form-contain bg-white p-2 mb-4">
        <form id="supplierForm" className="flex gap-2">
          <h2 className="text-2xl mb-2">Add Supplier</h2>
          <label htmlFor="supp_name">Supplier Name:</label>
          <input
            type="text"
            id="supp_name"
            name="supp_name"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="supplierAddress">Address:</label>
          <input
            type="text"
            id="supplierAddress"
            name="supplierAddress"
            className="border p-1 mb-3"
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitSupplier}
          >
            Add Supplier
          </button>
        </form>
      </div>

      <h2 className="text-2xl mb-4 font-bold">View Suppliers Table</h2>
      <Table
        data={suppliers}
        columns={columns}
        updateAction={(supplierId) => updateSupplier(supplierId)}
        deleteAction={(supplierId) => deleteSupplier(supplierId)}
        formType="suppliers"
      />
    </div>
  );
};

export default HandleSuppliers;
