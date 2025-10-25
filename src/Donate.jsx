import React from "react";

export default function Donate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 relative">
      {/* Background image */}
      <img
        src="/bg99.jpg" 
        alt="India Map"
        className="absolute right-0 top-0 h-full w-full  object-cover opacity-50 pointer-events-none"
      />

      {/* Donation card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md relative z-10">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
          Post a Donation
        </h2>

        <form className="flex flex-col gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600">
            <option>Prepared Food</option>
            <option>Fresh Produce</option>
            <option>Packaged Food</option>
            <option>Others</option>
          </select>

          <input
            type="number"
            placeholder="Quantity (kgs)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="time"
            placeholder="Pickup time"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="text"
            onfocus = "(this.type='date')"
            placeholder="Expiry date(ddmmyyyy)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Price"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Post Donation
          </button>
        </form>
      </div>
    </div>
  );
}
