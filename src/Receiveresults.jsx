import React from "react";

export default function ReceiveResults() {
  // Mock donor data (temporary, replace later with backend API)
  const donors = [
    {
      name: "Annapurna Restaurant",
      address: "MG Road, Pune",
      foodType: "Prepared Meals",
      quantity: 25,
      expiry: "2025-10-26",
      verified: true,
    },
    {
      name: "GreenLeaf Cafe",
      address: "Brigade Road, Bengaluru",
      foodType: "Fresh Produce",
      quantity: 15,
      expiry: "2025-10-27",
      verified: false,
    },
    {
      name: "Food For All",
      address: "Connaught Place, New Delhi",
      foodType: "Packaged Food",
      quantity: 30,
      expiry: "2025-10-28",
      verified: true,
    },
    {
      name: "Sai Bhojanalaya",
      address: "SG Highway, Ahmedabad",
      foodType: "Prepared Meals",
      quantity: 20,
      expiry: "2025-10-26",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Available Food Donations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition relative"
          >
            {/* Donor Name */}
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              {donor.name}
            </h3>

            {/* Address */}
            <p className="text-gray-700 mb-3">
              📍 {donor.address}
            </p>

            {/* Food details */}
            <div className="text-sm text-gray-600 mb-4">
              <p><strong>Available Food:</strong> {donor.foodType}</p>
              <p><strong>Quantity:</strong> {donor.quantity} kg</p>
              <p><strong>Expiry:</strong> {donor.expiry}</p>
            </div>

            {/* Quality Badge */}
            {donor.verified && (
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                ✅ MealMitra Assured Quality
              </div>
            )}

            {/* Claim Button */}
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Claim Food
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
