import React, { useState } from "react";
import FoodMap from "./components/FoodMap";
import { useCart } from "./Cartcontext";

export default function ReceiveResults({ userType = "individual" }) {
  const { addToCart } = useCart();

  const [donors, setDonors] = useState([
    {
      name: "Annapurna Restaurant",
      address: "MG Road, Pune",
      foodType: "Prepared Meals",
      quantity: 25,
      expiry: "2025-10-26",
      verified: true,
      claimed: false,
      price: 30,
    },
    {
      name: "GreenLeaf Cafe",
      address: "Brigade Road, Bengaluru",
      foodType: "Fresh Produce",
      quantity: 15,
      expiry: "2025-10-27",
      verified: false,
      claimed: false,
      price: 20,
    },
    {
      name: "Food For All",
      address: "Connaught Place, New Delhi",
      foodType: "Packaged Food",
      quantity: 30,
      expiry: "2025-10-28",
      verified: true,
      claimed: false,
      price: 40,
    },
    {
      name: "Sai Bhojanalaya",
      address: "SG Highway, Ahmedabad",
      foodType: "Prepared Meals",
      quantity: 20,
      expiry: "2025-10-26",
      verified: false,
      claimed: false,
      price: 25,
    },
  ]);

  const claimFood = (index, claimAmount) => {
    setDonors((prevDonors) => {
      const updatedDonors = [...prevDonors];
      const donor = updatedDonors[index];

      if (!donor.claimed && donor.quantity >= claimAmount) {
        donor.quantity -= claimAmount;
        donor.claimed = true;

        const price = userType === "ngo" ? 0 : donor.price;
        addToCart(donor, claimAmount, price);
      }

      return updatedDonors;
    });
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      {/* ===== Map Section at Top ===== */}
      <div className="w-full bg-white py-12 sm:py-16 flex justify-center mb-10">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Live View of Current Donations
          </h2>
          <div
            className="relative w-full overflow-hidden rounded-xl shadow-2xl"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <FoodMap />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Donor Listings ===== */}
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Available Food Donations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {donors.map((donor, index) => {
          const price = userType === "ngo" ? 0 : donor.price;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition relative"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {donor.name}
              </h3>

              <p className="text-gray-700 mb-3">📍 {donor.address}</p>

              <div className="text-sm text-gray-600 mb-4">
                <p>
                  <strong>Available Food:</strong> {donor.foodType}
                </p>
                <p>
                  <strong>Quantity:</strong> {donor.quantity} kg
                </p>
                <p>
                  <strong>Expiry:</strong> {donor.expiry}
                </p>
                <p className="text-lg font-semibold text-green-700 mt-2">
                  Price: ₹{price} / kg
                </p>
              </div>

              {donor.verified && (
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  ✅ MealMitra Assured Quality
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor={`claim-quantity-${index}`}
                  className="block text-sm text-gray-600 mb-2"
                >
                  Claim Food for (people)
                </label>
                <input
                  type="number"
                  id={`claim-quantity-${index}`}
                  min={1}
                  max={donor.quantity}
                  defaultValue={1}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>

              <button
                className={`mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition ${
                  donor.claimed || donor.quantity <= 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => {
                  const claimAmount = parseInt(
                    document.getElementById(`claim-quantity-${index}`).value
                  );
                  if (claimAmount > donor.quantity || claimAmount < 1) {
                    alert("Invalid claim amount.");
                    return;
                  }
                  claimFood(index, claimAmount);
                }}
                disabled={donor.claimed || donor.quantity <= 0}
              >
                {donor.claimed
                  ? "Claimed"
                  : donor.quantity > 0
                  ? "Claim Food"
                  : "Out of Stock"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
