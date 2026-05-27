import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    const res = await axios.get("http://localhost:5000/api/trips");
    setTrips(res.data);
  };

  return (
    <div>
      <h1>AI Travel Planner</h1>

      {trips.map((trip) => (
        <div key={trip._id}>
          <h3>{trip.destination}</h3>
          <p>Days: {trip.days}</p>
          <p>Budget: ₹{trip.budget}</p>
        </div>
      ))}
    </div>
  );
}

export default App;