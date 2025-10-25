import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let userType = queryParams.get("type"); // donor or receiver

  // Capitalize first letter if exists
  userType = userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : "";

  const [fssaiCertified, setFssaiCertified] = useState("");
  const [receiverType, setReceiverType] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-lime-100 p-4 sm:p-6">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-sm text-center transform transition-all duration-500 hover:scale-[1.02] border-t-4 border-lime-500">
        <h2 className="text-3xl font-extrabold mb-8 text-green-800">
          {userType ? `Register as ${userType}` : "Create Account"}
        </h2>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-100 focus:border-lime-600 transition duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-100 focus:border-lime-600 transition duration-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 focus:outline-none focus:ring-4 focus:ring-lime-100 focus:border-lime-600 transition duration-200"
          />

          {/* Donor-specific fields */}
          {userType.toLowerCase() === "donor" && (
            <>
              <input
                type="text"
                placeholder="Company/Organization Name"
                className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-100 focus:border-lime-600 transition duration-200"
              />
              <input
                type="text"
                placeholder="GST Number (Optional)"
                className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-lime-100 focus:border-lime-600 transition duration-200"
              />

              {/* FSSAI Certification */}
              <div className="flex flex-col items-start gap-2 mt-2 pt-2 border-t border-gray-100 px-1">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Are you FSSAI Certified?
                </p>
                <div className="flex justify-start gap-6 w-full">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input
                      type="radio"
                      name="fssai"
                      value="yes"
                      checked={fssaiCertified === "yes"}
                      onChange={(e) => setFssaiCertified(e.target.value)}
                      className="text-lime-600 focus:ring-lime-500"
                    />
                    Yes, Certified
                  </label>
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input
                      type="radio"
                      name="fssai"
                      value="no"
                      checked={fssaiCertified === "no"}
                      onChange={(e) => setFssaiCertified(e.target.value)}
                      className="text-lime-600 focus:ring-lime-500"
                    />
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Receiver-specific fields */}
          {userType.toLowerCase() === "receiver" && (
            <div className="flex flex-col items-start gap-2 mt-2 pt-2 border-t border-gray-100 px-1">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Are you registering as an Individual or an Organization?
              </p>
              <div className="flex justify-start gap-6 w-full">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name="receiverType"
                    value="individual"
                    checked={receiverType === "individual"}
                    onChange={(e) => setReceiverType(e.target.value)}
                    className="text-lime-600 focus:ring-lime-500"
                  />
                  Individual
                </label>
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name="receiverType"
                    value="organization"
                    checked={receiverType === "organization"}
                    onChange={(e) => setReceiverType(e.target.value)}
                    className="text-lime-600 focus:ring-lime-500"
                  />
                  NGO / Charity / Social Welfare Org
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold text-lg py-3 rounded-xl hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 mt-2"
          >
            Start Sharing
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:text-green-800 ml-1 transition"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
