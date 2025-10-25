import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { io } from "socket.io-client";
import 'leaflet/dist/leaflet.css';

// Socket.IO client
const socket = io("http://localhost:5000");

// Icons
const donorIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/emoji/48/000000/green-circle-emoji.png',
  iconSize: [50, 50], // Increased size
  iconAnchor: [25, 50], // Anchor to bottom-center
  popupAnchor: [0, -50],
});

const receiverIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/emoji/48/000000/red-circle-emoji.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function FoodMap() {
  const [donors, setDonors] = useState([]);
  const [receivers] = useState([{ id: 1, name: 'Charity Home', position: [28.6167, 77.2083] }]);
  const [newDonor, setNewDonor] = useState({ name: '', food: '', quantity: '', address: '' });

  // Socket listeners
  useEffect(() => {
    socket.on("load-donors", (data) => setDonors(data));
    socket.on("update-donors", (data) => setDonors(data));
    socket.on("donor-notification", ({ message }) => alert(message));

    return () => {
      socket.off("load-donors");
      socket.off("update-donors");
      socket.off("donor-notification");
    };
  }, []);

  const handleAddDonor = async (e) => {
    e.preventDefault();
    const query = encodeURIComponent(newDonor.address.trim());
    const apiKey = 'e809430e7727472da5e0607b1a3ee3ec';

    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`);
      const data = await response.json();
      console.log('Geocode API response:', data);

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;

        const newMarker = {
          id: String(Date.now()),
          name: newDonor.name || 'Anonymous Donor',
          food: newDonor.food,
          quantity: newDonor.quantity,
          position: [Number(lat), Number(lng)],
          socketId: socket.id,
        };

        socket.emit('add-donor', newMarker);
        setNewDonor({ name: '', food: '', quantity: '', address: '' });
        alert('✅ Donor added to map!');
      } else {
        alert('❌ Location not found');
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
      alert('❌ Error fetching location');
    }
  };

  const handleClaim = (donorId) => {
    const receiver = { name: 'Receiver 1' };
    socket.emit('claim-donor', { donorId, receiver });
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Map */}
      <MapContainer center={[28.6139, 77.209]} zoom={13} scrollWheelZoom style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {/* Donors */}
        {donors.map(donor => (
          <Marker key={donor.id} position={donor.position} icon={donorIcon}>
            <Popup>
              <div>
                <h4>{donor.name}</h4>
                <p>Food: {donor.food}</p>
                <p>Qty: {donor.quantity}</p>
                {donor.claimed ? (
                  <button disabled>Claimed</button>
                ) : (
                  <button onClick={() => handleClaim(donor.id)}>Claim</button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        {/* Receivers */}
        {receivers.map(receiver => (
          <Marker key={receiver.id} position={receiver.position} icon={receiverIcon}>
            <Popup><h4>{receiver.name}</h4></Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Donor Form */}
      <div
        style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          background: 'white', padding: '15px', borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(252, 10, 10, 0.94)', zIndex: 1000,
          width: '300px'
        }}
      >
        <h3>Add Donor</h3>
        <form onSubmit={handleAddDonor}>
          <input type="text" placeholder="Name" value={newDonor.name} onChange={e => setNewDonor({ ...newDonor, name: e.target.value })} /><br />
          <input type="text" placeholder="Food" value={newDonor.food} onChange={e => setNewDonor({ ...newDonor, food: e.target.value })} /><br />
          <input type="text" placeholder="Quantity" value={newDonor.quantity} onChange={e => setNewDonor({ ...newDonor, quantity: e.target.value })} /><br />
          <input type="text" placeholder="Address" value={newDonor.address} onChange={e => setNewDonor({ ...newDonor, address: e.target.value })} /><br />
          <button type="submit" style={{ marginTop: '5px', padding: '5px 10px' }}>Add to Map</button>
        </form>
      </div>
    </div>
  );
}
