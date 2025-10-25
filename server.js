import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json());

// HTTP server to support Socket.IO
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (modify if needed)
  },
});

let donors = []; // In-memory donor storage (use a database in production)

// Serve a test route
app.get("/", (req, res) => {
  res.send("MealMitra backend is running!");
});

// Socket.IO connection setup
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Send current donors to new connection
  socket.emit("load-donors", donors);

  // Add a new donor
  socket.on("add-donor", (donor) => {
    donors.push(donor);
    io.emit("update-donors", donors); // Broadcast updated donors to all clients
  });

  // Claim a donor (when a receiver claims food)
  socket.on("claim-donor", ({ donorId, receiver }) => {
    donors = donors.map((d) => (d.id === donorId ? { ...d, claimed: true } : d));

    // Notify the donor who added the food
    const donor = donors.find((d) => d.id === donorId);
    if (donor && donor.socketId) {
      io.to(donor.socketId).emit("donor-notification", {
        message: `Your donor "${donor.name}" has been claimed by ${receiver.name}!`,
      });
    }

    // Broadcast the updated donors list to all clients
    io.emit("update-donors", donors);
  });

  // Clean up on disconnect
  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
