import "./styles.css";
import { useState } from "react";

var dbPlace = {
  hyderabad: [
    {
      name: "Charminar",
      rating: "9/10",
      description: "Adorned with four towers in each corner"
    },
    {
      name: "Golconda Fort",
      rating: "8/10",
      description: "Fort Presenting an impressive structure"
    },
    {
      name: "Salarjung Musuem",
      rating: "8/10",
      description: "Musuem with impressive collection of art objects"
    }
  ],
  mumbai: [
    {
      name: "Gateway of India",
      rating: "9/10",
      description: "Beautiful mounment facing the sea"
    },
    {
      name: "Marine Drive",
      rating: "9/10",
      description: "Seemingly endless seafront that curves around Mumbai"
    },
    {
      name: "Juhu Beach",
      rating: "8/10",
      description: "Sprawling beach located in the Juhu area of Mumbai"
    }
  ],
  jaipur: [
    {
      name: "Hawa Mahal",
      rating: "9/10",
      description:
        "Famous for its windows which enables free circulation of air "
    },
    {
      name: "Jantar Mantar",
      rating: "9/10",
      description: "Outdoor collection of ancient astronomical instruments "
    },
    {
      name: "Amber Palace",
      rating: "8.5/10",
      description: "Classic and romantic fort-palace with magnificent aura"
    }
  ]
};

var places = Object.keys(dbPlace);

export default function App() {
  const [selectedCity, setCity] = useState("Hyderabad");
  function placesClickHandler(city) {
    setCity(city);
  }
  return (
    <div className="App">
      <h1>✈️ Travel to India</h1>
      <p> Places to visit in India.Select a city </p>
      <div>
        {places.map((city) => (
          <button
            onClick={() => placesClickHandler(city)}
            style={{
              cursor: "pointer",
              border: "1px solid black",
              padding: "0.5rem 0.5rem",
              margin: "0.25rem"
            }}
          >
            {city}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {dbPlace[selectedCity]?.map((place) => (
            <li
              style={{
                listStyle: "none",

                border: "1px solid black",
                padding: "0.5rem",
                margin: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "larger" }}> {place.rating} </div>
              <div style={{ fontSize: "larger" }}> {place.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
