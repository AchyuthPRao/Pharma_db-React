import React, { useEffect, useState } from "react";
import Table from "../Table";

const HandleCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch("http://localhost:4000/fetchAllCustomerData")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error:", error));
  };

  const deleteCustomer = (customerId) => {
    fetch(`http://localhost:4000/deleteCustomer/${customerId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        fetchCustomers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const updateCustomer = (customerId) => {
    const formData = {
      cust_name: prompt("Enter new customer name:"),
      email: prompt("Enter new email:"),
    };

    fetch(`http://localhost:4000/updateCustomer/${customerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log("Updating customer with ID:", customerId);
        fetchCustomers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const submitCustomer = () => {
    const formData = {
      cust_name: document.getElementById("customerName").value,
      email: document.getElementById("customerEmail").value,
    };

    fetch("http://localhost:4000/submitCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        fetchCustomers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const columns = ["customer_id", "cust_name", "email"];

  return (
    <div className="flex flex-col gap-3 items-center text-black">
      <div className="m-6 rounded form-contain bg-white p-2 mb-4">
        <form id="customerForm" className="flex gap-2">
          <h2 className="text-2xl mb-2">Add Customer</h2>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="customerEmail">Email:</label>
          <input
            type="text"
            id="customerEmail"
            name="customerEmail"
            className="border p-1 mb-3"
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitCustomer}
          >
            Add Customer
          </button>
        </form>
      </div>

      <h2 className="text-2xl mb-4 font-bold">View Customers Table</h2>
      <Table
        data={customers}
        columns={columns}
        updateAction={(customerId) => updateCustomer(customerId)}
        deleteAction={(customerId) => deleteCustomer(customerId)}
        formType="customers"
      />
    </div>
  );
};

export default HandleCustomers;
