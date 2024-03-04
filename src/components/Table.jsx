import React from "react";

function Table({ data, columns, updateAction, deleteAction, formType }) {
  console.log("Columns:", columns);
  console.log("Data:", data);

  const renderButtons = (row) => {
    if (formType === "orders") {
      return (
        <>
          <button
            onClick={() => updateAction(row.order_id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Update
          </button>
          <button
            onClick={() => deleteAction(row.order_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </>
      );
    } else if (formType === "drugs") {
      return (
        <>
          <button
            onClick={() => updateAction(row.drug_id)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Update Drug
          </button>
          <button
            onClick={() => deleteAction(row.drug_id)}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Drug
          </button>
        </>
      );
    } else if (formType === "manufacturers") {
      return (
        <>
          <button
            onClick={() => updateAction(row.manufacturer_id)}
            className="bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Update Manufacturer
          </button>
          <button
            onClick={() => deleteAction(row.manufacturer_id)}
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Delete Manufacturer
          </button>
        </>
      );
    }else if (formType === "suppliers") {
      return (
        <>
          <button
            onClick={() => updateAction(row.supplier_id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Update Supplier
          </button>
          <button
            onClick={() => deleteAction(row.supplier_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Supplier
          </button>
        </>
      );
    }
    else if (formType === "customers") {
      return (
        <>
          <button
            onClick={() => updateAction(row.customer_id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Update Customer
          </button>
          <button
            onClick={() => deleteAction(row.customer_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Customer
          </button>
        </>
      );
    }
    // Add more conditions for other form types if needed
    return null;
  };

  return (
    <div className="container mx-auto p-4 rounded">
      <table className="rounded border-collapse border w-full bg-gray-100 text-center">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column} className="border">
                {column}
              </th>
            ))}
            <th className="border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border">
              {columns.map((column) => (
                <td key={column} className="border">
                  {row[column]}
                </td>
              ))}
              <td className="border p-3">{renderButtons(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
