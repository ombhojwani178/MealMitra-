import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold tracking-widest">MealMitra</h1>

        {/* Navigation Links */}
        <div className="flex space-x-3">

          <Link 
            to="/" 
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition duration-300 font-medium"
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition duration-300 font-medium"
          >
            About
          </Link>
          
          <Link 
            to="/login" 
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition duration-300 font-medium"
          >
            Login
          </Link>
          
          <Link 
            to="/userchoice" 
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition duration-300 font-medium"
          >
            Register
          </Link>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="px-4 py-2 rounded-full text-white bg-green-700 hover:bg-green-600 transition duration-300 font-medium"
          >
            Cart
          </Link>

        </div>
      </div>
    </nav>
  );
}
