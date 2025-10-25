import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  return (
    // Background: Darker gradient for a richer look
    <div className="min-h-screen flex items-center justify-center bg-gray-50 from-green-50 to-lime-100 p-4 sm:p-6">
      
      {/* Login Card: Increased shadow, rounded corners, and a subtle green accent border */}
      <div 
        className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-sm text-center transform transition-all duration-500 hover:scale-[1.02] border-t-4 border-green-500"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-green-800">
          Sign In to MealMitra
        </h2>
        
        <form className="flex flex-col gap-5">
          {/* Email Input: Larger, more defined focus state, and a slightly darker border */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-600 transition duration-200"
          />
          
          {/* Password Input: Same modern styling */}
          <input 
            type="password" 
            placeholder="Password" 
            className="border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-600 transition duration-200"
          />
          
          {/* Login Button: Bolder, full-width, higher padding, and a deep, noticeable hover state */}
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white font-semibold text-lg py-3 rounded-xl hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300"
          >
            Access Account
          </button>
        </form>

        {/* Divider and Footer Links */}
        <div className="mt-6 text-sm">
            <Link 
                to="/forgot-password" 
                className="text-green-600 hover:text-green-800 font-medium transition"
            >
                Forgot Password?
            </Link>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-600 text-sm">
                New to MealMitra? 
                <Link 
                    to="/userchoice" 
                    className="text-green-600 font-semibold hover:text-green-800 ml-1 transition"
                >
                    Create an Account
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;