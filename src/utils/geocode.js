import axios from 'axios';

// ⚠️ Replace this with your actual OpenCage API key
const OPENCAGE_API_KEY = 'e809430e7727472da5e0607b1a3ee3ec';

// Function to get latitude and longitude from address
export const geocodeAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address
      )}&key=${OPENCAGE_API_KEY}`
    );

    if (response.data.results.length === 0) return null;

    const { lat, lng } = response.data.results[0].geometry;
    return { lat: Number(lat), lng: Number(lng) };
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};