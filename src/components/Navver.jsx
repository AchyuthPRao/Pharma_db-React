import React from 'react'
import { useNavigate } from 'react-router-dom';

function navver() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/orders');
  };
  const handleDrugClick = () => {
    navigate('/drugs');
  };
  const handleCustClick = () => {
    navigate('/cust');
  };
  const handleManufClick = () => {
    navigate('/manufs');
  };
  const handleSuppClick = () => {
    navigate('/supply');
  };
  return (
    <div className='flex items-center justify-center gap-4 h-screen'>
       <div className="mt-24 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">PharmaDB-Orders</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
          Navigate to Orders
          </p>
          <p className="text-xs leading-7 text-slate-300 space-y-4">
          </p>
          <div className="pt-5 pb-2 flex justify-center">
            <button onClick={handleOrderClick} className="w-36 h-10 font-semibold rounded-md bg-black hover:scale-90 duration-500">
              Visit Orders
            </button>
          </div>
        </div>
       <div className="mt-24 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">PharmaDB-Drugs</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
          Navigate to Drugs
          </p>
          <p className="text-xs leading-7 text-slate-300 space-y-4">
          </p>
          <div className="pt-5 pb-2 flex justify-center">
            <button onClick={handleDrugClick} className="w-36 h-10 font-semibold rounded-md bg-black hover:scale-90 duration-500">
              Visit Drugs
            </button>
          </div>
        </div>
       <div className="mt-24 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">PharmaDB-Manufacturers</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
          Navigate to Manufacturers
          </p>
          <p className="text-xs leading-7 text-slate-300 space-y-4">
          </p>
          <div className="pt-5 pb-2 flex justify-center">
            <button onClick={handleManufClick} className="w-36 h-10 font-semibold rounded-md bg-black hover:scale-90 duration-500">
              Visit
            </button>
          </div>
        </div>
       <div className="mt-24 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">PharmaDB-Customers</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
          Navigate to Customers
          </p>
          <p className="text-xs leading-7 text-slate-300 space-y-4">
          </p>
          <div className="pt-5 pb-2 flex justify-center">
            <button onClick={handleCustClick} className="w-36 h-10 font-semibold rounded-md bg-black hover:scale-90 duration-500">
              Visit Customers
            </button>
          </div>
        </div>
       <div className="mt-24 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">PharmaDB-Suppliers</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
          Navigate to Suppliers
          </p>
          <p className="text-xs leading-7 text-slate-300 space-y-4">
          </p>
          <div className="pt-5 pb-2 flex justify-center">
            <button onClick={handleSuppClick} className="w-36 h-10 font-semibold rounded-md bg-black hover:scale-90 duration-500">
              Visit Suppliers
            </button>
          </div>
        </div>
    </div>
  )
}

export default navver
