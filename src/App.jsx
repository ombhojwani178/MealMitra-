import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Button from "./components/Button";
import Card from "./Card";
import Userchoice from "./Userchoice";
import Getchoice from "./Getchoice";
import Donate from "./Donate";
import Receive from "./Receive";
import ReceiveResults from "./ReceiveResults";
import Cart from "./Cart";
import { CartProvider } from "./Cartcontext"; // ✅ Correct import

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/button" element={<Button />} />
              <Route path="/card" element={<Card />} />
              <Route path="/userchoice" element={<Userchoice />} />
              <Route path="/getchoice" element={<Getchoice />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/receive" element={<Receive />} />
              <Route path="/receiveresults" element={<ReceiveResults />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
