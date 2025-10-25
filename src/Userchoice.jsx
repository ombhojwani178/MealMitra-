import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Userchoice() {
  const navigate = useNavigate();

  // Helper function to handle navigation with a type
  const handleRegister = (type) => {
    navigate(`/register?type=${type}`);
  };

  return (
    // Background: Consistent rich gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-lime-100 p-4 sm:p-6">
      
      {/* Main Card Container: High contrast, prominent shadow */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl text-center w-full max-w-lg border-t-4 border-green-500">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-8 text-green-800">
          How will you participate?
        </h2>
        
        {/* Choice Cards Container */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          
          {/* Donor Card */}
          <div
            onClick={() => handleRegister("donor")}
            className="flex-1 max-w-xs p-6 bg-lime-50 rounded-2xl shadow-md cursor-pointer 
                       hover:shadow-xl hover:bg-lime-100 transform hover:-translate-y-1 transition duration-300 border-2 border-lime-200"
          >
            <h3 className="text-2xl font-bold text-lime-700 mb-2">🤝 Donor</h3>
            <p className="text-sm text-gray-600 mb-4">
              I want to share surplus meals or food items with the community.
            </p>
            <button
              className="w-full bg-lime-600 text-white py-2 rounded-xl font-semibold 
                         hover:bg-lime-700 transition"
            >
              Start Donating
            </button>
          </div>

          {/* Receiver Card */}
          <div
            onClick={() => handleRegister("receiver")}
            className="flex-1 max-w-xs p-6 bg-green-50 rounded-2xl shadow-md cursor-pointer 
                       hover:shadow-xl hover:bg-green-100 transform hover:-translate-y-1 transition duration-300 border-2 border-green-200"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-2">💚 Receiver</h3>
            <p className="text-sm text-gray-600 mb-4">
              I need to collect available food or resources shared locally.
            </p>
            <button
              className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold 
                         hover:bg-green-700 transition"
            >
              Find Food
            </button>
          </div>
        </div>

        {/* Footer Link for Existing Users */}
        <div className="mt-8 pt-4 border-t border-gray-100">
            <p className="text-gray-600 text-sm">
                Already registered? 
                <Link 
                    to="/login" 
                    className="text-green-600 font-semibold hover:text-green-800 ml-1 transition"
                >
                    Sign In Here
                </Link>
            </p>
        </div>

      </div>
    </div>
  );
}