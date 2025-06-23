import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ latitude = 51.505, longitude = -0.09, popupText = "Hello!" }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map).bindPopup(popupText).openPopup();
    return () => map.remove();
  }, [latitude, longitude, popupText]);

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "400px", border: "2px solid blue" }}
    ></div>
  );
};

export default LocationMap;