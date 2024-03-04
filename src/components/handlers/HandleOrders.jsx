import React, { useEffect, useState } from "react";
import Table from "../Table"; // Update the path as needed

const HandleOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  function deleteOrder(orderId) {
    fetch(`http://localhost:4000/deleteOrder/${orderId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the orders table after deletion
        fetchOrders();
      })
      .catch((error) => console.error("Error:", error));
  }
  function updateOrder(orderId) {
    const formData = {
      quantity: prompt("Enter new quantity:"),
      total_price: prompt("Enter new total price:"),
    };

    fetch(`http://localhost:4000/updateOrder/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Refresh the orders table after update
        fetchOrders();
      })
      .catch((error) => console.error("Error:", error));
  }

  const fetchOrders = () => {
    fetch("http://localhost:4000/fetchAllOrderData")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error:", error));
  };
  function submitOrder() {
    const formData = {
      drug_id: document.getElementById("drug_id").value,
      quantity: document.getElementById("quantity").value,
      order_date: document.getElementById("order_date").value,
      total_price: document.getElementById("total_price").value,
    };

    fetch("http://localhost:4000/submitOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        console.log("Received data from server:", data);
        // Refresh the orders table after submission
        fetchOrders();
      })
      .catch((error) => console.error("Error:", error));
  }
  const columns = [
    "order_id",
    "drug_id",
    "quantity",
    "order_date",
    "total_price",
  ];
  return (
    <div className="flex flex-col gap-3 items-center text-black ">
      <div className="m-6  rounded form-contain bg-white p-2 mb-4">
        <form id="orderForm" className="flex gap-2">
          <h2 className="text-2xl mb-2">Place Order</h2>
          <label htmlFor="drug_id">Drug ID:</label>
          <input
            type="text"
            id="drug_id"
            name="drug_id"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="order_date">Order Date:</label>
          <input
            type="date"
            id="order_date"
            name="order_date"
            className="border p-1 mb-3"
            required
          />

          <label htmlFor="total_price">Total Price:</label>
          <input
            type="text"
            id="total_price"
            name="total_price"
            className="border p-1 mb-3"
            required
          />

          <button
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={submitOrder}
          >
            Submit Order
          </button>
        </form>
      </div>

      <h2 className="text-2xl mb-4 font-bold">View Orders Table</h2>
      <Table
        data={orders}
        columns={columns}
        updateAction={(orderId) => updateOrder(orderId)}
        deleteAction={(orderId) => deleteOrder(orderId)}
        formType="orders"
      />
    </div>
  );
};

export default HandleOrders;
